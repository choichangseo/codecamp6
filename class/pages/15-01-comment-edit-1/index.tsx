import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

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
const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
const Column = styled.div`
  width: 25%;
`;

export default function MapBoardPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [myIndex, setMyIndex] = useState(-1);
  const onClickEdit = (event) => {
    setMyIndex(Number(event.target.id));
  };

  return (
    <div>
      {data?.fetchBoards.map((el: any, index: number) =>
        index !== myIndex ? (
          <Row key={el._id}>
            <Column>
              <input type="checkbox" />
            </Column>
            <Column>{el._id}</Column>
            <Column>{el.writer}</Column>
            <Column>{el.title}</Column>
            <Column>{index}</Column>
            <button id={index} onClick={onClickEdit}>
              수정하기
            </button>
          </Row>
        ) : (
          <div>수정하기화면입니다.</div>
        )
      )}
    </div>
  );
}
