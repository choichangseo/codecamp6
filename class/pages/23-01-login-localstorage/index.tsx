import { ChangeEvent, useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../src/commons/store";

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
    const result = await loginUser({
      variables: { email, password },
    });
    const accessToken = result.data.loginUser.accessToken;
    setAccessToken(accessToken);
    localStorage.setItem("accessToken", accessToken);
    // localStarage는 이미 브라우저에 있기때문에 입력만해주면된다. setItem(만드는 함수)안에 key 값과 value를 넣어주면된다.
    console.log(accessToken);

    alert("로그인에 성공하였습니다.");
    router.push("/23-02-login-localstorage-success");
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
