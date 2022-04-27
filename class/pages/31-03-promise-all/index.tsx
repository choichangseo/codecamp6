import { async } from "../../src/commons/libraries/getAccessToken";
export default function PromiseAll() {
  //   const onClickPromise = async () => {
  //     const result1 = await new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         resolve("https://dog1.jpg");
  //       }, 3000);
  //     });
  //     console.log(result1);
  //     const result2 = await new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         resolve("https://dog2.jpg");
  //       }, 1000);
  //     });
  //     console.log(result2);
  //     const result3 = await new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         resolve("https://dog3.jpg");
  //       }, 2000);
  //     });
  //     console.log(result3);
  //   };

  // 2. 한번에 확인하는 방법
  const onClickPromiseAll = async () => {
    console.time("Promise.all 시작!!");
    const result = await Promise.all(
      ["https://dog1.jpg", "https://dog2.jpg", "https://dog3.jpg"].map(
        (el) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(el);
            }, 3000);
          })
      )
    );
    // const result = await Promise.all([
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("https://dog1.jpg");
    //     }, 3000);
    //   }),

    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("https://dog2.jpg");
    //     }, 1000);
    //   }),
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("https://dog3.jpg");
    //     }, 2000);
    //   }),
    // ]);
    console.log(result);
    console.timeEnd("Promise.all 시작!!!");
  };

  return (
    <>
      <div>
        <button onClick={onClickPromise}>Promise 연습하기</button>
        <button onClick={onClickPromiseAll}>Promise.all 연습히기</button>
      </div>
    </>
  );
}
