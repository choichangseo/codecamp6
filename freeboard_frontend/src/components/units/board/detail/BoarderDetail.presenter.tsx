import * as S from "./BorderDetail.styled";
import { getDate } from "../../../../commons/libraries/utils";
import { MouseEvent } from "react";

interface BoarderDetailUIProps {
  data?: any;
  onClickDelete: (event: MouseEvent<HTMLDivElement>) => void;
  onClickEditPage: () => void;
  onClickListPage: () => void;
}

export default function BoarderDetailUI(props: BoarderDetailUIProps) {
  return (
    <S.Wrapper>
      <S.MainWrapper>
        <S.Address>
          <img src="/address.png" width="376" height="64" />
        </S.Address>
        <S.Header>
          <S.ProfileWrapper>
            <img src="/profile.png" width="46.67" height="46.67" />
            <S.Namewrapper>
              <S.Name>{props.data?.fetchBoard.writer}</S.Name>
              <S.Date>{getDate(props.data?.fetchBoard.createdAt)}</S.Date>
            </S.Namewrapper>
          </S.ProfileWrapper>
          <S.Headimg>
            <S.ShareImg>
              <img src="/share.png" width="26.67" height="13.33" />
            </S.ShareImg>
            <S.MapImg>
              <img src="/map.png" width="18.67" height="26.67" />
            </S.MapImg>
          </S.Headimg>
        </S.Header>
        <S.Mark></S.Mark>
        <S.Body>
          <S.Title>{props.data?.fetchBoard.title}</S.Title>
          <S.ContentsBody>
            <S.ContentsImg>
              <img src="/image.png" width="996" height="480" />
            </S.ContentsImg>
            <S.Contents>{props.data?.fetchBoard.contents}</S.Contents>
            <S.Video>
              <img src="/video.png" width="486" height="240" />
            </S.Video>
          </S.ContentsBody>
          <S.Likewrapper>
            <S.Like>
              <img src="/good.png" width="20" height="18" />
              <S.LikeCount>{props.data?.fetchBoard.likeCount}</S.LikeCount>
            </S.Like>
            <S.DisLike>
              <img src="/bad.png" width="20" height="18" />
              <S.DisCount>{props.data?.fetchBoard.dislikeCount}</S.DisCount>
            </S.DisLike>
          </S.Likewrapper>
        </S.Body>
      </S.MainWrapper>
      <S.NavButtonWrapper>
        <S.NavButton onClick={props.onClickListPage}>목록으로</S.NavButton>
        <S.NavButton onClick={props.onClickEditPage}>수정하기</S.NavButton>
        <S.NavButton onClick={props.onClickDelete}>삭제하기</S.NavButton>
      </S.NavButtonWrapper>
      <S.MarkLine></S.MarkLine>
    </S.Wrapper>
  );
}
