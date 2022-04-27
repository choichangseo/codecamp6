import axios from "axios";
import { reject } from "lodash";
import { resolve } from "node:path/win32";
export default function CallbackPromiseAsyncAwaitPage() {
  // callback 지옥이라고 부른다.
  const onClickCallback = () => {
    const aaa = new XMLHttpRequest();
    aaa.open("get", "http://numbersapi.com/random?min=1&max=200"); // open ,"get" async 역할을 한다
    aaa.send(); // 데이터를 요청한다.
    aaa.addEventListener("load", (res) => {
      // 실행은 addEventListener 안에 들어가서 실행된다. 데이터를 받아온다.
      console.log(res);
      const num = res.target.response.split(" ")[0]; //받아온 데이터값 가져오기
      const bbb = new XMLHttpRequest();
      bbb.open("get", `http://koreanjson.com/posts/${num}`);
      bbb.send();
      bbb.addEventListener("load", (res) => {
        const userId = res.target.response.UserId;

        const ccc = new XMLHttpRequest();
        ccc.open("get", `http://koreanjson.com/posts?userId=${userId}`);
        ccc.send();
        ccc.addEventListener("load", (res) => {
          console.log(res);
        });
      });
    });
  };

  // // promise가 성공했을 떄  then 실패했을떄 catch
  // new Promise((resolve, reject) => {
  //   const ccc = new XMLHttpRequest();
  //   ccc.open("get", `http://koreanjson.com/posts?userId=${userId}`);
  //   ccc.send();
  //   ccc.addEventListener("load", (res) => {
  //     resolve(res);

  //   // 성공했을 때
  //   resolve("철수");

  //   // 실패했을 때
  //   reject("에러발생");
  // })
  //   .then((res) => {})
  //   .catch((err) => {});
  // // 콜백 지옥을 해결하기 위해 나왔다. async await가 없을 때 axios가 나오게 되었다.

  const onClickPromise = () => {
    axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res) => {
        return axios.get(`http://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        return axios.get(`http://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        console.log("최종결과");
      }); // promise는 .then을 여러번 사용가능 중간에 return 해주게되면 .then에 자동으로 연결이된다. promise 체이닝이라고 함
  };

  // const onClickPromise = () => {
  //   // 1번 다음에 5번이 실행되어 헷갈리기 쉽다.
  //   console.log("여기는 1번 입니다.");
  //   axios
  //     .get("http://numbersapi.com/random?min=1&max=200")
  //     .then((res) => {
  //       console.log("여기는 2번 입니다.");
  //       const num = res.data.split(" ")[0]; // 71(랜덤숫자)
  //       return axios.get(`http://koreanjson.com/posts/${num}`);
  //     })
  //     .then((res) => {
  //       console.log("여기는 3번 입니다.");
  //       const userId = res.data.UserId;
  //       return axios.get(`http://koreanjson.com/posts?userId=${userId}`);
  //     })
  //     .then((res) => {
  //       console.log("여기는 4번 입니다.");
  //       console.log(res);
  //     });
  //   console.log("여기는 5번 입니다.");
  // };

  const onClickAsyncAwait = async () => {
    const aaa = await axios.get("http://numbersapi.com/random?min=1&max=200"); // await하면 뒤가 promise인것만 사용가능, promise와 달리 순서가 명확하다.

    const bbb = await axios.get("http://numbersapi.com/random?min=1&max=200");

    const ccc = await axios.get("http://numbersapi.com/random?min=1&max=200");
  };
  // promise가 들어가는 que랑 setTimeOut que랑 같은 곳으로 들어가는데 차이점이 있다.

  return (
    <>
      <button onClick={onClickCallback}>Callback 요청하기!!</button>;
      <button onClick={onClickPromise}>Promise 요청하기!!</button>;
      <button onClick={onClickAsyncAwait}>AsyncAwait 요청하기!!</button>;
    </>
  );
}
