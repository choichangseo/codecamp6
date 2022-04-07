// import axios from 'axios'
import { ChangeEvent, useState, useRef } from "react";
import { useMutation, gql } from "@apollo/client";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../freeboard_frontend/src/commons/types/generated/types";
import { Modal } from "antd";
import { checkFileValidation } from "../../src/commons/libraries/validation";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
export default function GraphqlMutationPage() {
  const [mywriter, setMyWriter] = useState("");
  const [mytitle, setMyTitle] = useState("");
  const [mycontents, setMyContents] = useState("");
  const [mypassword, setMyPassword] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string | undefined>("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [data, setData] = useState("");
  const [callApi] = useMutation(CREATE_BOARD);

  const callGraphqlApi = async () => {
    // const data = await axios.get("http://koreanjson.com/posts/1")
    const result = await callApi({
      variables: {
        createBoardInput: {
          writer: mywriter,
          title: mytitle,
          contents: mycontents,
          password: mypassword,
          images: [imageUrl],
        },
      },
    });
    console.log(result);
    console.log(result.data.createBoard.message);
    setData(result.data.createBoard.message);
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setMyWriter(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setMyTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setMyContents(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassword(event.target.value);
  };

  const onClickImg = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);
    const isValid = checkFileValidation(file);
    if (!isValid) return;
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
  return (
    <div>
      {/* <div>{data}</div> */}
      작성자:
      <input type="text" onChange={onChangeWriter} />
      <br />
      제목:
      <input type="text" onChange={onChangeTitle} />
      <br />
      내용:
      <input type="text" onChange={onChangeContents} />
      <br />
      비밀번호
      <input type="text" onChange={onChangePassword} />
      <br />
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
      <button onClick={callGraphqlApi}>Graphql-Api 요청하기!!!</button>
    </div>
  );
}
