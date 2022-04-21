// 1.게시글 목록 불러오기
// 2.Map으로 보여준다
// 3.장바구니 담기 버튼 생성
// 4.함수에서 해당 아이템을 로컬스토리지에 저장
// 5.HOF를 활용하여 el을 가져오고 ...rest로 __typename을 지워준다.
// 6.원래 있던 배열을 JSON.parse로 가져오고 거기다가 새로운 el을 push해준다.
// 7.이미 중복된 아이템을 계속 담아주면 안되기때문에 filter 해준다.
import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { IBoard } from "../../src/commons/types/generated/types";

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

export default function BasketPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const onClickBasket = (el: IBoard) => () => {
    // 1.기존 장바구니 가져오기
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    // 2.이미 담겼는지 확인하기
    const temp = baskets.filter((basketEl: IBoard) => basketEl._id === el._id);
    if (temp.length === 1) {
      return alert("이미 담으신 물품입니다.");
    }

    // 삭제하기
    // const newBasket = baskets.filter((basketEl: IBoard) => basketEl._id === el._id);

    // 3.장바구니에 담기
    const { __typename, ...rest } = el;
    baskets.push(rest);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  return (
    <div>
      {data?.fetchBoards.map((el: IBoard, index: number) => (
        <Row key={el._id}>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
          <Column>{index}</Column>
          <button onClick={onClickBasket(el)}>장바구니 담기</button>
        </Row>
      ))}
    </div>
  );
}
