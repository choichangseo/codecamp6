import { ChangeEvent, useState } from "react";
import { useMutation, gql, useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../src/commons/store";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);
  // 유저정보를 저장하기 위한 글로벌 스테이트
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);
  const router = useRouter();

  const client = useApolloClient();
  // useQuery하듯이 client가 필요함 client가 axios라고 생각하면 됨. 이걸 밑에 유저정보 받아오기에서 사용 

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    // 1. 로그인 하기
    const result = await loginUser({
      variables: { email, password },
    });
    const accessToken = result.data.loginUser.accessToken;
    console.log(accessToken);

    // 2. 유저정보 받아오기 useQuery를 여기서 추가 할 수  없기 때문에 apolloclient를 사용하여 axios처럼 가공하여 사용할 수 있다.
    // mutation할때 데이터를 result에서 받아주듯이 globalState를 활용하여 resultUserInfo에 유저정보를 받아준다.
    // context안에 Authorization 'Bearer'로 보내주면 백엔드에서 복호화 후 유저정보를 확인하여 resultUserInfo를 내보내준다.
    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      context: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });
    const userInfo = resultUserInfo.data.fetchUserLoggedIn;
    console.log(userInfo);

    // 3. 글로벌 스테이트에 유저정보 저장하기 새로고침하면 로컬스토리지의 정보가 모두 날아가기때문에
    // apollo setting 파일에서 useEffect를 통해 userInfo를 로컬스토리지로부터 저장한다.
    setAccessToken(accessToken);
    setUserInfo(userInfo);
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    // 객체는 로컬스토리지에 못들어감.

    // 4. 로그인 성공페이지로 이동하기
    // 로그인 성공페이지에 useRecoilState에 저장된 userInfo를 랜더링해주면된다.
    alert("로그인에 성공하였습니다.");
    router.push("/24-02-login-use-apollo-client-success");
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
