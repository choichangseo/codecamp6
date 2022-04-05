import axios from "axios";
import { useState, useEffect } from "react";

export default function OpenApiWithUseEffectPage() {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    const aaa = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogUrl(result.data.message);
    };
    aaa();
  }, []);

  // 계속 요청이 가고 setState되기 때문에 좋은 방법이 아니다. 그래서 useEffect를 사용해주면 좋다.
  //   rest Api에서 gql useQuery 처럼 사용하기 위해 React Query가 나왔다.
  // Convertio 에서 jpg -> webp , png -> webp 로 이미지 파일을 바꿔 용량을 줄일 수 있다.
  return (
    <div>
      <div>오픈API 연습!!!</div>
      <img src={dogUrl} />
    </div>
  );
}
