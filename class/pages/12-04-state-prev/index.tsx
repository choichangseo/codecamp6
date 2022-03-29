import { useState } from "react";
export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  const onClickCount = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <div>현재카운트:{count}</div>
      <div onClick={onClickCount}>카운트 버튼</div>
    </div>
  );
}
