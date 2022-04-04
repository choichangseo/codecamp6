import {
  Component,
  createRef,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/router";

interface IState {
  count: number;
}

export default function CounterPage() {
  const router = useRouter();
  // inputRef = createRef<HTMLInputElement>();
  const inputRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState(99);

  // 1. DidMount
  // componentDidMount() {
  //   console.log("마운트됨!!!");
  //   this.inputRef.current?.focus();
  //   // 포커스 깜빡깜빡
  // }
  // useEffect(() => {
  //   console.log("마운트됨!!!");
  //   inputRef.current?.focus();
  // }, []);

  // 2. DidUpdate, useEffect는 처음에도 한번 실행 됨
  // componentDidUpdate() {
  //   console.log("수정되고 다시 그려짐!!");
  // }

  useEffect(() => {
    console.log("수정되고 다시 그려짐!!");
  }, [count]);

  // 3. WillUnmount
  // componentWillUnmount() {
  //   console.log("컴포넌트 사라짐!!!");
  //   // 채팅방 나가기
  //   // api 요청!! 꼭 채팅방 나가기 함수에서 나가기 버튼을 눌러서 나가는게 아니라 다른 방법으로 나가더라도 무조건 실행됨
  // }
  // useEffect(() => {
  //   return () => {
  //     console.log("컴포넌트 사라짐!!!");
  //   };
  // }, []);

  // 4. DidMount와 WillUnmount를 합치기!!
  useEffect(() => {
    console.log("마운트됨!!!");
    inputRef.current?.focus();

    return () => {
      console.log("컴포넌트 사라짐!!!");
    };
  }, []);

  // 5. useEffect의 잘못된 사용 예(1. 추가렌더링, 2. 무한루프에 빠질수 있다) 여기서 setState를 써주면 불필요하게 다시 랜더링 될 수 있음
  useEffect(() => {
    setCount((prev) => prev + 1);
  }, []);

  // 대괄호는 의존성 배열(Dependency Array), 함수가 시행될지 안될지 기다림 의존성 배열이 없으면 한번만 실행되고 끝
  // 의존성 배열에 count가 들어가있으면 count가 바뀔때마다 실행 여러가지 변수가 들어가있으면 변수들이 바뀔때마다 실행

  const onClickCounter = () => {
    // console.log(this.state.count);
    // this.setState((prev: IState) => ({
    //   count: prev.count + 1,
    // }));
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    router.push("/");
  };

  // 맨 아래 있지만 다른것들은 마운트 되고 실행되기때문에 이게 먼저 나옴
  console.log("나는 언제 실행되게?");

  return (
    <div>
      <input type="text" ref={inputRef} />
      <div>현재카운트:{count}</div>
      <button onClick={onClickCounter}>카운트올리기!!</button>
      <button onClick={onClickMove}>나가기</button>
    </div>
  );
}
