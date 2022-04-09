import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState, ChangeEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../freeboard_frontend/src/commons/types/generated/types";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

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

interface IProps {
  isMatched: boolean;
}
// props를 활용하여 3항 연산자로 트루일때 레드 false일때 블랙을 준다.
const Word = styled.span`
  color: ${(props: IProps) => (props.isMatched ? "red" : "black")};
`;

export default function SearchBoard() {
  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    // 검색한 단어를 keyword에 저장해준다.
    setKeyword(data);
  }, 200);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
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
          {/* 검색된 단어를 랜더링된 게시글 목록에서 색을 바꿔서 보여주고 싶을때 문자를 다 쪼개서{split(시크릿코드)사용} span태그로 쪼개진 단어를 감싸 색을(emotion 활용) 변경해줌 */}
          {/* 시크릿코드를 사용하기 전에 검색한 단어에 시크릿코드를 붙여줘야하는데 replaceAll("keyword","#&$keyword#$&") 활용한다. */}
          {/* 이후 map을 활용하여 검색한 keyword를 전부 뿌려주고 span으로 감싸주어 el과 keyword가 같을때 emotion을 준다. key 값이 애매하기 때문에 uuid로 key값을 준다. */}
          <Column>
            {el.title
              .replaceAll(keyword, `#$%${keyword}#$%`)
              .split("#$%")
              .map((el) => (
                <Word key={uuidv4()} isMatched={keyword === el}>
                  {el}
                </Word>
              ))}
          </Column>
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
