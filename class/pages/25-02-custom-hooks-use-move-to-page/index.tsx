import { useMoveToPage } from "../../src/components/commons/hocks/useMoveToPage";

export default function CustomHooksUseMoveToPage() {
  const { onClickMoveTo } = useMoveToPage();

  return (
    <>
      <div>
        <button onClick={onClickMoveTo("/board")}>게시판으로 이동</button>
        <button onClick={onClickMoveTo("/market")}>마켓으로 이동</button>
        <button onClick={onClickMoveTo("/mypage")}> 마이페이지로 이동</button>
      </div>
    </>
  );
}
