export default function FunctionalComponentChildPage(aaa) {
  // 단지 함수형이기 때문에 props 대신 매개변수에 다른 이름이 들어가더라도 상관없이 실행된다.!!!
  return (
    <>
      <div>나의 카운트는 : {aaa.count}</div>
    </>
  );
}
