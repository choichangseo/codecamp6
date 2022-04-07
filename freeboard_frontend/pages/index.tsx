import styled from "@emotion/styled";

export default function Home() {
  const Wrapper = styled.div`
    width: 100%;
  `;

  const BackGround = styled.div`
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/landing/dallas.jpeg");
  `;
  return (
    <Wrapper>
      <BackGround></BackGround>
    </Wrapper>
  );
}
