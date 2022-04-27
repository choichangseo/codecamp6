import { GraphQLClient, gql } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

export async function getAccessToken() {
  // 2. refreshToken으로 accessToken을 재발급 받기, 여려군데서 재활용 가능하기 때문에 따로 함수로 빼줄수있음
  // mutaion을 해야하는데 apollo 세팅이 되기 전에 사용할 수 없음 그래서 graphql-request 라이브러리를 사용하여 axios를 써줌
  try {
    const graphQLClient = new GraphQLClient(
      "https://backend06.codebootcamp.co.kr/graphql",
      { credentials: "include" }
      // 그냥 사용하면 application cookies 안에 refreshToken이 나오지 않음
    );
    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    return newAccessToken;
  } catch (error: any) {
    console.log(error.message);
  }
}
