import {Wrapper,Headers, HeadFont, LoginWrapper, FindToolWrapper, Loginmail, Loginmail2, Place, Mask, Error, LoginButton, Findfont, Markline, KakaoWrapper, Kakaologin} from '../../../styles/state-login'
import { useState } from 'react'


export default function LoginPage(){
    const [email,setEmail] = useState("")
    const [erroremail,setErroremail] = useState("이메일을 입력해주세요.")
    const [pass,setPass] = useState("")
    const [errorpass,setErrorpass] = useState("8~16자의 영문, 숫자, 특수문자만 사용 가능합니다.")

    function EmailInput(event){
        setEmail(event.target.value)
        if(email.includes("@")===false){
            setErroremail("이메일을 다시 확인해주세요.")
        }else{
            setErroremail("")
        } 
    }
    
    function PassInput(event){
        setPass(event.target.value)
        if(pass.length<8 || pass.length>16){
            setErrorpass("8~16자의 영문, 숫자, 특수문자만 사용 가능합니다.")
        }else{
            setErrorpass("")
        } 
    }

    return(
        <Wrapper style={{backgroundImage:"url(/pizza.png)"}}>
                <Headers>
                    <img src = '/map.png' width='100' height='100'/>
                    <HeadFont>잇츠로드</HeadFont>
                </Headers>
                <LoginWrapper>
                    <Loginmail>
                        <Place type='text' onChange={EmailInput}></Place>
                        <img src = '/xbutton.png' width='20' height = '20'/>
                    </Loginmail>
                    <Mask></Mask>
                    <Error>{erroremail}</Error>
                    <Loginmail2>
                        <Place type='password' onChange={PassInput}></Place>
                        <img src = '/xbutton.png' width='20' height = '20'/>
                    </Loginmail2>
                    <Mask></Mask>
                    <Error>{errorpass}</Error>
                </LoginWrapper>
                <LoginButton>로그인</LoginButton>
                <FindToolWrapper>
                    <Findfont>이메일 찾기</Findfont>
                    <Markline></Markline>
                    <Findfont>비밀번호 찾기</Findfont>
                    <Markline></Markline>
                    <Findfont>회원가입</Findfont>
                </FindToolWrapper>
            <KakaoWrapper>
                <Kakaologin>카카오톡으로 로그인</Kakaologin>
                <img src = '/kakao.png' width='20' height ='20'/>
            </KakaoWrapper>
        </Wrapper>
    )
}
