import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoarderWriteUI from "./BoarderWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoarderWrite.queries";
import { BoarderWritePageProps, IUpdateBoardInput } from "./BoarderWrite.types";
import { Modal } from "antd";

export default function BoarderWriterPage(props: BoarderWritePageProps) {
  const [youtube, setYoutube] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [writererror, setWriterError] = useState("");
  const [passworderror, setPasswordError] = useState("");
  const [titleerror, setTitleError] = useState("");
  const [contentserror, setContentsError] = useState("");
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [myhome, setMyhome] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const router = useRouter();

  const handleComplete = (data: any) => {
    setIsModalVisible((prev) => !prev);
    console.log(data);
    setMyhome(data.address);
    setZipcode(data.zonecode);
  };
  const onChangeAddress = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };

  const onChangeYoutube = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutube(event.target.value);
  };

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
    if (!title && !contents && !myhome && !addressDetail && !zipcode) {
      Modal.error({ content: "수정한 내용이 없습니다." });
      return;
    }
    if (!password) {
      Modal.error({ content: "비밀번호를 입력헤주세요" });
      return;
    }

    const updateBoardInput: IUpdateBoardInput = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    if (youtube) updateBoardInput.youtubeUrl = youtube;
    if (zipcode || addressDetail || myhome) {
      updateBoardInput.boardAddress = {};
      if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode;
      if (myhome) updateBoardInput.boardAddress.address = myhome;
      if (addressDetail)
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }

    try {
      await updateBoard({
        variables: {
          password,
          boardId: router.query.boardId,
          updateBoardInput,
        },
      });
      Modal.success({ content: "게시물이 수정되었습니다." });
      router.push(`/boards/${String(router.query.boardId)}`);
      console.log(updateBoardInput);
    } catch (error) {
      Modal.error({ content: error.message });
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
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: writer,
              password: password,
              title: title,
              contents: contents,
              youtubeUrl: youtube,
              boardAddress: {
                zipcode: String(zipcode),
                address: myhome,
                addressDetail: addressDetail,
              },
            },
          },
        });
        console.log(result);
        Modal.success({ content: "게시물이 작성되었습니다." });
        router.push(`/boards/${String(result.data.createBoard._id)}`);
      } catch (error) {
        Modal.error({ content: error.message });
      }
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <BoarderWriteUI
      onChangeContents={onChangeContents}
      onChangePassword={onChangePassword}
      onChangeTittle={onChangeTittle}
      onChangeWriter={onChangeWriter}
      onChangeYoutube={onChangeYoutube}
      onChangeAddress={onChangeAddress}
      writererror={writererror}
      passworderror={passworderror}
      titleerror={titleerror}
      contentserror={contentserror}
      onClickSubmit={onClickSubmit}
      onClickEditPage={onClickEditPage}
      isActive={isActive}
      isEdit={props.isEdit}
      data={props.data}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      isModalVisible={isModalVisible}
      handleComplete={handleComplete}
      myhome={myhome}
      zipcode={zipcode}
      addressDetail={addressDetail}
    />
  );
}
