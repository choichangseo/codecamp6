import { memo } from "react";

function MemoizationPresenterPage(props) {
  console.log("프레젠터 렌더링");
  return (
    <div>
      <div>===============</div>
      <h1>Im Children</h1>
      <div>===============</div>
    </div>
  );
}

export default memo(MemoizationPresenterPage);
