import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { IBoard } from "../../../../src/commons/types/generated/types";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
const Column = styled.div`
  width: 25%;
`;

export default function BasketPage() {
  const [basketItems, setBasketItems] = useState([]);
  useEffect(() => {
    const basket = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasketItems(basket);
  }, []);
  return (
    <div>
      {basketItems.map((el: IBoard, index: number) => (
        <Row key={el._id}>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
          <Column>{index}</Column>
        </Row>
      ))}
    </div>
  );
}
