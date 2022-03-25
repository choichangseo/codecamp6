export default function TypescriptPage(){
    //타입추론
    let aaa = "안녕하세요"
    aaa = 3

    //타입명시
    let bbb: string = "반갑습니다."

    //문자타입
    let ccc: string
    ccc = "문자타입"

    //숫자타입
    let ddd: number = 10
    ddd = "dasfdsdf"

    //불린타입
    let eee: boolean = true
    eee = false
    eee = "false" // 문자열의 경우 안에 무언가 있으면 boolean의 경우 true로 작동함

    //배열타입
    let fff: number[] = [1,2,3,4,5,"안녕하세요"]
    let ggg: string[] = ["철수","영희","훈이",13]
    let hhh: (number | string)[] = [1,2,3,4,5,"안녕하세요"]

    //객체타입(타입추론,타입명시), 중간에 객체를 빼면 오류, 객체 타입명시에서 ?를 넣으면 있어도되고 없어도 상관없음
    interface IProfile {
        name: string
        age: string | number
        school: string
        hobby?: string
    }

    let profile: IProfile = {
        name: "철수",
        age: 8,
        school: "다람쥐초등학교"
    }
    profile.age = "8살"
    profile.school = 30

    // 함수타입
    const add = (money1:number, money2:number, unit:string): string => {
        return money1 + money2 + unit
    }
    const result = add(1000,2000,"원")
    
    return(
        <div>타입스크립트 연습하기!!!</div>
    )
}