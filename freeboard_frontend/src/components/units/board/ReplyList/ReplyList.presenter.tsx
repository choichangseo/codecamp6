import * as S from "./ReplyList.styled";
import { MouseEvent, ChangeEvent } from "react";
import "antd/dist/antd.css";
import ReplyCommentItem from "./ReplyCommentItem";
import { Modal } from "antd";
import InfiniteScroll from "react-infinite-scroller";

interface ReplyListPresenterProps {
  data2?: any;
  onClickBoardDelete: (event: MouseEvent<HTMLImageElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  handleCancel: any;
  handleOk: any;
  showModal: (event: MouseEvent<HTMLImageElement>) => void;
  isModalVisible: any;
}

export default function ReplyListPresenter(props: ReplyListPresenterProps) {
  return (
    <S.Wrapper>
      <div style="height:700px;overflow:auto;">
        <InfiniteScroll
          pageStart={0}
          loadMore={loadFunc}
          hasMore={true || false}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
          useWindow={false}
        >
          {props.data2?.fetchBoardComments.map((el: any) => (
            <ReplyCommentItem
              el={el}
              key={el._id}
              showModal={props.showModal}
            />
          ))}
        </InfiniteScroll>
      </div>
      {props.isModalVisible && (
        <Modal
          visible={true}
          onOk={props.onClickBoardDelete}
          onCancel={props.handleCancel}
        >
          <input type="text" onChange={props.onChangePassword} />
        </Modal>
      )}
    </S.Wrapper>
  );
}
