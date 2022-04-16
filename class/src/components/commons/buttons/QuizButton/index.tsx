import styled from "@emotion/styled";

const Button = styled.button``;

export default function QuizButton(props: any) {
  return <Button>{props.title}</Button>;
}
