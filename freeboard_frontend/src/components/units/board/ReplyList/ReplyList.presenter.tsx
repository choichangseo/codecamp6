import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./ReplyList.styled";
import { MouseEvent } from "react";
import "antd/dist/antd.css";
import { Rate } from "antd";
import "antd/dist/antd.css";
import { Modal } from "antd";

interface ReplyListPresenterProps {
  data2?: any;
  onClickBoardDelete: (event: MouseEvent<HTMLImageElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  handleCancel: any;
  handleOk: any;
  showModal: (event: MouseEvent<HTMLImageElement>) => void;
  isModalVisible: any;
}

export default function ReplyListPresenter(props: ReplyListPresenterProps) {
  return (
    <S.Wrapper>
      {props.data2?.fetchBoardComments.map((el: any) => (
        <S.ReplyResult key={el._id} id={el.writer}>
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
                  onClick={props.showModal}
                />
              </S.DeleteImg>
            </S.ButtonImgWrapper>
          </S.ReplyHead>
          <S.ReplyContents>{el.contents}</S.ReplyContents>
          <S.ReplyCreatedAt>{getDate(el.createdAt)}</S.ReplyCreatedAt>
        </S.ReplyResult>
      ))}
      {props.isModalVisible && (
        <Modal
          onOk={props.onClickBoardDelete}
          onCancel={props.handleCancel}
          visible={true}
        >
          <S.InputPass
            onChange={props.onChangePassword}
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />
        </Modal>
      )}
    </S.Wrapper>
  );
}
