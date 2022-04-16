import styled from "@emotion/styled";

const Button = styled.button`
  background-color: ${(props) => (props.isActive ? "orange" : "")};
  color: yellowgreen;
`;

export default function Button01(props) {
  return <Button isActive={props.isActive}>{props.title}</Button>;
}
