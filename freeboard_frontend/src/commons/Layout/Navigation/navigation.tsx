import styled from "@emotion/styled";
import { MouseEvent } from "react";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 64px;
  background-color: #0048b3;
`;

const Mark = styled.div`
  margin: 0px 100px 0px 100px;
  border: none;
  border-left: 5px solid white;
`;

const OpenApi = styled.div`
  line-height: 60px;
  font-size: 25px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

const Board = styled.div`
  line-height: 60px;
  font-size: 25px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

const Market = styled.div`
  line-height: 60px;
  font-size: 25px;
  font-weight: bold;
  color: white;
`;

const MyPage = styled.div`
  line-height: 60px;
  font-size: 25px;
  font-weight: bold;
  color: white;
`;
export default function NavigationLayout() {
  const router = useRouter();

  const onClickMoveBoardList = (event: MouseEvent<HTMLDivElement>) => {
    router.push("/boards");
  };

  const onClickMoveTeamInfo = (event: MouseEvent<HTMLDivElement>) => {
    router.push("/boards/openapi");
  };
  return (
    <>
      <Wrapper>
        <OpenApi onClick={onClickMoveTeamInfo}>NBA Team Info</OpenApi>
        <Mark></Mark>
        <Board onClick={onClickMoveBoardList}>자유게시판</Board>
        <Mark></Mark>
        <Market>중고마켓</Market>
        <Mark></Mark>
        <MyPage>마이페이지</MyPage>
      </Wrapper>
    </>
  );
}
