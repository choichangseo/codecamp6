/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
// 1. 문자타입

import { useState } from "react";

// (): return의 타입
const getString = (arg: string): string => {
  return arg;
};
const result1 = getString("철수");

// 2. 숫자타입
//
const getNumber = (arg: number): number => {
  return arg;
};
const result2 = getNumber(123);

// 3. any 타입
// 결과가 무엇인지 예측할 수 없음
const getAny2 = (arg: any): any => {
  return arg;
};
const result3_1 = getAny2("철수");
const result3_2 = getAny2(8);
const result3_3 = getAny2(true);

// 4. any 타입 2
const getAnys = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  return [arg3, arg2, arg1];
};
const result4 = getAnys("철수", "다람쥐초등학교", 8);

// 5. generic 타입
// 밑에 3개 T은 모두 같고 뭔지는 모르겠으나 들어온 타입을 그대로 사용한다.
function getGeneric<MyType>(arg: MyType): MyType {
  return arg;
}

const aaa: string = "철수";
const bbb: number = 8;
const ccc: boolean = true;

const result4_1 = getGeneric(aaa);
const result4_2 = getGeneric(bbb);
const result4_3 = getGeneric(ccc);

//   6. generic 타입2
// prettier-ignore
// 배열이 뒤집어지거나 위치가 바뀌어도 타입을 예측할 수 있다.
function getGenerics<MyType1, MyType2, MyType3>(
  arg1: MyType1,
  arg2: MyType2,
  arg3: MyType3
): [MyType3, MyType2, MyType1] {
  return [arg3, arg2, arg1];
}

const result6 = getGenerics("철수", "다람쥐초등학교", 8);

//   7. generic - 축약1
function getGenericsT<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  return [arg3, arg2, arg1];
}

const result7 = getGenericsT("철수", "다람쥐초등학교", 8);

//   8. generic - 축약2
function getGenericsTUV<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}

const result8 = getGenericsTUV<string, string, number>(
  "철수",
  "다람쥐초등학교",
  8
);
// 9. useState generic
const [school, setSchool] = useState<string>("다람쥐초등학교");

// const apple: number = 3;
// console.log(apple);
