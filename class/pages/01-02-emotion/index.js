import {MyTitle,ID,IDinput,Password,Passwordinput} from '../../styles/emotion'

export default function AAA() {
    
  return (
    <MyTitle>
        로그인
        <ID>아이디</ID>
        <IDinput type = "text"/>
        <Password>비밀번호</Password>
        <Passwordinput type = "text"/>
    </MyTitle>
  )
}
