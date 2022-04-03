import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";

// 자신이 반복적으로 스크롤하여 랜더링해주고 싶은 데이터를 gql을 통해서 페이지를 가져온다.
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
const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
const Column = styled.div`
  width: 25%;
`;

export default function MapBoardPage() {
  // 원하는 게시글 페이지를 data에 담아주고 fetchMore를 통해 지속적으로 랜더링 시켜준다.
  const { data, fetchMore } = useQuery(FETCH_BOARDS);

  // 함수의 이름은 어떤 것이든 상관없고 아래 InfiniteScroll loadMore에서 어떠한 정보를 내려줄지 여기서 완성하면된다.
  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data.fetchBoards.length / 10) + 1 },
      // variablese에 랜더링해줄 페이지를 계산하여 넣어준다.
      updateQuery: (prev, { fetchMoreResult }) => {
        // 이전 페이지와 앞으로 더 랜더링될 페이지들을 updateQuery 해준다.
        if (!fetchMoreResult.fetchBoards)
          // 더 이상 패치할 페이지가 없을 때 이전 페이지를 보여주며 끝낸다.
          return { fetchBoards: [...prev.fetchBoards] };
        return {
          // 스프레드 연산자로 이전 페이지와 다음에 나올 페이지가 연달아 나오게 붙여준다.
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
      {/* loadMore : 어떤 데이터를 받아와 계속 스크롤을 통해 보여줄지 , hasMore 스크롤이 하단에 다 내려왔을때 계속 loadMor을 해줄지 말지 */}
      {data?.fetchBoards.map((el: any, index: number) => (
        // 자신이 계속 랜더링해주고 싶은 페이지를 map을 통해서 내려준다.
        <Row key={el._id}>
          <Column>{el._id}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
          <Column>{index}</Column>
        </Row>
      )) || <div>Loading</div>}
    </InfiniteScroll>
  );
}
