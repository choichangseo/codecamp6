import * as S from "./BoarderWrite.styled";
import { Modal } from "antd";
import { BoarderWriteUIProps } from "./BoarderWrite.types";
import "antd/dist/antd.css";
import DaumPostcode from "react-daum-postcode";

export default function BoarderWriteUI(props: BoarderWriteUIProps) {
  return (
    <S.Wrapper>
      <S.Main>
        <S.Title>게시물 {props.isEdit ? "수정" : "등록"}</S.Title>
        <S.Userinfo_wrapper>
          <S.Name>
            <S.Subtitle>작성자</S.Subtitle>
            <S.First_input
              type="text"
              placeholder="이름을 적어주세요"
              onChange={props.onChangeWriter}
              defaultValue={props.data?.fetchBoard.writer}
            />
            <S.Errormsg>{props.writererror}</S.Errormsg>
          </S.Name>
          <S.Password>
            <S.Subtitle>비밀번호</S.Subtitle>
            <S.First_input
              type="text"
              placeholder="비밀번호를 입력해주세요"
              onChange={props.onChangePassword}
              defaultValue={props.data?.fetchBoard.password}
            />
            <S.Errormsg>{props.passworderror}</S.Errormsg>
          </S.Password>
        </S.Userinfo_wrapper>
        <S.Title_Wrapper>
          <S.Subtitle>제목</S.Subtitle>
          <S.Second_input
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={props.onChangeTittle}
            defaultValue={props.data?.fetchBoard.title}
          />
          <S.Errormsg>{props.titleerror}</S.Errormsg>
        </S.Title_Wrapper>
        <S.Content_Wrapper>
          <S.Subtitle>내용</S.Subtitle>
          <S.Third_input
            placeholder="내용을 작성해주세요."
            onChange={props.onChangeContents}
            defaultValue={props.data?.fetchBoard.contents}
          />
          <S.Errormsg>{props.contentserror}</S.Errormsg>
        </S.Content_Wrapper>
        <S.Zipcode_Wrapper>
          <S.Subtitle>주소</S.Subtitle>
          <S.Zipcode_input
            type="text"
            readOnly
            value={
              props.zipcode ||
              props.data?.fetchBoard.boardAddress?.zipcode ||
              ""
            }
          />
          <S.Zip_ser_button onClick={props.showModal}>
            우편번호 검색
          </S.Zip_ser_button>
          <S.Fourth_input
            readOnly
            value={
              props.myhome
                ? props.myhome
                : props.data?.fetchBoard.boardAddress?.address
            }
            type="text"
          />
          <S.Fourth_input
            defaultValue={
              props.addressDetail ||
              props.data?.fetchBoard.boardAddress?.addressDetail ||
              ""
            }
            onChange={props.onChangeAddress}
            type="text"
          />
        </S.Zipcode_Wrapper>
        <S.Youtube_Wrapper>
          <S.Subtitle>유튜브</S.Subtitle>
          <S.Fourth_input
            onChange={props.onChangeYoutube}
            type="text"
            placeholder="Youtube URL을 입력해주세요."
          />
        </S.Youtube_Wrapper>
        <S.Photo_Wrapper>
          <S.Subtitle>사진 첨부</S.Subtitle>
          <S.Upload_button>+ Upload</S.Upload_button>
          <S.Upload_button>+ Upload</S.Upload_button>
          <S.Upload_button>+ Upload</S.Upload_button>
        </S.Photo_Wrapper>
        <S.Radio_Wrapper>
          <S.Subtitle>메인설정</S.Subtitle>
          <S.Radio_place>
            <S.Select type="radio" />
            <S.Select_title>유튜브</S.Select_title>
            <S.Select type="radio" />
            <S.Select_title>사진</S.Select_title>
          </S.Radio_place>
        </S.Radio_Wrapper>
        <S.Register_button
          onClick={props.isEdit ? props.onClickEditPage : props.onClickSubmit}
          isActive={props.isActive}
        >
          {props.isEdit ? "수정" : "등록"}하기
        </S.Register_button>
        {props.isModalVisible && (
          <Modal
            visible={true}
            onOk={props.handleOk}
            onCancel={props.handleCancel}
          >
            <DaumPostcode onComplete={props.handleComplete} />
          </Modal>
        )}
      </S.Main>
    </S.Wrapper>
  );
}
