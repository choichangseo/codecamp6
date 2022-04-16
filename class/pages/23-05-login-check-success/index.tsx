import { gql, useQuery } from "@apollo/client";
import { withAuth } from "../../src/components/commons/HOCS/withAuth";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

function LoginSuccess() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  // const router = useRouter();
  // 문제점은 로그인이 필요한 모든 페이지에 넣어줘야한다. 또한 메세지나 경로가 바뀔 경우 모두 바꿔줘야한다.
  // useEffect(() => {
  //   if (!localStorage.getItem("accessToken")) {
  //     Modal.error({ content: "로그인 후 이용 가능합니다." });
  //     router.push("/23-04-login-check");
  //   }
  // }, []);

  return <div>{data?.fetchUserLoggedIn.name}님 환영합니다!!!</div>;
}
export default withAuth(LoginSuccess);
