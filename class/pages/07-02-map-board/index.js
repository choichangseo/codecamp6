import {useQuery,gql} from '@apollo/client'
import styled from '@emotion/styled'

const FETCH_BOARDS = gql`
    query fetchBoards{
        fetchBoards{
        number
        writer
        title
        contents
  }
}
`
const Row = styled.div`
    display: flex;
    flex-direction: row;
`
const Column = styled.div`
    width: 25%;
`

export default function MapBoardPage(){
    const {data} = useQuery(FETCH_BOARDS)



    return(
        <div>
            {data?.fetchBoards.map((el, index) =>(
                <Row key={el.number}>
                    <Column><input type="checkbox"/></Column>
                    <Column>{el.number}</Column>
                    <Column>{el.writer}</Column>
                    <Column>{el.title}</Column>
                    <Column>{index}</Column>
                </Row>
            ))}
        </div>
    
    )
}