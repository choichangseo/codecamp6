import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/store";
import { useEffect } from "react";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

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
    // 옛날 방식
    // const localstorageToken = localStorage.getItem("accessToken");
    // const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    // setUserInfo(userInfo);
    // setAccessToken(localstorageToken || "");
    // accessToken 재발급 받아서 state에 넣어주기

    // accessToken 재발급 받아서 사용하기
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  // 이렇게 localStorage에서 getItem으로 토큰을 가져와도 localStorage을 찾을 수 없다는 에러가나온다.
  // const localstorageToken = localStorage.getItem("accessToken");
  //   setAccessToken(localstorageToken || "");

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1. 에러를 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 해당 에러가 토큰 만료 에러인지 체크(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 2. refreshToken으로 accessToken을 재발급 받기, 여려군데서 재활용 가능하기 때문에 따로 함수로 빼줄수있음
          // mutaion을 해야하는데 apollo 세팅이 되기 전에 사용할 수 없음 그래서 graphql-request 라이브러리를 사용하여 axios를 써줌
          getAccessToken().then((newAccessToken) => {
            setAccessToken(newAccessToken);
            // 3. 재발급 받은 accessToken으로  방금 실패한 쿼리 재요청하기
            // 이미 operation에 만료된 accessToken이 있는데 이것만 바꿔치기 해야한다
            // getContext 사용안하면 해더안에 있는 다른 내용들까지 바꿔치기 당함
            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`, // accessToken만 바꿔치기
              },
            });
            // 3-2.변경된 accessToken으로 operation 재요청하기
            return forward(operation);
          });
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
    // 그냥 사용하면 application cookies 안에 refreshToken이 나오지 않음
  });

  const client = new ApolloClient({
    // errorLink 추가해주기
    link: ApolloLink.from([uploadLink, errorLink]),
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
