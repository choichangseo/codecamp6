import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

export default function MyComponent() {
  const [count, setCount] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    alert("컴포넌트가 마운트 되었습니다.");
    inputRef.current?.focus();
    return () => {
      alert("컴포넌트가 제거되었습니다.");
    };
  }, []);

  useEffect(() => {
    alert("컴포넌트가 변경되었습니다.");
  }, [count]);

  const onClickButton = () => {
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    router.push("/");
  };

  console.log("마운트 시작");
  return (
    <>
      <input type="password" ref={inputRef} />
      <div>카운트: {count}</div>
      <button onClick={onClickButton}>카운트(+1)</button>
      <button onClick={onClickMove}>이동하기</button>
    </>
  );
}
