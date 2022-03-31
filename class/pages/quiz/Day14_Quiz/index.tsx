import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

const Row = styled.div`
  display: flex;
`;
const Column = styled.div`
  width: 25%;
`;
const Page = styled.span`
  margin: 1%;
`;

const Next = styled.button`
  width: 20px;
  height: 20px;
`;
const Prev = styled.button`
  width: 20px;
  height: 20px;
`;

export default function QuizPagination() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: boardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const [startPage, setStartPage] = useState(1);
  const lastPage = Math.ceil(boardsCount?.fetchBoardsCount / 10);
  // const index = boardsCount?.fetchBoardsCount % 10;
  const [isActive, setIsActive] = useState(true);
  const [active, setActive] = useState("");

  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) });
    setActive(event.target.id);
  };

  const onClickNextPage = () => {
    if (startPage + 10 > lastPage) {
      setIsActive(false);
    }
    setStartPage((prev) => prev + 10);
    refetch({ page: startPage + 10 });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) {
      return;
    }
    setStartPage((prev) => prev - 10);
    refetch({ page: startPage - 10 });
  };

  return (
    <>
      <div>
        {data?.fetchBoards.map((el: any, index: number) => (
          <Row key={el._id}>
            <Column>{el.writer}</Column>
            <Column>{el.title}</Column>
            <Column>{index}</Column>
          </Row>
        ))}
      </div>
      <Prev
        disabled={startPage === 1}
        // style={{
        //   color: startPage !== 1 ? "red" : "black",
        // }}
        onClick={onClickPrevPage}
      >
        &#60;
      </Prev>
      {new Array(10).fill(1).map((_, index) =>
        index + startPage <= lastPage ? (
          <Page
            style={{
              color: active === String(index + startPage) ? "orange" : "black",
            }}
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
      <Next
        // style={{
        //   color: index + startPage <= lastPage ? "red" : "black",
        // }}
        onClick={onClickNextPage}
        disabled={startPage + 10 > lastPage ? true : false}
      >
        &#62;
      </Next>
    </>
  );
}
