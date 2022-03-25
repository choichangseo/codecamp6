import {Wrapper,MainWrapper,Header,ProfileWrapper,Headimg,ShareImg,MapImg,Namewrapper,Name
    ,Date,Mark,Body,Title,ContentsBody,ContentsImg,Contents,Video,Likewrapper
    ,Like,LikeCount,DisCount,DisLike,Address,NavButtonWrapper,NavButton, MarkLine} from "./BorderDetail.styled"
import { getDate } from "../../../../commons/libraries/utils"
import {MouseEvent} from 'react'

interface BoarderDetailUIProps{
    data? : any
    onClickDelete : (event:MouseEvent<HTMLDivElement>) => void
    onClickEditPage : ()=> void
    onClickListPage : ()=> void
}

export default function BoarderDetailUI(props:BoarderDetailUIProps){
    return(
    <Wrapper>
    <MainWrapper>
        <Address>
            <img src='/address.png' width='376' height='64'/>
        </Address>
        <Header>
            <ProfileWrapper>
                <img src="/profile.png" width= '46.67' height ='46.67'/>
                <Namewrapper>
                    <Name>{props.data?.fetchBoard.writer}</Name>
                    <Date>{getDate(props.data?.fetchBoard.createdAt)}</Date>
                </Namewrapper>
            </ProfileWrapper>
            <Headimg>
                <ShareImg>
                    <img src="/share.png" width='26.67' height='13.33'/>
                </ShareImg>
                <MapImg>
                    <img src="/map.png" width='18.67' height='26.67'/>
                </MapImg>
            </Headimg>
        </Header>
        <Mark></Mark>
        <Body>
            <Title>{props.data?.fetchBoard.title}</Title>
            <ContentsBody>
                <ContentsImg>
                    <img src="/image.png" width='996' height='480'/>
                </ContentsImg>
                <Contents>{props.data?.fetchBoard.contents}</Contents>
                <Video>
                    <img src="/video.png" width='486' height='240'/>
                </Video>
            </ContentsBody>
            <Likewrapper>
                <Like>
                    <img src="/good.png" width='20' height='18'/>
                    <LikeCount>{props.data?.fetchBoard.likeCount}</LikeCount>
                </Like>
                <DisLike>
                    <img src="/bad.png" width='20' height='18'/>
                    <DisCount>{props.data?.fetchBoard.dislikeCount}</DisCount>
                </DisLike>
            </Likewrapper>
        </Body>
    </MainWrapper>
    <NavButtonWrapper>
        <NavButton onClick={props.onClickListPage}>목록으로</NavButton>
        <NavButton onClick={props.onClickEditPage}>수정하기</NavButton>
        <NavButton id={props.data?.fetchBoard._id} onClick={props.onClickDelete}>삭제하기</NavButton>
    </NavButtonWrapper>
    <MarkLine></MarkLine>
</Wrapper>
)
}