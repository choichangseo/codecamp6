import axios from 'axios'
import {useState} from 'react'

export default function RestGetPage(){
    const [result,setResult] = useState("")
    
    const callRestApi = async () => {
       
        const data = await axios.get("http://koreanjson.com/posts/1")
        console.log(data)
        console.log(data.data.title)
        setResult(data.data.title)
    }

    return(
        <div>
            <div>{result}</div>
            <button onClick={callRestApi}>REST-API 요청하기!!!</button>
            
        </div>
    )

}