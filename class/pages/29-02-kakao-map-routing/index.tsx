import Link from "next/link";

export default function KakaoMapPage() {
  // const router = useRouter();
  // const onClickMoveMap = () => {
  //   router.push("/29-03-kakao-map-routed");
  // };
  // 다른페이지에서 라우팅하면 kakaoMap이 랜더링되지 않음. 클라이언트 사이드 랜더링 문제이다.
  // router를 사용하면 script에 map이 다운받아지기 전에 이동을하여 랜더링이 되지 않는것이다.
  // router.push 했던것들을 Link를 통해 태그로 활용할 수  있다.
  // apolloclient에서 head를 줘 랜더링할 수 있지만 모든 페이지에서 다운로드 받아야하기 때문에 비효율적이다.
  // Head가 전부 다운로드 될때까지 기다리는 방법
  return (
    <div>
      {/* <button onClick={onClickMoveMap}>맵으로 이동하기!!</button> */}

      {/* <a href="/29-03-kakao-map-routed">맵으로 이동하기!!!</a> */}
      {/* 자바스크립트 a태그를 활용하면 랜더링이 됨) */}

      <Link href={"/29-03-kakao-map-routed"}>
        <a>맵으로 이동하기</a>
      </Link>
      {/* Link 태그를 사용하면 클라이언트 사이드 랜더링이 가능하다. */}
    </div>
  );
}
