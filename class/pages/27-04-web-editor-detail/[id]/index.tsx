import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Dompurify from "dompurify";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;
// gql playground 해킹방법
// "<img src='#' onerror='console.log(localStorage.getItem(\"accessToken\"))'/>"
// 이렇게되면 자바스크립트가 동작하여 accessToken 탈취가 가능해진다.
// 이를 막기위해 dompurify 라이브러리를 사용해준다.
export default function WebEditorDetailPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.id) },
  });
  return (
    <div>
      <div>작성자:{data?.fetchBoard.writer}</div>
      <div>제목:{data?.fetchBoard.title}</div>
      {/* contents에 태그들을 문자열로 인식 */}
      {/* <div>내용:{data?.fetchBoard.contents}</div> */}
      {/* dangerous의 단점으로는 input창 안에서 <script>태그로 accessToken을
      탈취할 수 있다. 하지만 react quill에서 <>태그는 자동으로 크거나 작다에 사용되는 부호로
      인식하게 막아주었다. */}
      {typeof window !== "undefined" && (
        <div
          dangerouslySetInnerHTML={{
            // 프리랜더링시 Dompurify가 없어서 에러가 난다.
            __html: Dompurify.sanitize(data?.fetchBoard.contents),
          }}
        ></div>
      )}
    </div>
  );
}
