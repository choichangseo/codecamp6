import { useForm } from "react-hook-form";
import * as yup from "yup";
import styled from "@emotion/styled";
// import { yupResolver } from "@hookform/resolvers/yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input01 from "../../src/components/commons/inputs/01";
import Button01 from "../../src/components/commons/buttons/01";

// schema는 컴포넌트 분리시 .validation.ts 라는 파일로 보관하기
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
  email?: string;
  password?: string;
}

const Error = styled.div`
  color: orange;
  font-size: 9px;
`;

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
  };
  console.log("리랜더링 체크!!");

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      {/* 이메일: */}
      {/* <input type="text" {...register("email")} /> */}
      이메일: <Input01 type="text" register={register("email")} />
      <Error>{formState.errors.email?.message}</Error>
      <br />
      {/* 비밀번호:
      <input type="text" {...register("password")} /> */}
      비밀번호 : <Input01 type="password" register={register("password")} />
      <Error>{formState.errors.password?.message}</Error>
      <br />
      {/* 주소 : <input type="text" {...register("boardAddress.addressDetail")}/> */}
      {/* <Button isActive={formState.isValid}>로그인하기</Button> */}
      <Button01 isActive={formState.isValid} title="로그인하기" />
    </form>
  );
}
