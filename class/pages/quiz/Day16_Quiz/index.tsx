import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function QuizPage() {
  const [isChange, setIsChange] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const onClickChange = () => {
    setIsChange((prev) => !prev);
    console.log(isChange);
  };

  const onClickMove = () => {
    router.push("/");
  };
  useEffect(() => {
    alert("Rendered");
    inputRef.current?.focus();
  });
  useEffect(() => {
    alert("Change");
  }, [isChange]);
  useEffect(() => {
    return () => {
      alert("bye");
    };
  }, []);
  return (
    <div>
      <div>{isChange}</div>
      <button onClick={onClickChange}>변경</button>
      <button onClick={onClickMove}>이동</button>
      <input type="text" ref={inputRef} />
    </div>
  );
}
