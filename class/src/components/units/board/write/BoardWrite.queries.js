import { gql } from "@apollo/client"

export const CREATE_BOARD = gql`

    mutation mymutation($writer:String, $title:String, $contents:String) {
        
        createBoard(writer: $writer, title: $title, contents: $contents){
            _id
            number
            message
        }
    }
`