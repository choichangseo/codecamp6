import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../src/commons/store";

export function useMoveToPage() {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);
  const onClickMoveTo = (path) => () => {
    setVisitedPage(path);
    router.push(path);
  };

  return {
    visitedPage,
    onClickMoveTo,
  };
}
