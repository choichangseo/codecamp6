import styled from "@emotion/styled";

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 355px;
`;

export const Reply = styled.div`
  font-family: "Noto Sans CJK KR";
  font-weight: 500;
  font-size: 18px;
`;

export const ReplyHead = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 42px;
`;

export const Writer = styled.input`
  width: 180px;
  height: 52px;
  margin-right: 24px;
`;
export const Password = styled.input`
  width: 180px;
  height: 52px;
  margin-right: 20px;
`;

export const StarRating = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 22px;
`;

export const Errormsg = styled.div`
  display: flex;
  flex-direction: row;
`;
export const WriterError = styled.div`
  font-size: 5px;
  color: red;
`;
export const PasswordError = styled.div`
  font-size: 5px;
  color: red;
`;

export const ReplyInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  height: 161px;
  border: 1px solid #bdbdbd;
`;

export const ReplyInput = styled.textarea`
  width: 1200px;
  height: 130px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  resize: none;
`;

export const ReplyState = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1200px;
  height: 31px;
`;

export const TextLength = styled.div`
  font-family: "Noto Sans CJK KR";
  font-size: 16px;
  margin-left: 20px;
  line-height: 50px;
  color: #bdbdbd;
`;

export const RegisterButton = styled.button`
  width: 91px;
  height: 32px;
  background-color: black;
  font-family: "Noto Sans CJK KR";
  font-size: 16px;
  text-align: center;
  color: white;
`;

export const CommentError = styled.div`
  font-size: 5px;
  color: red;
`;

export const Rating = styled.input``;
