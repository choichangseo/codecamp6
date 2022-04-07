import styled from "@emotion/styled";

export default function Home() {
  const Wrapper = styled.div`
    width: 1200px;
    height: 100px;
    border: 2px solid red;
  `;
  const Header = styled.div`
    width: 100vh;
    height: 100px;
    background-color: black;
  `;
  return (
    <Wrapper>
      <Header></Header>
    </Wrapper>
  );
}
