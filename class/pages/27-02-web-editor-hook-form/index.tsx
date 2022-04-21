import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WebEditorPage() {
  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
    // register를 사용하지 않아도 강제적으로 값을 넣어주는 기능.
    // 글 내용을 지워도 태그가 남아있는데 이럴경우 validation이 작동하지 않으므로 삼항연산자로 바꿔줘야한다.
    // onChange는 라이브러리 함수이기 때문에 정상적인 onChange가 작동하지 않는다. 이럴 때 trigger를 사용해주면 onChange가 작동됬다고 알려준다.
  };
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });
  return (
    <>
      <form>
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
