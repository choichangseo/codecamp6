export default function HOFQuiz() {
  const onClickHOF = (el) => (event) => {
    console.log(el);
  };

  return (
    <>
      <div></div>
      {[123].map((el) => (
        <div key={el} onClick={onClickHOF(el)}>
          {el}
        </div>
      ))}
    </>
  );
}
