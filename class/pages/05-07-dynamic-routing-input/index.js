// import axios from 'axios'
import {useState} from 'react'
import {useMutation, gql} from '@apollo/client'
import { useRouter } from 'next/router'

const CREATE_BOARD = gql`

    mutation mymutation($writer:String, $title:String, $contents:String) {
        
        createBoard(writer: $writer, title: $title, contents: $contents){
            _id
            number
            message
        }
    }
`
export default function GraphqlMutationPage(){
    const router = useRouter()
    const [mywriter,setMyWriter] = useState("")
    const [mytitle,setMyTitle] = useState("")
    const [mycontents,setMyContents] = useState("")
    
    // const [data,setData] = useState("")
    const [callApi] = useMutation(CREATE_BOARD)
    
    const callGraphqlApi = async () => {
       // const data = await axios.get("http://koreanjson.com/posts/1")
       try {
            const result = await callApi({
                variables: {writer: mywriter ,title: mytitle ,contents: mycontents}
        })
            console.log(result)
            console.log(result.data.createBoard.message)
            alert("게시글 등록에 성공했어요")
            alert("상세 페이지로 이동해볼까요")
            router.push(`/05-08-dynamic-routed-input/${result.data.createBoard.number}`)
            // setData(result.data.createBoard.message)
       } catch(error){
            alert(error.message)
       }
       
    }

    const onChangeWriter = (event) => {
        setMyWriter(event.target.value)
    }

    const onChangeTitle = (event) => {
        setMyTitle(event.target.value)
    }

    const onChangeContents = (event) => {
        setMyContents(event.target.value)
    }
    return(
        <div>
            {/* <div>{data}</div> */}
            작성자:<input type="text" onChange={onChangeWriter}/><br/>
            제목:<input type="text" onChange={onChangeTitle}/><br/>
            내용:<input type="text" onChange={onChangeContents}/><br/>
            <button onClick={callGraphqlApi}>Graphql-Api 요청하기!!!</button>
        </div>
    )

}