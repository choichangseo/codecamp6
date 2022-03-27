import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import { FETCH_BOARDS_COMMENTS, DELETE_COMMENT } from "./ReplyList.queries";
import ReplyListPresenter from "./ReplyList.presenter";
import { MouseEvent } from "react";

export default function ReplyList() {
  const router = useRouter();
  const [deleteBoardComment] = useMutation(DELETE_COMMENT);

  const onClickBoardDelete = (event: MouseEvent<HTMLDivElement>) => {
    deleteBoardComment({
      variables: {
        boardCommentId: (event.target as HTMLButtonElement).id, password:
      },
    });
  };
  const { data: data2 } = useQuery(FETCH_BOARDS_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });
  console.log(data2);

  return (
    <ReplyListPresenter data2={data2} onClickBoardDelete={onClickBoardDelete} />
  );
}
