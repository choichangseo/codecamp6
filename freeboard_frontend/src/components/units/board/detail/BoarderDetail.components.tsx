
import { useQuery} from '@apollo/client'
import{useRouter} from 'next/router'
import BoarderDetailUI from './BoarderDetail.presenter'
import { FETCH_BOARD , DELETE_BOARD } from './BoarderDetail.queries'
import { useMutation } from '@apollo/client'
import { MouseEvent } from 'react'


export default function BoardDetail(){
    const [deleteBoard] = useMutation(DELETE_BOARD)
    const router = useRouter()
    console.log(router)
    const {data} = useQuery(FETCH_BOARD,{
        variables:{boardId:router.query.boardId}
    })

    const onClickDelete = (event:MouseEvent<HTMLDivElement>) =>{
        deleteBoard({
            variables:{boardId:((event.target as HTMLButtonElement).id)},
            refetchQueries:[{query:FETCH_BOARD}]
        })
        router.push('/boards')
    }
    const onClickEditPage = () => {
        
        router.push(`/boards/${router.query.boardId}/edit`)
    }
    
    const onClickListPage = () => {
        router.push(`/boards`)
    }

    return(
       <BoarderDetailUI
       data={data}
       onClickDelete={onClickDelete}
       onClickEditPage={onClickEditPage}
       onClickListPage={onClickListPage}
       />
    )

}