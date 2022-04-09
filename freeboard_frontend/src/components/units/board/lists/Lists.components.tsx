import ListPresenter from "./Lists.presenter";
import { useRouter } from "next/router";
import { MouseEvent, ChangeEvent, useState } from "react";
import _ from "lodash";

interface ListComponentsProps {
  data?: any;
  refetch: any;
}

export default function ListComponents(props: ListComponentsProps) {
  const router = useRouter();
  const [keyWord, setKeyWord] = useState("");
  const onClickMoveBoarderWrite = () => {
    router.push(`/boards/new`);
  };
  const onClickMoveBoardTitle = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/${(event.target as HTMLButtonElement).id}`);
  };

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  const getDebounce = _.debounce((data) => {
    props.refetch({ search: data, page: 1 });
    setKeyWord(data);
  }, 200);

  return (
    <>
      <ListPresenter
        data={props.data}
        keyWord={keyWord}
        onClickMoveBoarderWrite={onClickMoveBoarderWrite}
        onClickMoveBoardTitle={onClickMoveBoardTitle}
        onChangeSearch={onChangeSearch}
      />
    </>
  );
}
