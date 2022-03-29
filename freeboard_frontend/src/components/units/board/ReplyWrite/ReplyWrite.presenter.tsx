import * as S from "./ReplyWrite.styled";
import { ChangeEvent } from "react";
import { Rate } from "antd";
import "antd/dist/antd.css";

interface ReplyWritePresenterProps {
  onClickRegisterButton: () => void;
  onChangeReply: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChange: any;
  commenterror: string;
  writererror: string;
  passworderror: string;
  comment: string;
}

export default function ReplyWritePresenter(props: ReplyWritePresenterProps) {
  return (
    <S.Footer>
      <S.ReplyHead>
        <img src="/reply.png" width="20" height="20" />
        <S.Reply>댓글</S.Reply>
      </S.ReplyHead>
      <S.StarRating>
        <S.Writer
          onChange={props.onChangeWriter}
          placeholder="작성자"
        ></S.Writer>
        <S.Password
          onChange={props.onChangePassword}
          placeholder="비밀번호"
        ></S.Password>
        <Rate onChange={props.handleChange} />
      </S.StarRating>
      <S.Errormsg>
        <S.WriterError>{props.writererror}</S.WriterError>
        <S.PasswordError>{props.passworderror}</S.PasswordError>
      </S.Errormsg>
      <S.ReplyInputWrapper>
        <S.ReplyInput
          maxLength={100}
          onChange={props.onChangeReply}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        ></S.ReplyInput>
        <S.ReplyState>
          <S.TextLength>{props.comment.length}/100</S.TextLength>
          <S.RegisterButton onClick={props.onClickRegisterButton}>
            등록하기
          </S.RegisterButton>
        </S.ReplyState>
        <S.CommentError>{props.commenterror}</S.CommentError>
      </S.ReplyInputWrapper>
    </S.Footer>
  );
}
