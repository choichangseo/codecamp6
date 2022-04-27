import { useCallback, useMemo, useState } from "react";
import MemoizationPresenterPage from "./presenter";
export default function MemoizationContainerPage() {
  console.log("컨테이너가 랜더링됩니다.");
  let countLet = 0;
  const [countState, setCountState] = useState(0);

  const aaa = useMemo(() => Math.random(), [countState]);
  console.log(aaa);
  const onClickCountLet = () => {
    console.log(countLet + 1);
    countLet += 1;
  };
  // useCallback 사용으로 memo처럼 사용가능
  const onClickCountState = useCallback(() => {
    // console.log(countState + 1);
    setCountState((prev) => prev + 1);
  }, []);

  // useMemo로 useCallback 만들어보기
  const bbb = useMemo(() => {
    return () => {
      console.log(countState + 1);
      setCountState((prev) => prev + 1);
    };
  }, []);
  return (
    <div>
      <div>===============</div>
      <h1>Im MoM</h1>
      <div>카운트(let): {countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) +1 올리기!!!</button>
      <div>카운트(state):{countState}</div>
      <button onClick={onClickCountState}>카운트(state)+1 올리기!!!</button>
      <div>===============</div>
      <MemoizationPresenterPage />
    </div>
  );
}
