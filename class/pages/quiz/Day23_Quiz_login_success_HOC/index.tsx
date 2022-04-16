import { gql, useQuery } from "@apollo/client";
import { withAuthQuiz } from "../../../src/components/commons/HOCS/withAuthQuiz";

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

  return <div>{data?.fetchUserLoggedIn.name}님 환영합니다!!!</div>;
}
export default withAuthQuiz(LoginSuccess);
