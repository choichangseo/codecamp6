import BoarderWriterPage from "../../../../src/components/units/board/write/BoarderWrite.components";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery } from "../../../../../class/src/commons/types/generated/types";
import { IQueryFetchBoardArgs } from "../../../../src/commons/types/generated/types";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      likeCount
      dislikeCount
      createdAt
      youtubeUrl
      boardAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;
export default function BoardEditPage() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.boardId) },
    }
  );

  return <BoarderWriterPage data={data} isEdit={true} />;
}
