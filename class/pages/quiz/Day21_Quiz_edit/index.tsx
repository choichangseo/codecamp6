import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isEdits } from "../../../src/commons/store";
import RecoilWritePage from "../Day21_Quiz_write/index";

export default function RecoilEditPage() {
  const [, setIsEdit] = useRecoilState(isEdits);

  useEffect(() => {
    setIsEdit(true);
  }, []);

  return <RecoilWritePage />;
}
