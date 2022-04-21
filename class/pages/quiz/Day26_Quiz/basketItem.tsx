import styled from "@emotion/styled";
import { IBoard } from "../../../src/commons/types/generated/types";
import { useState } from "react";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
const Column = styled.div`
  width: 25%;
`;

export default function BasketItem(props) {
  const [isSave, setIsSave] = useState(true);

  const onClickBasket = (el: IBoard) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    const temp = baskets.filter((basketEl: IBoard) => basketEl._id === el._id);
    if (temp.length === 1) {
      return alert("이미 담으신 게시글입니다.");
    }
    const { __typename, ...rest } = el;
    baskets.push(rest);
    localStorage.setItem("baskets", JSON.stringify(baskets));
    setIsSave((prev) => !prev);
  };

  const onClickDelBasket = (el) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    const temp = baskets.filter((basketEl: IBoard) => basketEl._id !== el._id);
    localStorage.setItem("baskets", JSON.stringify(temp));
    setIsSave((prev) => !prev);
  };

  return (
    <div>
      <Row key={props.el._id}>
        <Column>{props.el.writer}</Column>
        <Column>{props.el.title}</Column>
        <button
          onClick={
            isSave ? onClickBasket(props.el) : onClickDelBasket(props.el)
          }
        >
          {isSave ? "게시물 담기" : "게시물 담기취소"}
        </button>
      </Row>
    </div>
  );
}
