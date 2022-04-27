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
  const [files, setFiles] = useState<(File | undefined)[]>([
    undefined,
    undefined,
    undefined,
  ]);
  const [imgUrls, setImgUrls] = useState(["", "", ""]);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeFile =
    (number: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) {
        return alert("파일이 없습니다.");
      }
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (data) => {
        if (typeof data.target?.result === "string") {
          const tempUrls = [...imgUrls];
          tempUrls[number] = data.target?.result;
          setImgUrls(tempUrls);

          const tempFiles = [...files];
          tempFiles[number] = file;
          setFiles(tempFiles);
        }
      };
    };

  const onClickSubmit = async () => {
    const results = await Promise.all(
      files.map(
        (el) =>
          el &&
          uploadFile({
            variables: { file: el },
          })
      )
    );

    const resultUrls = results.map((el) =>
      el?.data ? el?.data.uploadFile.url : ""
    );

    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "슬램덩크",
          password: "1234",
          title: "정대만",
          contents: "난 포기를 모르는 남자지",
          images: resultUrls,
        },
      },
    });
    console.log(result2.data.createBoard._id);
  };
  return (
    <>
      <input type="file" onChange={onChangeFile(0)} />
      <input type="file" onChange={onChangeFile(1)} />
      <input type="file" onChange={onChangeFile(2)} />
      <img style={{ width: "100px", height: "100px" }} src={imgUrls[0]} />
      <img style={{ width: "100px", height: "100px" }} src={imgUrls[1]} />
      <img style={{ width: "100px", height: "100px" }} src={imgUrls[2]} />
      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </>
  );
}
