import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { IBoard } from "../../../../src/commons/types/generated/types";
import { useEffect, useState } from "react";

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
const NewDate = styled.div`
  margin-right: 50px;
`;

export default function BasketPage() {
  const [basketItems, setBasketItems] = useState([]);

  const newDate = new Date();
  const yyyy = newDate.getFullYear();
  const mm = newDate.getMonth() + 1;
  const dd = newDate.getDate();
  const Today = `${yyyy}-${mm}-${dd}`;

  const { data } = useQuery(FETCH_BOARDS);

  const onClickBasket = (el: IBoard) => () => {
    const baskets = JSON.parse(localStorage.getItem(Today) || "[]");

    const temp = baskets.filter((basketEl: IBoard) => basketEl._id === el._id);
    if (temp.length === 1) {
      return alert("이미 담으신 게시글입니다.");
    }
    const { __typename, ...rest } = el;
    baskets.push(rest);
    localStorage.setItem(Today, JSON.stringify(baskets));
  };

  useEffect(() => {
    const Day = JSON.parse(localStorage.getItem(Today) || "[]");
    setBasketItems(Day);
  });

  return (
    <div>
      {data?.fetchBoards.map((el: IBoard, index: number) => (
        <Row onClick={onClickBasket(el)} key={el._id}>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
          <Column>{index}</Column>
        </Row>
      ))}
      <br />
      ===================================
      {basketItems.map((el: IBoard) => (
        <Row key={el._id}>
          <NewDate>{Today}</NewDate>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
        </Row>
      ))}
    </div>
  );
}
