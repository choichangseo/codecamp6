import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoarderWriteUI from "./BoarderWrite.presenter";
import {
  CREATE_BOARD,
  UPDATE_BOARD,
  FETCH_BOARD,
} from "./BoarderWrite.queries";
import { BoarderWritePageProps, IUpdateBoardInput } from "./BoarderWrite.types";
import { Contents } from "../detail/BorderDetail.styled";

export default function BoarderWriterPage(props: BoarderWritePageProps) {
  const [isActive, setIsActive] = useState(false);
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [writererror, setWriterError] = useState("");
  const [passworderror, setPasswordError] = useState("");
  const [titleerror, setTitleError] = useState("");
  const [contentserror, setContentsError] = useState("");
  const [API] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const router = useRouter();

  function onChangeWriter(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
    if (event.target.value == "") {
      setWriterError("");
    }
    if (
      event.target.value !== "" &&
      password !== "" &&
      title !== "" &&
      contents !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    if (event.target.value == "") {
      setPasswordError("");
    }
    if (
      writer !== "" &&
      event.target.value !== "" &&
      title !== "" &&
      contents !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeTittle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
    if (event.target.value == "") {
      setTitleError("");
    }
    if (
      writer !== "" &&
      password !== "" &&
      event.target.value !== "" &&
      contents !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeContents(event: ChangeEvent<HTMLTextAreaElement>) {
    setContents(event.target.value);
    if (event.target.value == "") {
      setContentsError("");
    }
    if (
      writer !== "" &&
      password !== "" &&
      title !== "" &&
      event.target.value !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  const onClickEditPage = async () => {
    if (!title && !contents) {
      alert("수정한 내용이 없습니다.");
      return;
    }
    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    const updateBoardInput: IUpdateBoardInput = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;

    try {
      await updateBoard({
        variables: {
          password,
          boardId: router.query.boardId,
          updateBoardInput: { title, contents },
        },
      });
      alert("게시물 수정에 성공했습니다.");
      router.push(`/boards/${router.query.boardId}`);
    } catch (error) {
      alert("비밀번호를 확인해주세요.");
    }
  };

  const onClickSubmit = async () => {
    if (writer == "") {
      setWriterError("이름을 입력해주세요.");
    }
    if (password == "") {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (title == "") {
      setTitleError("제목을 입력해주세요.");
    }
    if (contents == "") {
      setContentsError("내용을 입력해주세요.");
    }
    if (writer !== "" && password !== "" && title !== "" && contents !== "") {
      try {
        const result = await API({
          variables: {
            createBoardInput: {
              writer: writer,
              password: password,
              title: title,
              contents: contents,
            },
          },
        });
        console.log(result);
        alert("게시물이 작성되었습니다.");
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        console.log("에러입니다.");
      }
    }
  };

  return (
    <BoarderWriteUI
      onChangeContents={onChangeContents}
      onChangePassword={onChangePassword}
      onChangeTittle={onChangeTittle}
      onChangeWriter={onChangeWriter}
      writererror={writererror}
      passworderror={passworderror}
      titleerror={titleerror}
      contentserror={contentserror}
      onClickSubmit={onClickSubmit}
      onClickEditPage={onClickEditPage}
      isActive={isActive}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
