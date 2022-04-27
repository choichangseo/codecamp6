import { useMutation, gql } from "@apollo/client";
import { useState, ChangeEvent } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function ImageUploadPreviewPage() {
  const [file1, setFile1] = useState<File>();
  const [imgUrl, setImgUrl] = useState("");
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return alert("파일이 없습니다.");
    }
    // FileReader을 이용하면 파일 정보를 url로 변경해줌
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        console.log(data.target?.result);
        setImgUrl(data.target?.result);
        setFile1(file);
      }
    };
    // const aaa = URL.createObjectURL(file);
    // setImgUrl(aaa);
    // console.log(aaa);
  };

  // uploadFile과 createBoard를 한꺼번에 처리
  const onClickSubmit = async () => {
    const result1 = await uploadFile({
      variables: { file: file1 },
    });
    const imageUrl = result1.data.uploadFile.url;
    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "슬램덩크",
          password: "1234",
          title: "정대만",
          contents: "난 포기를 모르는 남자지",
          images: [imageUrl],
        },
      },
    });
    console.log(result2.data.createBoard._id);
  };
  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <img style={{ width: "100px", height: "100px" }} src={imgUrl} />
      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </>
  );
}
