import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const FETCH_BOARD_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
const Column = styled.div`
  width: 25%;
`;
const Page = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;

export default function MapBoardPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARD_COUNT);
  const [startPage, setStartPage] = useState(1);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) });
  };

  const onClickPrevPage = (event) => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    refetch({ page: startPage - 10 });
  };

  const onClickNextPage = (event) => {
    if (!(startPage + 10 <= lastPage)) return;
    setStartPage((prev) => prev + 10);
    refetch({ page: startPage + 10 });
  };

  return (
    <div>
      {data?.fetchBoards.map((el: any, index: number) => (
        <Row key={el._id}>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
          <Column>{index}</Column>
        </Row>
      ))}
      <span onClick={onClickPrevPage}>이전페이지</span>
      {new Array(10).fill(1).map((_, index) =>
        index + startPage <= lastPage ? (
          <Page
            key={index + startPage}
            onClick={onClickPage}
            id={String(index + startPage)}
          >
            {index + startPage}
          </Page>
        ) : (
          <span></span>
        )
      )}
      <span onClick={onClickNextPage}>다음</span>
      {/* {[1, 2, 3, 4].map((el) => (
        <Page key={el} onClick={onClickPage} id={String(el)}>
          {el}
        </Page>
      ))} */}
      {/* 
      <span onClick={onClickPage} id="2">
        2
      </span>
      <span onClick={onClickPage} id="3">
        3
      </span>
      <span onClick={onClickPage} id="4">
        4
      </span> */}
    </div>
  );
}
