import styled from "@emotion/styled";
import { useState } from "react";
const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
const Column = styled.div`
  width: 25%;
`;

export default function BoardCommentItem(props) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = (event) => {
    setIsEdit(true);
  };

  return (
    <>
      {isEdit === false && (
        <Row>
          <Column>
            <input type="checkbox" />
          </Column>
          <Column>{props.el._id}</Column>
          <Column>{props.el.writer}</Column>
          <Column>{props.el.title}</Column>
          <Column>{props.index}</Column>
          <button onClick={onClickEdit}>수정하기</button>
        </Row>
      )}
      {isEdit === true && <div>수정하기화면입니다.</div>}
    </>
  );
}
