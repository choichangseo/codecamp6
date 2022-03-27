import { useRouter } from "next/router";
import { CREATE_COMMENT, FETCH_BOARDS_COMMENTS } from "./ReplyWrite.queries";
import { useState, ChangeEvent } from "react";
import ReplyWritePresenter from "./ReplyWrite.presenter";
import { useMutation } from "@apollo/client";

export default function ReplyWrite() {
  const [comment, setComment] = useState("");
  const [commenterror, setCommentError] = useState("");
  const [writer, setWriter] = useState("");
  const [writererror, setWriterError] = useState("");
  const [password, setPassword] = useState("");
  const [passworderror, setPasswordError] = useState("");
  const [rating, setRating] = useState("");
  const [createBoardComment] = useMutation(CREATE_COMMENT);
  const router = useRouter();

  const onChangeReply = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
    if (event.target.value == "") {
      setCommentError("댓글내용을 입력해주세요");
    }
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if (event.target.value == "") {
      setWriterError("작성자 입력");
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value == "") {
      setPasswordError("비밀번호 입력");
    }
  };

  const onChangeRating = (event: ChangeEvent<HTMLInputElement>) => {
    setRating(event.target.value);
  };

  const onClickRegisterButton = async () => {
    await createBoardComment({
      variables: {
        createBoardCommentInput: {
          writer,
          password,
          contents: comment,
          rating: Number(rating),
        },
        boardId: String(router.query.boardId),
      },
      refetchQueries: [
        {
          query: FETCH_BOARDS_COMMENTS,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  };

  return (
    <ReplyWritePresenter
      onChangeReply={onChangeReply}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeRating={onChangeRating}
      onClickRegisterButton={onClickRegisterButton}
      commenterror={commenterror}
      writererror={writererror}
      passworderror={passworderror}
    />
  );
}
