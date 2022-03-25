import { ChangeEvent } from 'react'

export interface ISubmitButton {
    isActive: boolean
}

export interface IBoardWriteProps{
    isEdit: boolean
    data?: any
}

export interface IBoardWriteUIProps{
    onChangeWriter : (event: ChangeEvent<HTMLInputElement>) => void
    onChangeTitle : (event: ChangeEvent<HTMLInputElement>) => void
    onChangeContents : (event: ChangeEvent<HTMLInputElement>) => void
    callGraphqlApi : () => void
    onClickUpdate : () => void
    isActive: boolean
    isEdit: boolean
    data?: any
}