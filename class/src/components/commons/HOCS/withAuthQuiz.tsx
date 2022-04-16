import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

// @ts-ignore

export const withAuthQuiz = (Component) => (props) => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      Modal.error({ content: "로그인 후 이용 가능합니다." });
      router.push("/quiz/Day23_Quiz_login_HOC");
    }
  }, []);

  return <Component {...props} />;
};
