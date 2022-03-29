import { ChangeEvent } from "react";

export interface IsResisterButtonProps {
  isActive: boolean;
}

export interface BoarderWritePageProps {
  isEdit?: boolean;
  data?: any;
}

export interface BoarderWriteUIProps {
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => any;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTittle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeYoutube: (event: ChangeEvent<HTMLInputElement>) => void;
  writererror: string;
  passworderror: string;
  titleerror: string;
  contentserror: string;
  onClickSubmit: () => void;
  onClickEditPage: () => void;
  isActive: boolean;
  isEdit?: boolean;
  data?: any;
}

export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
}
