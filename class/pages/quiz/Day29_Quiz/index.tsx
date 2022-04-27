import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapQuiz() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=be1e111a42e092c10d6aa67ada7b9ed6&autoload=false"; // 물음표 뒤에 이어붙이는?가 쿼리스트링인데 객체로 보내고 싶을때 사용
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);
        const marker = new window.kakao.maps.Marker({
          position: map.getCenter(),
        });
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: any) {
            const latlng = mouseEvent.latLng;
            marker.setPosition(latlng);
          }
        );
        marker.setMap(map);
      });
    };
  }, []);

  return (
    <>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>;
    </>
  );
}
