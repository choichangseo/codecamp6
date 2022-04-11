import { useState } from "react";
export default function StatePrevPage() {
  const [count, setCount] = useState(0);
  // prev는 단지 함수의 매개변수

  // 1.화살표 함수
  const onClickCount = () => {
    setCount((prev) => prev + 1);

    // 2. 함수선언식
    setCount(function (prev) {
      // 로직 추가 가능
      // if() 등
      // for() 등
      return prev + 1;
    });

    // 3.매개변수 바꿔보기
    setCount((aaa) => aaa + 1);
  };

  // 핸드폰 번호를 검증할때 010-1234-1234 이면 복잡하게 for문과 if문을 사용해야하는데 정규표현식을 사용하면 더 간단하게 만들 수 있다.

  return (
    <>
      <div>현재카운트 : {count}</div>
      <button onClick={onClickCount}>카운트증가</button>
    </>
  );
}
