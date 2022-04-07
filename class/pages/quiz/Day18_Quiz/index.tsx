import { useState, ChangeEvent, useRef } from "react";
import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      images
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

export default function ImageQuiz() {
  const [createBoard] = useMutation(CREATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [imgFile, setImgFile] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
    password: "",
  });

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [event.target.id]: event.target.value });
  };

  const onClickCreateBoard = async () => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            ...inputs,
            images: [imgFile],
          },
        },
      });
      console.log(result);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const result = await uploadFile({
      variables: { file },
    });
    setImgFile(result.data?.uploadFile.url);
  };

  const onClickImg = () => {
    fileRef.current?.click();
  };

  return (
    <>
      <div>작성자</div>
      <input id="writer" type="text" onChange={onChangeInputs} />
      <br />
      <div>제목</div>
      <input id="title" type="text" onChange={onChangeInputs} />
      <br />
      <div>내용</div>
      <input id="contents" type="text" onChange={onChangeInputs} />
      <br />
      <div>비밀번호</div>
      <input id="password" type="text" onChange={onChangeInputs} />
      <br />
      <button onClick={onClickCreateBoard}>등록하기</button>
      <div
        onClick={onClickImg}
        style={{ width: "50px", height: "50px", backgroundColor: "red" }}
      >
        이미지첨부
      </div>
      <img src={`https://storage.googleapis.com/${imgFile}`} />
      <input
        ref={fileRef}
        style={{ display: "none" }}
        onChange={onChangeFile}
        type="file"
      />
    </>
  );
}
