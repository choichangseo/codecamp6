import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";

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
const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
const Column = styled.div`
  width: 25%;
`;
const Page = styled.span`
  display: flex;
  flex-direction: row;
  margin: 20px;
  width: 100%;
`;

export default function MapBoardPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);

  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) });
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
      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} onClick={onClickPage} id={String(index + 1)}>
          {index + 1}
        </span>
      ))}
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
