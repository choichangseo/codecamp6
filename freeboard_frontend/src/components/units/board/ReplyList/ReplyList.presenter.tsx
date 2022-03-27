import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./ReplyList.styled";
import { MouseEvent } from "react";

interface ReplyListPresenterProps {
  data2?: any;
  onClickBoardDelete: (event: MouseEvent<HTMLDivElement>) => void;
}

export default function ReplyListPresenter(props: ReplyListPresenterProps) {
  return (
    <S.Wrapper>
      {props.data2?.fetchBoardComments.map((el: any) => (
        <S.ReplyResult key={el._id}>
          <S.ReplyHead>
            <S.ProfileImg>
              <img src="/profile.png" width="40" height="40" />
            </S.ProfileImg>
            <S.ReplyName>{el.writer}</S.ReplyName>
            <S.ReplyRating>{el.rating}</S.ReplyRating>
            <S.ButtonImgWrapper>
              <S.EditImg>
                <img src="/edit.png" width="14" height="14" />
              </S.EditImg>
              <S.DeleteImg id={el._id} onClick={props.onClickBoardDelete}>
                <img src="/delete.png" width="14" height="14" />
              </S.DeleteImg>
            </S.ButtonImgWrapper>
          </S.ReplyHead>
          <S.ReplyContents>{el.contents}</S.ReplyContents>
          <S.ReplyCreatedAt>{getDate(el.createdAt)}</S.ReplyCreatedAt>
        </S.ReplyResult>
      ))}
    </S.Wrapper>
  );
}
