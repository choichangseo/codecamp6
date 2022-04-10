import * as S from "./BoarderWrite.styled";
import { Modal } from "antd";
import { BoarderWriteUIProps } from "./BoarderWrite.types";
import "antd/dist/antd.css";
import DaumPostcode from "react-daum-postcode";
import UploadFile from "../../../commons/UploadFile/uploadfile";
import { v4 as uuidv4 } from "uuid";

export default function BoarderWriteUI(props: BoarderWriteUIProps) {
  return (
    <S.Wrapper>
      <S.Main>
        <S.Title>게시물 {props.isEdit ? "수정" : "등록"}</S.Title>
        <S.UserinfoWrapper>
          <S.Name>
            <S.Subtitle>작성자</S.Subtitle>
            <S.FirstInput
              type="text"
              placeholder="이름을 적어주세요"
              onChange={props.onChangeWriter}
              defaultValue={props.data?.fetchBoard.writer}
            />
            <S.ErrorMsg>{props.writererror}</S.ErrorMsg>
          </S.Name>
          <S.Password>
            <S.Subtitle>비밀번호</S.Subtitle>
            <S.FirstInput
              type="text"
              placeholder="비밀번호를 입력해주세요"
              onChange={props.onChangePassword}
              defaultValue={props.data?.fetchBoard.password}
            />
            <S.ErrorMsg>{props.passworderror}</S.ErrorMsg>
          </S.Password>
        </S.UserinfoWrapper>
        <S.TitleWrapper>
          <S.Subtitle>제목</S.Subtitle>
          <S.SecondInput
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={props.onChangeTittle}
            defaultValue={props.data?.fetchBoard.title}
          />
          <S.ErrorMsg>{props.titleerror}</S.ErrorMsg>
        </S.TitleWrapper>
        <S.ContentWrapper>
          <S.Subtitle>내용</S.Subtitle>
          <S.ThirdInput
            placeholder="내용을 작성해주세요."
            onChange={props.onChangeContents}
            defaultValue={props.data?.fetchBoard.contents}
          />
          <S.ErrorMsg>{props.contentserror}</S.ErrorMsg>
        </S.ContentWrapper>
        <S.ZipcodeWrapper>
          <S.Subtitle>주소</S.Subtitle>
          <S.ZipcodeInput
            type="text"
            readOnly
            value={
              props.zipcode ||
              props.data?.fetchBoard.boardAddress?.zipcode ||
              ""
            }
          />
          <S.ZipSerButton onClick={props.showModal}>
            우편번호 검색
          </S.ZipSerButton>
          <S.FourthInput
            readOnly
            value={
              props.myhome
                ? props.myhome
                : props.data?.fetchBoard.boardAddress?.address
            }
            type="text"
          />
          <S.FourthInput
            defaultValue={
              props.addressDetail ||
              props.data?.fetchBoard.boardAddress?.addressDetail ||
              ""
            }
            onChange={props.onChangeAddress}
            type="text"
          />
        </S.ZipcodeWrapper>
        <S.YoutubeWrapper>
          <S.Subtitle>유튜브</S.Subtitle>
          <S.FourthInput
            onChange={props.onChangeYoutube}
            type="text"
            placeholder="Youtube URL을 입력해주세요."
          />
        </S.YoutubeWrapper>
        <S.PhotoWrapper>
          <S.Subtitle>사진 첨부</S.Subtitle>
          {props.imageUrl?.map((el: string, index: number) => (
            <UploadFile
              key={uuidv4()}
              index={index}
              fileUrl={el}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
        </S.PhotoWrapper>
        <S.RadioWrapper>
          <S.Subtitle>메인설정</S.Subtitle>
          <S.RadioPlace>
            <S.Select type="radio" />
            <S.SelectTitle>유튜브</S.SelectTitle>
            <S.Select type="radio" />
            <S.SelectTitle>사진</S.SelectTitle>
          </S.RadioPlace>
        </S.RadioWrapper>
        <S.RegisterButton
          onClick={props.isEdit ? props.onClickEditPage : props.onClickSubmit}
          isActive={props.isActive}
        >
          {props.isEdit ? "수정" : "등록"}하기
        </S.RegisterButton>
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
