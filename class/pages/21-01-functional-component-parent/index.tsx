import FunctionalComponentChildPage from "../21-02-functional-component-child";

export default function FunctionalComponentParentPage() {
  // 단지 함수형이기 때문에 props 대신에 함수형으로 바로 보내줘도 실행이 된다..!!!
  //   return (
  //     <FunctionalComponentChildPage count={123} />
  // );
  return <>{FunctionalComponentChildPage({ count: 321 })}</>;
}
