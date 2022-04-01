import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
import BoardCommentItem from "../../src/components/units/15-board-comment";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

export default function MapBoardPage() {
  const { data } = useQuery(FETCH_BOARDS);
  // const [myIndex, setMyIndex] = useState([
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  // ]);
  // const onClickEdit = (event) => {
  //   const aaa = myIndex;
  //   aaa[event.target.id] = true;
  //   setMyIndex([...aaa]);
  //   console.log(aaa);
  // };

  return (
    <div>
      {data?.fetchBoards.map((el: any, index: number) => (
        <BoardCommentItem key={el._id} el={el} index={index} />
      ))}
    </div>
  );
}
