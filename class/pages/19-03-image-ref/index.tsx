import { ChangeEvent, useState, useRef } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../freeboard_frontend/src/commons/types/generated/types";
import { Modal } from "antd";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string | undefined>("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);
    try {
      const result = await uploadFile({
        variables: { file },
      });
      console.log(result.data?.uploadFile.url);
      setImageUrl(result.data?.uploadFile.url);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const onClickImg = () => {
    fileRef.current?.click();
  };

  return (
    <>
      <input
        ref={fileRef}
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
      />
      <div
        onClick={onClickImg}
        style={{ width: "50px", height: "50px", backgroundColor: "blue" }}
      >
        이미지선택
      </div>
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
      <div>이미지 업로드 연습하기</div>
    </>
  );
}
