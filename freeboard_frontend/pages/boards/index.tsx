import ListComponents from "../../src/components/units/board/lists/Lists.components";
import Pagination from "../../src/components/units/board/Pagination/pagination.container";
import { gql, useQuery } from "@apollo/client";
import BestBoard from "../../src/components/units/board/BestBoard";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

export const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      createdAt
    }
  }
`;

export default function ListPage() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  const { data: boardsCount } = useQuery(FETCH_BOARDS_COUNT);

  return (
    <>
      <BestBoard />
      <ListComponents data={data} refetch={refetch} />
      <Pagination data={data} refetch={refetch} boardsCount={boardsCount} />
    </>
  );
}
