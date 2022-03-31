import { useState } from "react";
import styled from "@emotion/styled";

const Page = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;

export default function Pagination(props) {
  const [startPage, setStartPage] = useState(1);

  const onClickPage = (event) => {
    props.refetch({ page: Number(event.target.id) });
  };

  const onClickPrevPage = (event) => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = (event) => {
    if (!(startPage + 10 <= props.lastPage)) return;
    setStartPage((prev) => prev + 10);
    props.refetch({ page: startPage + 10 });
  };

  return (
    <div>
      <span onClick={onClickPrevPage}>이전페이지</span>
      {new Array(10).fill(1).map((_, index) =>
        index + startPage <= props.lastPage ? (
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
    </div>
  );
}
