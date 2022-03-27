import BoardDetail from "../../../src/components/units/board/detail/BoarderDetail.components";
import ReplyList from "../../../src/components/units/board/ReplyList/ReplyList.component";
import ReplyWrite from "../../../src/components/units/board/ReplyWrite/ReplyWrite.component";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

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
    }
  }
`;

export default function BoardPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  return (
    <>
      <BoardDetail />
      <ReplyWrite />
      <ReplyList />
    </>
  );
}
