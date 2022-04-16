import styled from "@emotion/styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import QuizButton from "../../../src/components/commons/buttons/QuizButton";
import QuizInput from "../../../src/components/commons/inputs/QuizInput";

const schema = yup.object({
  writer: yup
    .string()
    .max(5, "작성자는 5글자 이내입니다.")
    .required("작성자는 필수입력입니다."),
  password: yup
    .string()
    .matches(
      /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/,
      "특수문자,영문,숫자가 포함되어야 합니다."
    )
    .max(8, "비밀번호는 8글자 이내입니다.")
    .required("비밀번호는 필수입력입니다."),
  title: yup
    .string()
    .max(100, "제목은 100글자 이내입니다.")
    .required("제목은 필수입력입니다."),
  contents: yup
    .string()
    .max(1000, "내용은 1000글자 이내입니다.")
    .required("내용은 필수입력입니다."),
});

interface IFormValues {
  writer?: string;
  password?: string;
  title?: string;
  contents?: string;
}

const Error = styled.div`
  font-size: 8px;
  color: red;
`;

export default function ReactHookForm() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const onClickSubmit = (data: IFormValues) => {};

  return (
    <>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        작성자:
        <QuizInput type="text" register={register("writer")} />
        <Error>{formState.errors.writer?.message}</Error>
        <br />
        비밀번호:
        <QuizInput type="text" register={register("password")} />
        <Error>{formState.errors.password?.message}</Error>
        <br />
        제목:
        <QuizInput type="text" register={register("title")} />
        <Error>{formState.errors.title?.message}</Error>
        <br />
        내용:
        <QuizInput type="text" register={register("contents")} />
        <Error>{formState.errors.contents?.message}</Error>
        <br />
        <QuizButton title="게시물등록" />
      </form>
    </>
  );
}
