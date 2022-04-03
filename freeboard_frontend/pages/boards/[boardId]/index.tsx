import BoardDetail from "../../../src/components/units/board/detail/BoarderDetail.components";
import ReplyList from "../../../src/components/units/board/ReplyList/ReplyList.component";
import ReplyWrite from "../../../src/components/units/board/ReplyWrite/ReplyWrite.component";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../src/commons/types/generated/types";

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

export default function BoardPage() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.boardId) },
    }
  );

  return (
    <>
      <BoardDetail />
      <ReplyWrite />
      <ReplyList />
    </>
  );
}
