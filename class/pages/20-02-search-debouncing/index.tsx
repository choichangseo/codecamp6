// 1. 게시글 목록 만들어주기
// 2. 검색 인풋창과 검색 버튼 만들기

import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { ChangeEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../freeboard_frontend/src/commons/types/generated/types";
import _ from "lodash";
// lodash를 활용하여 지연시간을 줄 수 있다.

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
  // const [search, setSearch] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  // 0.2초 내에 작업이 이루어지면 무시하고 0.2초 후에 재작업이 없으면 함수 안에 부분이 실행됨. refetch를 여기로 옮겨주면 됨
  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
  }, 200);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    // setSearch(event.target.value);
    // 타겟 벨류가 위에 debounce 함수 data에 들어가게 된다.
    getDebounce(event.target.value);
  };

  const onClickPage = (event: any) => {
    refetch({ page: Number(event.target.id) });
  };
  return (
    <div>
      검색어 입력 : <input type="text" onChange={onChangeSearch} />
      {data?.fetchBoards.map((el) => (
        <Row key={el._id}>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
        </Row>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} onClick={onClickPage} id={String(index + 1)}>
          {index + 1}
        </span>
      ))}
    </div>
  );
}
