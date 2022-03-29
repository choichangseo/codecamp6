import {
  Wrapper,
  Main,
  Title,
  Subtitle,
  Userinfo_wrapper,
  Name,
  Password,
  First_input,
  Title_Wrapper,
  Second_input,
  Content_Wrapper,
  Third_input,
  Zipcode_Wrapper,
  Zipcode_input,
  Zip_ser_button,
  Fourth_input,
  Youtube_Wrapper,
  Photo_Wrapper,
  Upload_button,
  Radio_Wrapper,
  Radio_place,
  Select,
  Select_title,
  Register_button,
  Errormsg,
} from "./BoarderWrite.styled";

import { BoarderWriteUIProps } from "./BoarderWrite.types";

export default function BoarderWriteUI(props: BoarderWriteUIProps) {
  return (
    <Wrapper>
      <Main>
        <Title>게시물 {props.isEdit ? "수정" : "등록"}</Title>
        <Userinfo_wrapper>
          <Name>
            <Subtitle>작성자</Subtitle>
            <First_input
              type="text"
              placeholder="이름을 적어주세요"
              onChange={props.onChangeWriter}
              defaultValue={props.data?.fetchBoard.writer}
            />
            <Errormsg>{props.writererror}</Errormsg>
          </Name>
          <Password>
            <Subtitle>비밀번호</Subtitle>
            <First_input
              type="text"
              placeholder="비밀번호를 입력해주세요"
              onChange={props.onChangePassword}
              defaultValue={props.data?.fetchBoard.password}
            />
            <Errormsg>{props.passworderror}</Errormsg>
          </Password>
        </Userinfo_wrapper>
        <Title_Wrapper>
          <Subtitle>제목</Subtitle>
          <Second_input
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={props.onChangeTittle}
            defaultValue={props.data?.fetchBoard.title}
          />
          <Errormsg>{props.titleerror}</Errormsg>
        </Title_Wrapper>
        <Content_Wrapper>
          <Subtitle>내용</Subtitle>
          <Third_input
            placeholder="내용을 작성해주세요."
            onChange={props.onChangeContents}
            defaultValue={props.data?.fetchBoard.contents}
          />
          <Errormsg>{props.contentserror}</Errormsg>
        </Content_Wrapper>
        <Zipcode_Wrapper>
          <Subtitle>주소</Subtitle>
          <div>
            <Zipcode_input type="text" placeholder="07250" />
            <Zip_ser_button>우편번호 검색</Zip_ser_button>
          </div>
          <Fourth_input type="text" />
          <Fourth_input type="text" />
        </Zipcode_Wrapper>
        <Youtube_Wrapper>
          <Subtitle>유튜브</Subtitle>
          <Fourth_input
            onChange={props.onChangeYoutube}
            type="text"
            placeholder="Youtube URL을 입력해주세요."
          />
        </Youtube_Wrapper>
        <Photo_Wrapper>
          <Subtitle>사진 첨부</Subtitle>
          <Upload_button>+ Upload</Upload_button>
          <Upload_button>+ Upload</Upload_button>
          <Upload_button>+ Upload</Upload_button>
        </Photo_Wrapper>
        <Radio_Wrapper>
          <Subtitle>메인설정</Subtitle>
          <Radio_place>
            <Select type="radio" />
            <Select_title>유튜브</Select_title>
            <Select type="radio" />
            <Select_title>사진</Select_title>
          </Radio_place>
        </Radio_Wrapper>
        <Register_button
          onClick={props.isEdit ? props.onClickEditPage : props.onClickSubmit}
          isActive={props.isActive}
        >
          {props.isEdit ? "수정" : "등록"}하기
        </Register_button>
      </Main>
    </Wrapper>
  );
}
