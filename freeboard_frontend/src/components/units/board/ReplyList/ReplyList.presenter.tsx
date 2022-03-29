import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./ReplyList.styled";
import { MouseEvent } from "react";
import "antd/dist/antd.css";
import { Rate } from "antd";
interface ReplyListPresenterProps {
  data2?: any;
  onClickBoardDelete: (event: MouseEvent<HTMLImageElement>) => void;
}

export default function ReplyListPresenter(props: ReplyListPresenterProps) {
  const onClickAlert = (event: MouseEvent<HTMLDivElement>) => {
    alert(event?.currentTarget.id + "님의 글을 클릭했습니다.");
  };

  return (
    <S.Wrapper>
      {props.data2?.fetchBoardComments.map((el: any) => (
        <S.ReplyResult onClick={onClickAlert} key={el._id} id={el.writer}>
          <S.ReplyHead>
            <S.ProfileImg>
              <img src="/profile.png" width="40" height="40" />
            </S.ProfileImg>
            <S.ReplyName>{el.writer}</S.ReplyName>
            <Rate value={el.rating} disabled={true} />
            <S.ButtonImgWrapper>
              <S.EditImg>
                <img src="/edit.png" width="14" height="14" />
              </S.EditImg>
              <S.DeleteImg>
                <img
                  src="/delete.png"
                  width="14"
                  height="14"
                  id={el._id}
                  onClick={props.onClickBoardDelete}
                />
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
