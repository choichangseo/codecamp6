import ListComponents from "../../src/components/units/board/lists/Lists.components";
import Pagination from "../../src/components/units/board/Pagination/pagination.container";
import { gql, useQuery } from "@apollo/client";
import BestBoard from "../../src/components/units/board/BestBoard";

export const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;

export default function ListPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: boardsCount } = useQuery(FETCH_BOARDS_COUNT);

  return (
    <>
      <BestBoard />
      <ListComponents data={data} />
      <Pagination data={data} refetch={refetch} boardsCount={boardsCount} />
    </>
  );
}
