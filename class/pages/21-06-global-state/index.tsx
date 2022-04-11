// 페이지 1개에 BoardWrite 컨테이너,프레젠터에서 isEdit를 사용할때 제일 부모페이지에서 props를 드릴링하여 true false로 바꿔 사용하였는데
// 이를 해결하기 위해 global state 저장소인 recoil을 사용한다.
// src component units board 21-global-state폴더에 BoardWrite.Container와 연결
// useRecoilState를 사용하더라도 state를 공유할 수 있는 atom이라는 것을 만들어줘야함 src commons에 store 폴더
// 모든 컴포넌트에서 사용하기 위해 app.tsx에서 RecoilRoot를 추가해준다.
import GlobalStateContainer from "../../src/components/units/board/21-global-state/BoardWrite.container";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../src/commons/store";

export default function GlobalStatePage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(true);
  }, []);

  return <GlobalStateContainer />;
}
