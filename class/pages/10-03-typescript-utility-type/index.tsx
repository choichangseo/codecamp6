import { type } from "os";

export default function TypescriptPage() {
  // 무언가 새로 만들때 기존에 있던것을 활용
  interface IProfile {
    name: string;
    age: number;
    school: string;
    hobby?: string;
  }

  // 1. Pick 타입
  type Mytype1 = Pick<IProfile, "name" | "age">;

  // 2. Omit 타입
  type Mytype2 = Omit<IProfile, "school">;

  // 3. Partial 타입
  type Mytype3 = Partial<IProfile>;

  // 4. Required 타입
  type Mytype4 = Required<IProfile>;

  // 5. Record 타입 합집합 타입, 교집합 타입은 & 연산자를 붙임
  type ZZZ = "aaa" | "qqq" | "rrr"; // Union 타입

  // let apple : ZZZ
  // apple = "aaa"

  type Mytype5 = Record<ZZZ, IProfile>;

  // ===== 추가(선언병합) type과 interface 차이점 ====== 타입은 같은 이름으로 선언이 불가하지만 인터페이스는 추가 가능
  interface IProfile {
    candy: number;
  }
  let profile: IProfile;
  profile = {
    candy: 3,
    age: 10,
    hobby: "책",
  };

  return <div>타입스크립트 연습하기!!!</div>;
}
