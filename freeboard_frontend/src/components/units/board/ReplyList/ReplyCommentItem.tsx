import * as S from "./ReplyList.styled";
import { Rate } from "antd";
import { MouseEvent, useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import ReplyWrite from "../ReplyWrite/ReplyWrite.component";

interface ReplyCommentItemProps {
  el?: any;
  showModal: (event: MouseEvent<HTMLImageElement>) => void;
}

export default function ReplyCommentItem(props: ReplyCommentItemProps) {
  const [isEdit, setIsEdit] = useState(false);
  const onClickEdit = (event: MouseEvent<HTMLImageElement>) => {
    setIsEdit(true);
  };

  return (
    <>
      {isEdit === false && (
        <S.ReplyResult key={props.el._id} id={props.el.writer}>
          <S.ReplyHead>
            <S.ProfileImg>
              <img src="/profile.png" width="40" height="40" />
            </S.ProfileImg>
            <S.ReplyName>{props.el.writer}</S.ReplyName>
            <Rate value={props.el.rating} disabled={true} />
            <S.ButtonImgWrapper>
              <S.EditImg>
                <img
                  src="/edit.png"
                  width="14"
                  height="14"
                  onClick={onClickEdit}
                />
              </S.EditImg>
              <S.DeleteImg>
                <img
                  src="/delete.png"
                  width="14"
                  height="14"
                  id={props.el._id}
                  onClick={props.showModal}
                />
              </S.DeleteImg>
            </S.ButtonImgWrapper>
          </S.ReplyHead>
          <S.ReplyContents>{props.el.contents}</S.ReplyContents>
          <S.ReplyCreatedAt>{getDate(props.el.createdAt)}</S.ReplyCreatedAt>
        </S.ReplyResult>
      )}
      {isEdit === true && (
        <ReplyWrite isEdit={true} el={props.el} setIsEdit={setIsEdit} />
      )}
    </>
  );
}
