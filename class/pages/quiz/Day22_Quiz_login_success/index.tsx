import { gql, useQuery } from "@apollo/client";

import { Modal } from "antd";
import { useRouter } from "next/router";
import { accessTokenState } from "../../../src/commons/store";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginSuccess() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [accessToken] = useRecoilState(accessTokenState);
  const router = useRouter();

  // useEffect(() => {
  //   return () => {
  //     if (accessToken === "") {
  //       Modal.error({ content: "로그인을 해주세요" });
  //       router.push("/quiz/Day22_Quiz_login");
  //     }
  //   };
  // }, [accessToken]);

  useEffect(() => {
    if (!accessToken) {
      router.push("/quiz/Day22_Quiz_login");
      Modal.error({ content: "로그인을 먼저 해주세요" });
    }
  }, [accessToken]);

  return <div>{data?.fetchUserLoggedIn.name}님 환영합니다!!!</div>;
}
