import axios from "axios";
import { useState, useEffect } from "react";

export default function OpenApiQuiz() {
  const [dogImg, setDogImg] = useState("");
  useEffect(() => {
    const Dog = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogImg(result.data.message);
    };
    Dog();
  }, []);

  return (
    <div>
      <img src={dogImg} />
    </div>
  );
}
