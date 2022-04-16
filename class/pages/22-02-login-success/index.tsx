import { gql, useQuery } from "@apollo/client";

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
  // API 요청이 나갔는데 accessToken이 Bearer에 딸려나가지 않아 id를 받아 올 수 없다.
  // app.tsx에서 uri 아래쪽에 headers 첨부해주면 된다.
  // app.tsx에서 accessToken을 글로벌 스테이트를 이용하여 받아주면 된다.
  //   하지만 RecoilRoot가 MyApp에 자식이기 때문에 RecoilState를 사용하지 못하게되는데
  // ApolloProvider 위에 RecoilRoot를 감싸주고 MyApp과 ApolloProvider를 컴포넌트로 빼온다.

  return <div>{data?.fetchUserLoggedIn.name}님 환영합니다!!!</div>;
}
