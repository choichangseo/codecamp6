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

export default function WebEditorDetailPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.id) },
  });
  return (
    <div>
      <div style={{ color: "orange" }}>작성자:{data?.fetchBoard.writer}</div>
      <div style={{ color: "yellowgreen" }}>제목:{data?.fetchBoard.title}</div>
      {typeof window !== "undefined" ? (
        <div
          style={{ color: "hotpink" }}
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(data?.fetchBoard.contents),
          }}
        ></div>
      ) : (
        <div style={{ color: "hotpink" }}></div>
      )}
    </div>
  );
}
