import styled from "@emotion/styled";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
const Column = styled.div`
  width: 25%;
`;

export default function Board(props) {
  return (
    <>
      {props.data?.fetchBoards.map((el: any, index: number) => (
        <Row key={el._id}>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
          <Column>{index}</Column>
        </Row>
      ))}
    </>
  );
}
