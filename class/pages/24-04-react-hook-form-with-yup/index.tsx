import { useForm } from "react-hook-form";
import * as yup from "yup";
import styled from "@emotion/styled";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup
    .string()
    .min(8, "비밀번호는 최소 8자리 이상 입력해주세요")
    .max(16, "비밀번호는 최대 16자리까지 입니다.")
    .required("비밀번호는 필수 입력 사항입니다."),
});

interface IFormValues {
  email: string;
  password: string;
}

const Error = styled.div`
  color: orange;
  font-size: 9px;
`;

const Button = styled.button`
  background-color: ${(props) => (props.isActive ? "orange" : "")};
  color: yellowgreen;
`;

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
  };
  console.log("리랜더링 체크!!");

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      이메일:
      <input type="text" {...register("email")} />
      <Error>{formState.errors.email?.message}</Error>
      <br />
      비밀번호:
      <input type="text" {...register("password")} />
      <Error>{formState.errors.password?.message}</Error>
      <br />
      {/* 주소 : <input type="text" {...register("boardAddress.addressDetail")}/> */}
      <Button isActive={formState.isValid}>로그인하기</Button>
    </form>
  );
}
