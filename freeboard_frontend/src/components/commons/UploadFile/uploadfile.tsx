import { useMutation, gql } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import { Modal } from "antd";
import * as S from "./uploadfile.presenter";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
interface IUploadFile {
  fileUrl: string;
  index: number;
  onChangeFileUrls: (fileUrls: string, index: number) => void;
}

export default function UploadFile(props: IUploadFile) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    try {
      const result = await uploadFile({
        variables: { file },
      });
      console.log(result.data?.uploadFile.url);
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const onClickImg = () => {
    fileRef.current?.click();
  };

  return (
    <S.Wrapper>
      {props.fileUrl ? (
        <S.UploadImg
          onClick={onClickImg}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <S.UploadButton onClick={onClickImg}>+ Upload</S.UploadButton>
      )}
      <input
        ref={fileRef}
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
      />
    </S.Wrapper>
  );
}
