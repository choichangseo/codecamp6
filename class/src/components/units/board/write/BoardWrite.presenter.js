import {SubmitButton,WriterInput} from './BoardWrite.styled'

export default function BoardWriteUI(props){

    return(
        <div>
        {/* <div>{data}</div> */}
        작성자:<WriterInput type="text" onChange={props.onChangeWriter}/><br/>
        제목:<input type="text" onChange={props.onChangeTitle}/><br/>
        내용:<input type="text" onChange={props.onChangeContents}/><br/>
        <SubmitButton onClick={props.callGraphqlApi} isActive={props.isActive}>Graphql-Api 요청하기!!!</SubmitButton>
        </div>
    )

}


 