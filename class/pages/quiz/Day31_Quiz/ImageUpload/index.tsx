import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { ChangeEvent, useState } from "react";

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

export default function ImgQuiz() {
  const { register, handleSubmit } = useForm();
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

  const onClickSubmit = async (data: any) => {
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
          ...data,
          images: resultUrls,
        },
      },
    });
    console.log(result2.data.createBoard._id);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        작성자 : <input {...register("writer")} type="text" />
        <br />
        제목 : <input {...register("title")} type="text" />
        <br />
        내용 : <input {...register("contents")} type="text" />
        <br />
        비밀번호 : <input {...register("password")} type="password" />
        <br />
        <input type="file" onChange={onChangeFile(0)} />
        <input type="file" onChange={onChangeFile(1)} />
        <input type="file" onChange={onChangeFile(2)} />
        <button>등록하기</button>
        {imgUrls.map((el, index) => (
          <div key={index}>
            <img style={{ width: "100px", height: "100px" }} src={el} />
          </div>
        ))}
      </form>
    </>
  );
}
