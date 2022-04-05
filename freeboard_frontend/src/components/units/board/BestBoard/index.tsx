import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { getDate } from "../../../../commons/libraries/utils";
import { IQuery } from "../../../../commons/types/generated/types";
import { IUseditem } from "../../../../../../class/src/commons/types/generated/types";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoardsOfTheBest">, IUseditem>(
    FETCH_BOARD_BEST
  );
  const onClickBest = (event: any) => {
    router.push(`/boards/${event.target.id}`);
  };
  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
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
    overflow: hidden;
  `;
  const BestBoardWriter = styled.div`
    padding-top: 10px;
  `;
  const BestBoardTittle = styled.div`
    padding-top: 10px;
    text-overflow: ellipsis;
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
          <BestBoardTittle onClick={onClickBest} id={el._id}>
            {el.title}
          </BestBoardTittle>
          <BestBoardWriter>{el.writer}</BestBoardWriter>
          <BestBoardLikeCount>{el.likeCount}</BestBoardLikeCount>
          <BestBoardCreatedAt>{getDate(el.createdAt)}</BestBoardCreatedAt>
        </BestBoardRow>
      ))}
    </Wrapper>
  );
}
