import BoarderWriterPage from "../../../../src/components/units/board/write/BoarderWrite.components";
import { useQuery,gql } from "@apollo/client";
import { useRouter } from "next/router";

export const FETCH_BOARD = gql`
    query fetchBoard($boardId:ID!){
        fetchBoard(boardId:$boardId){
            _id
            writer
            title
            contents
            likeCount
            dislikeCount
            createdAt
        }
    }

`
export default function BoardEditPage(){
    const router = useRouter()
    const {data} = useQuery(FETCH_BOARD,{
        variables:{boardId:router.query.boardId}
    })

    return(
        <BoarderWriterPage data={data} isEdit={true}/>
    )
}