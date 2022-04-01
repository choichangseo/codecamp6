import { useQuery, gql } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroller";
import styled from "@emotion/styled";

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

export default function QuizScroller() {
  const StyleScroll = styled.div`
    height: 500px;
    overflow: auto;
  `;

  const { data, fetchMore } = useQuery(FETCH_BOARDS);
  const onLoad = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data.fetchBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards)
          return { fetchBoards: [...prev.fetchBoards] };
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <div>
      <StyleScroll>
        <InfiniteScroll
          pageStart={0}
          loadMore={onLoad}
          hasMore={true}
          useWindow={false}
        >
          {data?.fetchBoards.map((el: any, index: number) => (
            <div key={el._id}>
              <div>{el.writer}</div>
              <div>{el.title}</div>
              <div>{el.contents}</div>
              <div>{index}</div>
            </div>
          ))}
        </InfiniteScroll>
      </StyleScroll>
    </div>
  );
}
