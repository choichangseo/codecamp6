import styled from "@emotion/styled";
import { Mark } from "../../../components/units/board/detail/BorderDetail.styled";

export default function NavigationLayout() {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 64px;
    background-color: #ebe1f4;
  `;

  const Mark = styled.div`
    margin: 0px 100px 0px 100px;
    border: none;
    border-left: 5px solid white;
  `;

  const Board = styled.div`
    line-height: 60px;
    font-size: 25px;
    font-weight: bold;
  `;

  const Market = styled.div`
    line-height: 60px;
    font-size: 25px;
    font-weight: bold;
  `;

  const MyPage = styled.div`
    line-height: 60px;
    font-size: 25px;
    font-weight: bold;
  `;

  return (
    <>
      <Wrapper>
        <Board>자유게시판</Board>
        <Mark></Mark>
        <Market>중고마켓</Market>
        <Mark></Mark>
        <MyPage>마이페이지</MyPage>
      </Wrapper>
    </>
  );
}
