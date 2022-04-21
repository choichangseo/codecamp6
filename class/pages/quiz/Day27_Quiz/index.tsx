import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function WebEditorPage() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const onClickSubmit = async (data: any) => {
    if (!(data.writer && data.password && data.title && data.contents)) {
      alert("모두입력해주세요");
      return;
    }
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            ...data,
          },
        },
      });
      console.log(result);
      alert("게시글 등록에 성공했습니다.");
      router.push(`/quiz/Day27_Quiz/${result.data.createBoard._id}`);
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        작성자: <input {...register("writer")} type="text" />
        <br />
        비밀번호: <input {...register("password")} type="password" />
        <br />
        제목 :<input {...register("title")} type="text" />
        <br />
        내용: <ReactQuill onChange={onChangeContents} />
        <br />
        <button>등록하기</button>
      </form>
    </>
  );
}
