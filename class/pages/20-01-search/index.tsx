// 1. 게시글 목록 만들어주기
// 2. 검색 인풋창과 검색 버튼 만들기

import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState, ChangeEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../freeboard_frontend/src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
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

export default function SearchBoard() {
  const [search, setSearch] = useState("");
  // data의 값이 바뀌면 return 부분이 리랜더링된다.
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  // 검색창의 입력된 값을 스테이트로 받아와야 한다.
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  // 검색하기 눌렀을때 실행될 함수, 검색어를 포함해서 gql fetchBoards에 search를 넣어주어 refetch하면 된다.
  const onClickSearch = () => {
    refetch({ search, page: 1 });
  };
  // 가장중요!! 검색하기 누르면 리패치 후에 페이지네이션을 추가하여 검색 결과를 새로 보여줘야한다.
  const onClickPage = (event: any) => {
    refetch({ page: Number(event.target.id) });
  };
  return (
    <div>
      {/* 검색창과 버튼 만들기 */}
      검색어 입력 : <input type="text" onChange={onChangeSearch} />
      <button onClick={onClickSearch}>검색하기</button>
      {data?.fetchBoards.map((el) => (
        <Row key={el._id}>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
        </Row>
      ))}
      {/* 가장중요!! 검색하기 누르면 리패치 후에 페이지네이션을 추가하여 검색 결과를 새로 보여줘야한다. */}
      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} onClick={onClickPage} id={String(index + 1)}>
          {index + 1}
        </span>
      ))}
    </div>
  );
}
