import ListPresenter from "./Lists.presenter";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

interface ListComponentsProps {
  data?: any;
}

export default function ListComponents(props: ListComponentsProps) {
  const router = useRouter();
  const onClickMoveBoarderWrite = () => {
    router.push(`/boards/new`);
  };
  const onClickMoveBoardTitle = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/${(event.target as HTMLButtonElement).id}`);
  };

  return (
    <>
      <ListPresenter
        data={props.data}
        onClickMoveBoarderWrite={onClickMoveBoarderWrite}
        onClickMoveBoardTitle={onClickMoveBoardTitle}
      />
    </>
  );
}
