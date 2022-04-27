import { ChangeEvent, useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/store";
import { Modal } from "antd";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);
  const router = useRouter();

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    try {
      const result = await loginUser({
        variables: { email, password },
      });
      const accessToken = result.data.loginUser.accessToken;
      setAccessToken(accessToken);
      console.log(accessToken);

      Modal.success({ content: "로그인에 성공하였습니다." });
      localStorage.setItem("accessToken", accessToken);
      router.push("/quiz/Day28_Quiz/payment");
    } catch (error) {
      Modal.error({ content: "로그인에 실패하였습니다." });
    }
  };

  return (
    <>
      이메일: <input onChange={onChangeEmail} type="text" />
      <br />
      비밀번호: <input onChange={onChangePassword} type="password" />
      <br />
      <button onClick={onClickLogin}>로그인하기</button>
    </>
  );
}
