import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoarderDetailUI from "./BoarderDetail.presenter";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoarderDetail.queries";
import { useMutation } from "@apollo/client";
import { MouseEvent, useState } from "react";

export default function BoardDetail() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
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
    console.log(data);
  };

  const onClickListPage = () => {
    router.push(`/boards`);
  };

  const onClickLikeBoard = (event: MouseEvent<HTMLImageElement>) => {
    likeBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
      ],
    });
  };

  const onClickDisLikeBoard = (event: MouseEvent<HTMLImageElement>) => {
    dislikeBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
      ],
    });
  };

  return (
    <BoarderDetailUI
      data={data}
      onClickDelete={onClickDelete}
      onClickEditPage={onClickEditPage}
      onClickListPage={onClickListPage}
      onClickLikeBoard={onClickLikeBoard}
      onClickDisLikeBoard={onClickDisLikeBoard}
    />
  );
}
