import { useRecoilState } from "recoil";
import { isEdits } from "../../../src/commons/store";
import { useRouter } from "next/router";

export default function RecoilWritePage() {
  const [isEdit] = useRecoilState(isEdits);
  const router = useRouter();

  const onClickMoveEdit = () => {
    router.push("/quiz/Day21_Quiz_edit");
  };
  const onClickMoveNew = () => {
    router.push("/quiz/Day21_Quiz_new");
  };
  return (
    <>
      <h1>{isEdit ? "수정하기" : "등록하기"}</h1>
      <button onClick={onClickMoveEdit}>수정하기</button>
      <button onClick={onClickMoveNew}>등록하기</button>
    </>
  );
}
