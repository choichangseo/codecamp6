import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/store";
import { useEffect } from "react";

export default function ApolloSetting(props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);
  // 1. browser는 더 이상 지원되지 않음
  // if(process.browser){

  // }else{

  // }

  // 2. 두번째 방법
  // if (typeof window !== "undefined") {
  //   console.log("여기는 브라우저다");
  //   const localstorageToken = localStorage.getItem("accessToken");
  //   setAccessToken(localstorageToken || "");
  // } else {
  //   console.log("여기는 프론트엔드 서버다.");
  // }
  //  window는 브라우저에만 실행되는데 yarn dev에서는 실행되지 않는다.
  // 3.세번째 방법
  useEffect(() => {
    const localstorageToken = localStorage.getItem("accessToken");
    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    setUserInfo(userInfo);
    setAccessToken(localstorageToken || "");
  }, []);

  // 이렇게 localStorage에서 getItem으로 토큰을 가져와도 localStorage을 찾을 수 없다는 에러가나온다.
  // const localstorageToken = localStorage.getItem("accessToken");
  //   setAccessToken(localstorageToken || "");
  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
