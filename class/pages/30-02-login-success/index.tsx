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
  // 인가가 이루어지는 페이지
  // 토큰 시간이 만료되면 error를 브라우저에 보내주고
  // 에러를 확인후 restoreToken을 refreshToken으로 요청해주고
  // 다시 accessToken을 재발급 해준뒤
  // 다시 원래 api를 요청해준다.

  return <div>{data?.fetchUserLoggedIn.name}님 환영합니다!!!</div>;
}
