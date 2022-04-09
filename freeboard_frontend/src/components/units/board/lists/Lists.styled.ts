import styled from "@emotion/styled";

export const ListPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 1200px;
  height: 583px;
  border: 1px solid black;
  border-left: none;
  border-right: none;
  margin: auto;
`;
export const HeadLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 52px;
  line-height: 50px;
  font-family: "Noto Sans CJK KR";
  font-size: 18px;
  line-height: 50px;
`;

export const HeadNumber = styled.div`
  margin-left: 40px;
  width: 100px;
`;
export const HeadTitle = styled.div`
  width: 530px;
  text-align: left;
`;
export const HeadWriter = styled.div`
  width: 170px;
  margin-right: 110px;
`;
export const HeadDate = styled.div`
  width: 400px;
`;
export const IndexNumber = styled.div`
  font-family: "Noto Sans CJK KR";
  font-size: 16px;
  margin-left: 48px;
  width: 100px;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 52px;
  line-height: 50px;
  margin: auto;
  color: #4f4f4f;
  border-top: 1px solid #bdbdbd;
`;
export const Writer = styled.div`
  font-family: "Noto Sans CJK KR";
  font-size: 16px;
  color: #4f4f4f;
  width: 200px;
`;
export const Title = styled.div`
  font-family: "Noto Sans CJK KR";
  font-size: 16px;
  color: #4f4f4f;
  width: 500px;
  text-overflow: ellipsis;
  cursor: pointer;
`;
export const CreatedDate = styled.div`
  font-family: "Noto Sans CJK KR";
  font-size: 16px;
  color: #4f4f4f;
  margin-right: 48px;
  margin-left: 125px;
  width: 400px;
`;
export const Footer = styled.div`
  margin-top: 30px;
`;
export const BoardCreateButton = styled.div`
  width: 150px;
  height: 30px;
  line-height: 25px;
  text-align: center;
  border: 1px solid lightgray;
`;

export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  width: 500px;
  height: 40px;
`;

interface IProps {
  isMatch: boolean;
}
export const Word = styled.span`
  color: ${(props: IProps) => (props.isMatch ? "orange" : "black")};
`;
