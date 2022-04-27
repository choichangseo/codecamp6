import { memo } from "react";
// HOF 컴포넌트로 memo를 사용 메모장에 저장하여 state값이 바뀌어 랜더링하여도 memo는 변경사항이 없으면 랜더링되지않음
function MemoizationPresenterPage(props) {
  console.log("프레젠터가 렌더링 됩니다!!!");
  return (
    <div>
      <div>===============</div>
      <h1>이것은 프리젠터 입니다!!!</h1>
      <div>===============</div>
    </div>
  );
}

export default memo(MemoizationPresenterPage);
