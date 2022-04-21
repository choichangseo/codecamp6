// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
// 그냥 사용하면 프론트엔드 서버에서 프리랜더링할때 document가 없어서 document 에러가 남.
// 동적으로 서버에서는 랜더링해주지 말고 브라우저에서 해달라고 dynamic import를 이용
// ssr(서버사이드에서는) false: 랜더링 X
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WebEditorPage() {
  const onChangeContents = (value: string) => {};

  return (
    <>
      작성자: <input type="text" />
      <br />
      비밀번호: <input type="password" />
      <br />
      제목 :<input type="text" />
      <br />
      내용: <ReactQuill onChange={onChangeContents} />
      <br />
      <button>등록하기</button>
    </>
  );
}
