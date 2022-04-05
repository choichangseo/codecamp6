import * as S from "./ReplyList.styled";
import { MouseEvent, ChangeEvent } from "react";
import "antd/dist/antd.css";
import ReplyCommentItem from "./ReplyCommentItem";
import { Modal } from "antd";
import InfiniteScroll from "react-infinite-scroller";
import { IQuery } from "../../../../commons/types/generated/types";

interface ReplyListPresenterProps {
  data2?: Pick<IQuery, "fetchBoardComments">;
  onClickBoardDelete: () => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  handleCancel: any;
  handleOk: any;
  showModal: (event: MouseEvent<HTMLImageElement>) => void;
  isModalVisible: any;
  onLoadMore: () => void;
}

export default function ReplyListPresenter(props: ReplyListPresenterProps) {
  return (
    <S.Wrapper>
      <S.Scroll>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
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
      </S.Scroll>
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
