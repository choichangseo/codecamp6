import { useState } from "react";
export default function HashTag() {
  const [hashtag, setHashTag] = useState("");
  const [hasArr, setHashArr] = useState([]);

  const onKeyUpHash = (event) => {
    if (event.keyCode === 32 && event.target.value !== " ") {
      setHashArr([...hasArr, "#" + event.target.value]);
      event.target.value = "";
    }
  };

  return (
    <>
      <div>
        <span>
          {hasArr.map((el, idex) => (
            <span key={idex}>{el}</span>
          ))}
        </span>
        <input type="text" onKeyUp={onKeyUpHash} />
      </div>
    </>
  );
}
