import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentPage() {
  const [amount, setAmount] = useState(100);
  const router = useRouter();
  const onChangeAmount = (event: any) => {
    setAmount(event.target.value);
    console.log(amount);
  };
  const requestPay = () => {
    const IMP = window.IMP;
    IMP.init("imp49910675");

    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: "노르웨이 회전 의자",
        amount: amount,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/quiz/Day28_Quiz/complete",
      },
      (rsp: any) => {
        if (rsp.success) {
          alert("결제성공!!");
          router.push("http://localhost:3000/quiz/Day28_Quiz/complete");
        } else {
          alert("결제에 실패하였습니다. 다시 시도해주세요.");
        }
      }
    );
  };
  return (
    <div>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      100원 : <input value={100} type="checkbox" onChange={onChangeAmount} />
      <br />
      500원 : <input value={500} type="checkbox" onChange={onChangeAmount} />
      <br />
      1000원 : <input value={1000} type="checkbox" onChange={onChangeAmount} />
      <br />
      2000원 : <input value={2000} type="checkbox" onChange={onChangeAmount} />
      <br />
      <button onClick={requestPay}>충전하기</button>
    </div>
  );
}
