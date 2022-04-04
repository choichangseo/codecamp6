import { useRouter } from "next/router";
import {
  CREATE_COMMENT,
  UPDATE_COMMENT,
  FETCH_BOARDS_COMMENTS,
} from "./ReplyWrite.queries";
import { useState, ChangeEvent } from "react";
import ReplyWritePresenter from "./ReplyWrite.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
  IQuery,
} from "../../../../commons/types/generated/types";
import { IQueryFetchBoardCommentsArgs } from "../../../../commons/types/generated/types";

interface ReplyWriteProps {
  el?: any;
  isEdit?: boolean;
  setIsEdit?: any;
}

export default function ReplyWrite(props: ReplyWriteProps) {
  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARDS_COMMENTS);
  const [comment, setComment] = useState("");
  const [commenterror, setCommentError] = useState("");
  const [writer, setWriter] = useState("");
  const [writererror, setWriterError] = useState("");
  const [password, setPassword] = useState("");
  const [passworderror, setPasswordError] = useState("");
  const [rating, setRating] = useState(1);
  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_COMMENT);
  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_COMMENT);
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

  const handleChange = (value: any) => {
    setRating(value);
  };

  const onClickRegisterButton = async () => {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            password: String(password),
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
      Modal.success({ content: "댓글이 작성되었습니다." });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const onClickUpdateComment = async () => {
    if (!comment && !rating) {
      Modal.error({ content: "수정한 내용이 없습니다." });
      return;
    }
    
    try {
      const result = await updateBoardComment({
        variables: {
          updateBoardCommentInput: { contents: comment, rating },
          password: String(password),
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARDS_COMMENTS,
            variables: { boardId: String(router.query.boardId) },
          },
        ],
      });
      console.log(result);
      Modal.success({ content: "댓글이 수정되었습니다." });
      props.setIsEdit?.(false);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <ReplyWritePresenter
      onChangeReply={onChangeReply}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onClickRegisterButton={onClickRegisterButton}
      onClickUpdateComment={onClickUpdateComment}
      comment={comment}
      commenterror={commenterror}
      writererror={writererror}
      passworderror={passworderror}
      handleChange={handleChange}
      isEdit={props.isEdit}
      data={data}
    />
  );
}
