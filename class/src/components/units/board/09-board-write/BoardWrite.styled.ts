import styled from '@emotion/styled'
import { ISubmitButton } from './BoardWrite.types'


export const SubmitButton = styled.button`
background-color: ${(props:ISubmitButton)=> props.isActive? "yellow":"gray"};
`

export const WriterInput = styled.input`
border-color: green;
`
