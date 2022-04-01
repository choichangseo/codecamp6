import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { getDate } from "../../../../commons/libraries/utils";

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
    width: 200px;
    height: 170px;
    margin: 50px;
    border-radius: 15%;
    text-align: center;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  `;
  const BestBoardWriter = styled.div`
    padding-top: 10px;
  `;
  const BestBoardTittle = styled.div`
    padding-top: 10px;
  `;
  const BestBoardLikeCount = styled.div`
    padding-top: 10px;
  `;
  const BestBoardCreatedAt = styled.div`
    padding-top: 10px;
  `;

  return (
    <Wrapper>
      {data?.fetchBoardsOfTheBest.map((el: any) => (
        <BestBoardRow key={el._id}>
          <BestBoardTittle>{el.title}</BestBoardTittle>
          <BestBoardWriter>{el.writer}</BestBoardWriter>
          <BestBoardLikeCount>{el.likeCount}</BestBoardLikeCount>
          <BestBoardCreatedAt>{getDate(el.createdAt)}</BestBoardCreatedAt>
        </BestBoardRow>
      ))}
    </Wrapper>
  );
}
