import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARD_BEST = gql`
  query fetchBoardsOfTheBest {
    fetchBoardsOfTheBest {
      _id
      images
      writer
      title
      likeCount
      createdAt
    }
  }
`;

export default function BestBoard() {
  const { data } = useQuery(FETCH_BOARD_BEST);

  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;
  const BestBoardRow = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px;
    border: 1px solid gray;
  `;
  const BestBoardWriter = styled.div``;
  const BestBoardTittle = styled.div``;
  const BestBoardLikeCount = styled.div``;
  const BestBoardCreatedAt = styled.div``;

  return (
    <Wrapper>
      {data?.fetchBoardsOfTheBest.map((el: any) => (
        <BestBoardRow key={el._id}>
          <BestBoardTittle>{el.title}</BestBoardTittle>
          <BestBoardWriter>{el.writer}</BestBoardWriter>
          <BestBoardLikeCount>{el.likeCount}</BestBoardLikeCount>
          <BestBoardCreatedAt>{el.createdAt}</BestBoardCreatedAt>
        </BestBoardRow>
      ))}
    </Wrapper>
  );
}
