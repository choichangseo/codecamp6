import { useCallback, useMemo, useState } from "react";
import MemoizationPresenterPage from "./presenter";
export default function MemoizationContainerPage() {
  // state가 변경되면 리랜더링되는데 hook이외에 모든것은 다시 초기화되는데 그래서 let도 다시 0부터 시작하게되는 것이다.
  //   또한 자식 컴포넌트까지 초기화된다.
  //   React Developer Tools를 설치하여 Profiler에서 얼마나 랜더링되고 있는지 확인 가능
  console.log("컨테이너가 랜더링됩니다.");
  let countLet = 0;
  const [countState, setCountState] = useState(0);

  //   const aaa = Math.random();

  const aaa = useMemo(() => Math.random(), [countState]);
  console.log(aaa);
  const onClickCountLet = () => {
    console.log(countLet + 1);
    //   countLet = countLet + 1
    countLet += 1;
  };
  // 함수 또한 useCallback 사용으로 memo처럼 사용가능
  // 하지만 안에서 state를 사용하면 callback을 써도 계속 리랜더되기 때문에 조심해야함 그래서 prev로 기존 값을 가져오면 됨
  const onClickCountState = useCallback(() => {
    // console.log(countState + 1);
    setCountState((prev) => prev + 1);
  }, []);

  // const onClickCountState = () => {
  //   console.log(countState + 1);
  //   setCountState(countState + 1);
  // };

  // useMemo로 useCallback 만들어보기
  const bbb = useMemo(() => {
    return () => {
      // console.log(countState + 1);
      setCountState((prev) => prev + 1);
    };
  }, []);
  return (
    <div>
      <div>===============</div>
      <h1>이것은 컨테이너 입니다!!!</h1>

      <div>카운트(let): {countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) +1 올리기!!!</button>
      {/* 버튼태그에 메모 만드는법 */}
      {/* <button onClick={()=>{
        setCountState(prev => prev +1)
      }}></button> */}
      <div>카운트(state):{countState}</div>
      <button onClick={onClickCountState}>카운트(state)+1 올리기!!!</button>
      <div>===============</div>
      {/* 자식으로 props를 내려줄떄는 꼭 필요한 상황에서만 내려줘야한다 안그러면 memo를 사용해도 리랜더링된다. */}
      <MemoizationPresenterPage countState={countState} />
    </div>
  );
}
