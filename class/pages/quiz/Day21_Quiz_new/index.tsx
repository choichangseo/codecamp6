import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { isEdits } from "../../../src/commons/store";
import RecoilWritePage from "../Day21_Quiz_write/index";
export default function RecoilQuizPage() {
  const [, setIsEdit] = useRecoilState(isEdits);

  useEffect(() => {
    setIsEdit(false);
  }, []);

  return <RecoilWritePage />;
}
