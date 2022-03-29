import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import { FETCH_BOARDS_COMMENTS, DELETE_COMMENT } from "./ReplyList.queries";
import ReplyListPresenter from "./ReplyList.presenter";
import { MouseEvent, useState } from "react";

export default function ReplyList() {
  const router = useRouter();
  const [deleteBoardComment] = useMutation(DELETE_COMMENT);
  const [password, setPass] = useState("");

  const onClickBoardDelete = (event: MouseEvent<HTMLImageElement>) => {
    const password = prompt("비밀번호를 입력해주세요.");
    setPass(String(password));
    deleteBoardComment({
      variables: {
        boardCommentId: (event.target as HTMLButtonElement).id,
        password: password,
      },
      refetchQueries: [
        {
          query: FETCH_BOARDS_COMMENTS,
          variables: { boardId: String(router.query.boardId) },
        },
      ],
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
