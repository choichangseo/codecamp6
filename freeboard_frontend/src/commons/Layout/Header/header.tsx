import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 152px;
`;
const EarthImg = styled.img``;

const EarthFont = styled.div`
  font-size: 25px;
`;

export default function HeaderLayout() {
  return (
    <Wrapper>
      <EarthImg src="/Earth.png" width={30} height={30}></EarthImg>
      <EarthFont>Earth.Market</EarthFont>
    </Wrapper>
  );
}
