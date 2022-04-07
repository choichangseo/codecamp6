import { useMutation, gql } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import { Modal } from "antd";
import * as S from "./uploadfile.presenter";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../commons/types/generated/types";
const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
interface IUploadFile {
  setImageUrl: any;
  imageUrl?: string;
}

export default function UploadFile(props: IUploadFile) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    try {
      const result = await uploadFile({
        variables: { file },
      });
      console.log(result.data?.uploadFile.url);
      props.setImageUrl(result.data?.uploadFile.url);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const onClickImg = () => {
    fileRef.current?.click();
  };

  return (
    <S.Wrapper>
      <S.UploadButton onClick={onClickImg}>+ Upload</S.UploadButton>
      <S.UploadImg src={`https://storage.googleapis.com/${props.imageUrl}`} />
      <input
        ref={fileRef}
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
      />
    </S.Wrapper>
  );
}
