import { atom } from "recoil";
// 공통으로 사용해줄 변수를 선언해주고 key를 만들어주고 초기값을 useState() 하듯이 default로 설정해준다.
export const isEditState = atom({
  key: "isEditState",
  default: false,
});

export const isEdits = atom({
  key: "isEdits",
  default: false,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const userInfoState = atom({
  key: "userInfoState",
  default: {
    email: "",
    name: "",
  },
});
