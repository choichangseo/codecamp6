// import axios from 'axios'
import {useState} from 'react'
import {useMutation, gql} from '@apollo/client'

const CREATE_BOARD = gql`
    mutation{
        createBoard(writer:"철수",title:"제목",contents:"fff"){
            _id
            number
            message
        }
    }
`
export default function GraphqlMutationPage(){
    const [data,setData] = useState("")
    const [callApi] = useMutation(CREATE_BOARD)
    
    const callGraphqlApi = async () => {
       
        // const data = await axios.get("http://koreanjson.com/posts/1")
        const result = await callApi()
        console.log(result)
        console.log(result.data.createBoard.message)
        setData(result.data.createBoard.message)
    }

    return(
        <div>
            <div>{data}</div>
            <button onClick={callGraphqlApi}>Graphql-Api 요청하기!!!</button>
        </div>
    )

}