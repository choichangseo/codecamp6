import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 90px;
  background-color: black;
`;
const EarthImg = styled.img``;

const EarthFont = styled.div`
  color: white;
  font-size: 45px;
`;

export default function HeaderLayout() {
  return (
    <Wrapper>
      <EarthImg
        src="/landing/maverickslogo.png"
        width={130}
        height={80}
      ></EarthImg>
      <EarthFont>Mavericks.Fan.Page</EarthFont>
    </Wrapper>
  );
}
