import styled from '@emotion/styled'


export default function AAA() {
    
    const Wrapper = styled.div`
        width: 640px;
        height: 1138px;
        border: 1px solid gray;
        margin-left: 50px;
    `
    const Top_grass = styled.div`
        display: flex;
        justify-content: flex-end;
        margin-right: 48px;
        margin-top: 36px;
    `
    const Top_menu = styled.div`
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
        margin-bottom: 60px;
        padding-right: 48px;
    `
    const My = styled.div`
        width: 71px;
        height: 43px;
        font-size: 40px;
        font-weight: bold;
        color: #1f1f1f;
        margin-left: 50px;
    `
    const Profile = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
    `
    const Profile_name = styled.div`
        font-size: 24px;
        font-weight: bold;
        margin-left: 20px;
        line-height: 60px;
    `

    const Top_menu_bar = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-bottom: 60px;
    `
    const Top_menu_font = styled.div`
         font-size: 30px;
         font-weight: bold;
         color: #cacaca;
    `
    const Body_wrapper = styled.div`
        border-top: 1px solid gray;
        border-bottom: 1px solid gray;
        padding: 29px 40.5px 0px 50px;
    `
    const Question = styled.div`
        display: flex;
        flex-direction: column;
        margin-bottom: 50px;
    `
    const Mini_font = styled.div`
        font-size: 18px;
        color: #adadad;
        margin-bottom: 14px;
    `
    const Q_body = styled.div`
        font-size: 24px;
        color: var(--greyish-brown);
    `
    const Footer_wrapper = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    `
    const Icon_wrap = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    `

    const Icon_font = styled.div`
        font-size: 16px;
        color: #ababab;
        text-align: center;
    `
    const Question_box = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    `

    return (
      <Wrapper>
        <Top_grass>
            <img src="/search_grass.png" width = '32' height='32'/>
        </Top_grass>
        <Top_menu>
            <My>마이</My>
            <Profile>
                <img src = "/profile_img.png" width = '60' height='60'/>
                <Profile_name>임정아</Profile_name>
                <img src ="/Arrow_right.png" width = '28' height='28'/>
            </Profile>
        </Top_menu>
        <Top_menu_bar>
            <Top_menu_font>공지사항</Top_menu_font>
            <Top_menu_font>이벤트</Top_menu_font>
            <Top_menu_font>FAQ</Top_menu_font>
            <Top_menu_font>Q&A</Top_menu_font>
        </Top_menu_bar>
        <Body_wrapper>
            <Question_box>
                <Question>
                    <Mini_font>Q.01</Mini_font>
                    <Q_body>리뷰 작성은 어떻게 하나요?</Q_body>
                </Question>
                <img src = "/Arrow_bottom.png" width='60' height = '60'/>
            </Question_box>
            <Question_box>
                <Question>
                    <Mini_font>Q.02</Mini_font>
                    <Q_body>리뷰 수정/삭제는 어떻게 하나요?</Q_body>
                </Question>
                <img src = "/Arrow_bottom.png" width='60' height = '60'/>
            </Question_box>
            <Question_box>
                <Question>
                    <Mini_font>Q.03</Mini_font>
                    <Q_body>아이디/비밀번호를 잊어버렸어요.</Q_body>
                </Question>
                <img src = "/Arrow_bottom.png" width='60' height = '60'/>
            </Question_box>
            <Question_box>
                <Question>
                    <Mini_font>Q.04</Mini_font>
                    <Q_body>회원탈퇴를 하고싶어요.</Q_body>
                </Question>
                <img src = "/Arrow_bottom.png" width='60' height = '60'/>
            </Question_box>
            <Question_box>
                <Question>
                    <Mini_font>Q.05</Mini_font>
                    <Q_body>출발지 설정은 어떻게 하나요?</Q_body>
                </Question>
                <img src = "/Arrow_bottom.png" width='60' height = '60'/>
            </Question_box>
            <Question_box>
                <Question>
                    <Mini_font>Q.06</Mini_font>
                    <Q_body>비밀번호를 변경하고 싶어요.</Q_body>
                </Question>
                <img src = "/Arrow_bottom.png" width='60' height = '60'/>
            </Question_box>
        </Body_wrapper>
        <Footer_wrapper>
            <Icon_wrap>
                <img scr="/home_img.png" width ='58' height='58'/>
                <Icon_font>홈</Icon_font>
            </Icon_wrap>
            <Icon_wrap>
                <img src="/map_img.png" width ='58' height='58'/>
                <Icon_font>잇츠로드</Icon_font>
            </Icon_wrap>
            <Icon_wrap>
                <img src="/love_img.png" width ='58' height='58'/>
                <Icon_font>마이찜</Icon_font>
            </Icon_wrap>
            <Icon_wrap>
                <img src="/my_img.png" width ='58' height='58'/>
                <Icon_font>마이</Icon_font>
            </Icon_wrap>
        </Footer_wrapper>
      </Wrapper>
    )
  }