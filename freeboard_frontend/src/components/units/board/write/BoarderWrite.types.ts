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
  onChangeAddress: (event: ChangeEvent<HTMLInputElement>) => void;
  writererror: string;
  passworderror: string;
  titleerror: string;
  contentserror: string;
  onClickSubmit: () => void;
  onClickEditPage: () => void;
  isActive: boolean;
  isEdit?: boolean;
  data?: any;
  showModal: any;
  handleOk: any;
  handleCancel: any;
  isModalVisible: any;
  handleComplete: any;
  myhome: string;
  zipcode: string;
  addressDetail: string;
  imageUrl: string[];
  onChangeFileUrls: (fileUrls: string, index: number) => void;
}

export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  images?: any;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
}
