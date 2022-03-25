import { MouseEvent } from "react";

export interface ListPresenterProps {
    data? : any
    onClickMoveBoarderWrite: ()=> void
    onClickMoveBoardTitle: (event: MouseEvent<HTMLDivElement>) => void
}