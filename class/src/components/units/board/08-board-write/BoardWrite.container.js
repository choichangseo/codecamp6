// 여기는 컨테이너 컴포넌트

import { useMutation } from "@apollo/client"
import { useState } from "react"
import BoardWriteUI from "./BoardWrite.presenter"
import { CREATE_BOARD , UPDATE_BOARD } from "./BoardWrite.queries"
import {useRouter} from 'next/router'

export default function BoardWrite(props){
    const router = useRouter()
    const [isActive,setIsActive] = useState(false)

    const [mywriter,setMyWriter] = useState("")
    const [mytitle,setMyTitle] = useState("")
    const [mycontents,setMyContents] = useState("")
    
    const [data,setData] = useState("")
    const [callApi] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)
    
    const onClickUpdate = async () => {
        await updateBoard({
            variables:{number: Number(router.query.number), writer: mywriter ,title: mytitle ,contents: mycontents}
        })
        alert("게시글 수정에 성공하였습니다.")
        router.push(`/08-05-boards/${router.query.number}`)
    }
    
    const callGraphqlApi = async () => {
       // const data = await axios.get("http://koreanjson.com/posts/1")
        const result = await callApi({
            variables: {writer: mywriter ,title: mytitle ,contents: mycontents}
        })
        // console.log(result)
        // console.log(result.data.createBoard.message)
        // setData(result.data.createBoard.message)
        alert("게시글 등록에 성공하였습니다.")
        router.push(`/08-05-boards/${result.data.createBoard.number}`)
        
    }
    
    const onChangeWriter = (event) => {
        setMyWriter(event.target.value)
        if(event.target.value !== "" && mytitle !== "" && mycontents !==""){
            setIsActive(true)
        }else{
            setIsActive(false)
        }    
    }
    
    const onChangeTitle = (event) => {
        setMyTitle(event.target.value)
        if(mywriter !== "" && event.target.value !== "" && mycontents !==""){
            setIsActive(true)
        }else{
            setIsActive(false)
        }    
    }
    
    const onChangeContents = (event) => {
        setMyContents(event.target.value)
        if(mywriter !== "" && mytitle !== "" && event.target.value !==""){
            setIsActive(true)
        }else{
            setIsActive(false)
        }
    }

    return(
       <BoardWriteUI 
       onChangeWriter={onChangeWriter} 
       onChangeTitle={onChangeTitle} 
       onChangeContents={onChangeContents}
       callGraphqlApi={callGraphqlApi}
       onClickUpdate={onClickUpdate}
       isActive={isActive}
       isEdit={props.isEdit}/>
    )

}
