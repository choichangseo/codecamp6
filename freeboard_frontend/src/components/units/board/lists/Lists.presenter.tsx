import * as S from "./Lists.styled";
import { getDate } from "../../../../commons/libraries/utils";

import { ListPresenterProps } from "./Lists.types";

export default function ListPresenter(props: ListPresenterProps) {
  return (
    <S.ListPageWrapper>
      <S.Wrapper>
        <S.HeadLine>
          <S.HeadNumber>번호</S.HeadNumber>
          <S.HeadWriter>작성자</S.HeadWriter>
          <S.HeadTitle>제목</S.HeadTitle>
          <S.HeadDate>날짜</S.HeadDate>
        </S.HeadLine>
        {props.data?.fetchBoards.map((el: any, index: any) => (
          <S.Row key={el._id}>
            <S.IndexNumber>{index + 1}</S.IndexNumber>
            <S.Writer>{el.writer}</S.Writer>
            <S.Title id={el._id} onClick={props.onClickMoveBoardTitle}>
              {el.title}
            </S.Title>
            <S.CreatedDate>{getDate(el.createdAt)}</S.CreatedDate>
          </S.Row>
        ))}
      </S.Wrapper>
      <S.Footer>
        <S.BoardCreateButton onClick={props.onClickMoveBoarderWrite}>
          게시물 등록
        </S.BoardCreateButton>
      </S.Footer>
    </S.ListPageWrapper>
  );
}
