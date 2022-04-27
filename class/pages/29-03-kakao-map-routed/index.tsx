import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=be1e111a42e092c10d6aa67ada7b9ed6&autoload=false"; // 물음표 뒤에 이어붙이는?가 쿼리스트링인데 객체로 보내고 싶을때 사용
    document.head.appendChild(script);

    // 스크립트가 전부 다운로드되면 map을 실행, ㅏ
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표. // 지도를 생성할 때 필요한 기본 옵션 , docs에도 load 적혀있음 autoload-false로 지정
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
      });
    };
  }, []);

  return (
    <div>
      {/* <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=be1e111a42e092c10d6aa67ada7b9ed6"
        ></>
      </Head> */}
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </div>
  );
}

// be1e111a42e092c10d6aa67ada7b9ed6
