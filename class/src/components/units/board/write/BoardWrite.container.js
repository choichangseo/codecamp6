import { useMutation } from "@apollo/client"
import { useState } from "react"
import BoardWriteUI from "./BoardWrite.presenter"
import { CREATE_BOARD } from "./BoardWrite.queries"

export default function BoardWrite(){
    const [isActive,setIsActive] = useState(false)

    const [mywriter,setMyWriter] = useState("")
    const [mytitle,setMyTitle] = useState("")
    const [mycontents,setMyContents] = useState("")
    
    const [data,setData] = useState("")
    const [callApi] = useMutation(CREATE_BOARD)
    
    const callGraphqlApi = async () => {
       // const data = await axios.get("http://koreanjson.com/posts/1")
        const result = await callApi({
            variables: {writer: mywriter ,title: mytitle ,contents: mycontents}
        })
        console.log(result)
        console.log(result.data.createBoard.message)
        setData(result.data.createBoard.message)
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
       isActive={isActive}/>
    )

}


