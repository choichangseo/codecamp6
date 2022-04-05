import BoardDetail from "../../../src/components/units/board/detail/BoarderDetail.components";
import ReplyList from "../../../src/components/units/board/ReplyList/ReplyList.component";
import ReplyWrite from "../../../src/components/units/board/ReplyWrite/ReplyWrite.component";

export default function BoardPage() {
  return (
    <>
      <BoardDetail />
      <ReplyWrite />
      <ReplyList />
    </>
  );
}
