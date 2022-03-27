import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoarderDetailUI from "./BoarderDetail.presenter";
import { FETCH_BOARD, DELETE_BOARD } from "./BoarderDetail.queries";
import { useMutation } from "@apollo/client";
import { MouseEvent, useState } from "react";

export default function BoardDetail() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [password, setPassword] = useState();
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) },
  });

  const onClickDelete = (event: MouseEvent<HTMLDivElement>) => {
    deleteBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
      ],
    });
    router.push("/boards");
  };
  const onClickEditPage = () => {
    router.push(`/boards/${String(router.query.boardId)}/edit`);
  };

  const onClickListPage = () => {
    router.push(`/boards`);
  };

  return (
    <BoarderDetailUI
      data={data}
      onClickDelete={onClickDelete}
      onClickEditPage={onClickEditPage}
      onClickListPage={onClickListPage}
    />
  );
}
