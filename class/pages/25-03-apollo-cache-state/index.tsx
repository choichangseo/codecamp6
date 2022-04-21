import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function ApolloCacheStatePage() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);
  const { data } = useQuery(FETCH_BOARDS);

  // async는 로직과 가장 가까운 괄호에 넣어준다.
  // 각각 컴포넌트에서 주고 받은 data들은 컴포넌트에 저장되는게 아니라 globalState(apollo-cache-state)에 저장되어진다.
  // fetchBoard는 fetchBoard라는 이름으로 fetchProduct는 fetchProduct라는 이름으로 globalState에 저장되고
  // 우리는 globalState를 cache.modify를 통해 직접 수정해주려고 한다.
  // prev는 현재 상태이다. 등록하게되면 prev[{writer: ,title: ,}] 배열 앞에 가장 최신 글[{최신글}{writer: ,title: ,}]이 들어오게된다.
  // 이렇게 globalState가 바뀌게되면 globalState를 사용하고 있는 모든 컴포넌트에서 바뀌게되어 리랜더링된다.
  // 삭제의 경우 기존의 배열이 10개 있다면 prev에서 원하는 특정 아이디만 제거해주면 되는데 필터를 이용하여 deletedId를 지워주고 나머지 9개만 return 해주면된다.
  // cache에서는 그냥 _id 를 못가져오기 때문에 readField를 써줘야한다.
  // 게시글 목록같은 경우 삭제해도 10개가 남겨져있어야하기 때문에 사용하기 힘들고 무한스크롤이 적용되는 댓글리스트 페이지 같은 곳에서 사용하면 좋다.
  const onClickDelete = (boardId: string) => async () => {
    // 삭제하기로직
    await deleteBoard({
      variables: { boardId },
      update(cache, { data }) {
        const deleteId = data.deleteBoard;
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              const filteredPrev = prev.filter(
                (el: any) => readField("_id", el) !== deleteId
              );
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };

  const onClickSubmit = async () => {
    // 등록하기로직
    await createBoard({
      variables: {
        createBoardInput: {
          writer: "영희",
          password: "1234",
          title: "제목입니다~",
          contents: "내용입니다@@@",
        },
      },
      update(cache, { data }) {
        data.createBoard;
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}

// 1. 구조분해 할당으로 함수 파라미터 받기
// function onClickAAA({ name, age, school }){
//   console.log(name)
// }

// const child = {
//   name: "철수",
//   age: 13,
//   school: "다람쥐초등학교"
// }
// onClickAAA(child)

// const name = "철수"
// const age = 8
// const school ="다람쥐초등학교"
// onClickAAA({name , school})
// 이렇게 넣어주게되면 age가 빠지더라도 순서가 당겨저 school이 age에 할당될 일이 없다.

// 2. 안좋은 옛날 방식
// function onClickAAA(name, age, school){
//   console.log(name)
// }
// 중간에 age가 실수로 빠져버리게되면 school이 age에 할당될수도있음
//   const name: "철수"
//   const age: 13
//   const school: "다람쥐초등학교"
// onClickAAA(name, school)
