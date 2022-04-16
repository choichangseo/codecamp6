import styled from "@emotion/styled";

const Input = styled.input``;

export default function QuizInput(props: any) {
  return <Input type={props.type} {...props.register} />;
}
