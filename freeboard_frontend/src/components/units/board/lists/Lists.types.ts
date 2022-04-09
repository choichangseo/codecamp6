import { MouseEvent, ChangeEvent } from "react";

export interface ListPresenterProps {
  data?: any;
  keyWord: string;
  onClickMoveBoarderWrite: () => void;
  onClickMoveBoardTitle: (event: MouseEvent<HTMLDivElement>) => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}
