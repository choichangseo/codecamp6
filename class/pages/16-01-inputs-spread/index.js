// import axios from 'axios'
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation mymutation($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;
export default function GraphqlMutationPage() {
  //   const [mywriter, setMyWriter] = useState("");
  //   const [mytitle, setMyTitle] = useState("");
  //   const [mycontents, setMyContents] = useState("");

  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [data, setData] = useState("");
  const [callApi] = useMutation(CREATE_BOARD);

  const callGraphqlApi = async () => {
    // const data = await axios.get("http://koreanjson.com/posts/1")
    const result = await callApi({
      variables: {
        ...inputs,
      },
    });
    console.log(result);
    console.log(result.data.createBoard.message);
    setData(result.data.createBoard.message);
  };

  const onChangeInputs = (event) => {
    // setMyWriter(event.target.value);
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  //   키 값이 같으면 맨 아래있는 키를 가져오기 때문에 중복이되는 것을 활용하여 스프레드 연산자를 써준다.
  return (
    <div>
      {/* <div>{data}</div> */}
      작성자:
      <input type="text" id="writer" onChange={onChangeInputs} />
      <br />
      제목:
      <input type="text" id="title" onChange={onChangeInputs} />
      <br />
      내용:
      <input type="text" id="contents" onChange={onChangeInputs} />
      <br />
      <button onClick={callGraphqlApi}>Graphql-Api 요청하기!!!</button>
    </div>
  );
}
