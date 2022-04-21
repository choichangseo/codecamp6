import { useQuery, gql } from "@apollo/client";
import { IBoard } from "../../../../src/commons/types/generated/types";
import BasketItem from "../basketItem";

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

export default function BasketPage() {
  const { data } = useQuery(FETCH_BOARDS);

  return (
    <div>
      {data?.fetchBoards.map((el: IBoard) => (
        <BasketItem el={el} key={el._id} />
      ))}
    </div>
  );
}
