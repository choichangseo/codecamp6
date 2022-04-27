import axios from "axios";
import { useState } from "react";
export default function CallbackFriendsQuiz() {
  const [result, setResult] = useState("");
  const onClickCallback = () => {
    const number = new XMLHttpRequest();
    number.open("get", "http://numbersapi.com/random?min=1&max=200");
    number.send();
    number.addEventListener("load", (res) => {
      const number = res.target.response.split(" ")[0];
      console.log(number);
      const board = new XMLHttpRequest();
      board.open("get", `https://koreanjson.com/posts/${number}`);
      board.send();
      board.addEventListener("load", (res) => {
        const userId = JSON.parse(res.target.response).UserId;
        console.log(userId);
        const ccc = new XMLHttpRequest();
        ccc.open("get", `http://koreanjson.com/posts?userId=${userId}`);
        ccc.send();
        ccc.addEventListener("load", (res) => {
          setResult(JSON.parse(res.target.response));
        });
      });
    });
  };

  const onClickPromise = () => {
    axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res) => {
        const num = res.data.slice(0, 3);
        return axios.get(`http://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        console.log(res);
        const id = res.data.id;
        return axios.get(`http://koreanjson.com/posts?userId=${id}`);
      })
      .then((res) => {
        setResult(res.data);
      });
  };

  const onClickAsyncAwait = async () => {
    const aaa = await axios.get("http://numbersapi.com/random?min=1&max=200");
    const num = aaa.data.slice(0, 3);
    const ID = await axios.get(`http://koreanjson.com/posts/${num}`);
    console.log(ID);
    const userId = ID.data.UserId;
    console.log(userId);
    const board = await axios.get(
      `http://koreanjson.com/posts?userId=${userId}`
    );

    setResult(board.data);
  };
  console.log(result);

  return (
    <>
      <button onClick={onClickCallback}>Callback 요청하기!!</button>
      <button onClick={onClickPromise}>Promise 요청하기!!</button>
      <button onClick={onClickAsyncAwait}>AsyncAwait 요청하기!!</button>
      {Object.values(result).map((el: any) => (
        <div key={el.id}>
          <div>{el.title}</div>
          <div>{el.contents}</div>
        </div>
      ))}
    </>
  );
}
