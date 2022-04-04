import styled from "@emotion/styled";
import { IsResisterButtonProps } from "./BoarderWrite.types";

export const Wrapper = styled.div`
  width: 1920px;
  height: 2844px;
`;
export const Main = styled.div`
  width: 1200px;
  margin: 717px 360px 280px 360px;
  padding-right: 103px;
  padding-left: 101px;
  padding-top: 60px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;
export const Title = styled.div`
  width: 174px;
  height: 53px;
  font-family: "Noto Sans CJK KR";
  margin: 0px 500px 80px 420px;
  font-size: 36px;
`;
export const Subtitle = styled.div`
  font-family: "Noto Sans CJK KR";
  font-size: 16px;
  margin-bottom: 16px;
`;
export const Userinfo_wrapper = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
`;

export const Name = styled.div`
  width: 468px;
  height: 92px;
  margin-right: 24px;
`;
export const Password = styled.div`
  width: 468px;
  height: 92px;
`;
export const First_input = styled.input`
  width: 486px;
  height: 52px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
`;
export const Title_Wrapper = styled.div`
  width: 996px;
  height: 92px;
  margin-bottom: 40px;
`;
export const Second_input = styled.input`
  width: 996px;
  height: 52px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
`;
export const Content_Wrapper = styled.div`
  margin-bottom: 16px;
`;

export const Third_input = styled.textarea`
  padding: 10px;
  max-width: 100%;
  width: 996px;
  height: 480px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  resize: none;
`;

export const Zipcode_Wrapper = styled.div``;
export const Zipcode_input = styled.input`
  width: 77px;
  height: 52px;
  margin-right: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  text-align: center;
`;
export const Zip_ser_button = styled.button`
  background-color: black;
  color: white;
  width: 123px;
  height: 52px;
  font-family: "Noto Sans CJK KR";
  font-size: 16px;
`;

export const Fourth_input = styled.input`
  width: 996px;
  height: 52px;
  margin-bottom: 30px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
`;
export const Youtube_Wrapper = styled.div`
  margin-bottom: 40px;
`;
export const Photo_Wrapper = styled.div`
  margin-bottom: 40px;
`;

export const Upload_button = styled.button`
  width: 78px;
  height: 78px;
  margin-right: 24px;
  font-family: "Noto Sans CJK KR";
  font-size: 12px;
  line-height: 18px;
  border: none;
`;
export const Radio_Wrapper = styled.div``;
export const Radio_place = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Select = styled.input`
  margin-right: 10px;
`;
export const Select_title = styled.div`
  font-family: "Noto Sans CJK KR";
  font-size: 16px;
  margin-right: 22px;
  line-height: 22px;
`;
export const Register_button = styled.button`
  width: 179px;
  height: 52px;
  background-color: ${(props: IsResisterButtonProps) =>
    props.isActive ? "yellow" : "#BDBDBD"};
  border: none;
  font-family: "Noto Sans CJK KR";
  font-size: 16px;
  line-height: 24px;
  margin: 80px 500px 100px 420px;
  cursor: pointer;
`;

export const Errormsg = styled.div`
  font-size: 5px;
  color: red;
`;
