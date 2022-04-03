import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
// 내가 원하는 게시글을 페이지네이션 처리하기위해 백앤드에서 gql을 통해 게시글 목록 정보를 받아온다.
const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;
// 총 페이지를 계산하기 위해서 백엔드에서 제공해주는 게시글의 총량을 가져온다.
const FETCH_BOARD_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
const Column = styled.div`
  width: 25%;
`;
const Page = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;

export default function MapBoardPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  // 게시글 정보를 데이터에 담아주고 페이지를 클릭할때마다 게시글 정보가 다시 리랜더링될수있게 refetch를 사용해준다.
  const { data: dataBoardsCount } = useQuery(FETCH_BOARD_COUNT);
  // 총 페이지 계산을 위해 가져오는 데이터이지만 위에 게시글 정보 데이터와 변수명이 겹치기 떄문에 dataBoardCount로 다시 선언해준다.
  const [startPage, setStartPage] = useState(1);
  // 기본 스타트 페이지다 원래는 index+1로 계산하여 사용하지만 편리하게 사용하기위해 스테이트에 스타트페이지 1 값을 담아주어 인덱스 대신에 사용한다.
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);
  // 마지막 페이지 계산이다. 백엔드에서 가져온 총 페이지 수에 나누기 10을하면 필요한 페이지 수가 나오고
  // 페이지가 135 이렇게 나오게되면 14페이지까지 보여줘야하기때문에 Math.ceil을 이용하여 올림 해준다.

  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) });
  };
  // 페이지를 클릭했을때 발생하는 이벤트로 자신이 클릭한 페이지에 id 값을 부여하여 refetch를 통해 이동할 수 있게 한다.

  const onClickPrevPage = (event) => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    refetch({ page: startPage - 10 });
  };
  // 21-30페이지까지 있을때 이전페이지 버튼을 클릭하면 11-20 페이지로 보내주는 클릭함수
  // 시작페이지가 1페이지면 돌아갈수 있는 페이지가 없으므로 1일 때 리턴해준다.

  const onClickNextPage = (event) => {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
    refetch({ page: startPage + 10 });
  };
  // 21-30페이지까지 있을때 다음페이지 버튼을 클릭하면 31-40 페이지로 보내주는 클릭함수
  // 마지막 페이지가 스타트페이지+10했을때 더 커질수 없으므로 더 이상 넘어가지 않게 리턴해준다.
  return (
    <div>
      {data?.fetchBoards.map((el: any, index: number) => (
        <Row key={el._id}>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
          <Column>{index}</Column>
        </Row>
        // 게시글 목록을 map 매서드를 통해 페이지에 랜더링 해준다.
      ))}
      {/* new Array 매서드로 빈배열에 숫자 1로 채워주고 인덱스를 부여해 map을 통해 내려준다. */}
      <span onClick={onClickPrevPage}>이전페이지</span>
      {new Array(10).fill(1).map((_, index) =>
        index + startPage <= lastPage ? (
          <Page
            key={index + startPage}
            onClick={onClickPage}
            id={String(index + startPage)}
          >
            {/* 그냥 fill 상태로 내려줘서 원하는 페이지 숫자인 10개 배열을 만들어주고 index를 키값으로 부여하여 랜더링해준다.
             이떄 index+startPage를 주게되면 차례대로 12345678910이 map()으로 뿌려지게된다. */}
            {index + startPage}
          </Page>
        ) : (
          // index+startPage가 lastPage에 갈때까지만 랜더링해주고 그 외에는 랜더링해주지 않기위해 삼항연산자를 사용한다.
          <span></span>
        )
      )}
      <span onClick={onClickNextPage}>다음</span>
      {/* {[1, 2, 3, 4].map((el) => (
        <Page key={el} onClick={onClickPage} id={String(el)}>
          {el}
        </Page>
      ))} */}
      {/* 
      <span onClick={onClickPage} id="2">
        2
      </span>
      <span onClick={onClickPage} id="3">
        3
      </span>
      <span onClick={onClickPage} id="4">
        4
      </span> */}
    </div>
  );
}
