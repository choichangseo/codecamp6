// 1. any 타입 (그냥 자바스크립트랑 같음)
const getAny = (args: any) =>{
    return args + 2
}
const result = getAny("철수")

// 2. unknown 타입 아무거나 들어올수 있는데 상황별로 구체적으로 맞춰줘야함
const getUnknown = (args:unknown) => {
    if(typeof args === "number"){
        return args + 2
    }else{
        return "숫자를 넣어주세요"
    }
    
}
const choi = getUnknown("창서")

if(choi == "")