import { useQuery } from "@apollo/client";
import ListPresenter from "./Lists.presenter";
import { FETCH_BOARDS } from "./Lists.queries";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

export default function ListComponents() {
  const { data } = useQuery(FETCH_BOARDS);
  const router = useRouter();
  const onClickMoveBoarderWrite = () => {
    router.push(`/boards/new`);
  };
  const onClickMoveBoardTitle = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/${(event.target as HTMLButtonElement).id}`);
  };

  return (
    <ListPresenter
      data={data}
      onClickMoveBoarderWrite={onClickMoveBoarderWrite}
      onClickMoveBoardTitle={onClickMoveBoardTitle}
    />
  );
}
