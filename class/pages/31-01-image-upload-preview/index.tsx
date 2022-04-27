import { useState, ChangeEvent } from "react";

export default function ImageUploadPreviewPage() {
  const [imgUrl, setImgUrl] = useState("");

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return alert("파일이 없습니다.");
    }
    // FileReader을 이용하면 파일 정보를 url로 변경해줌
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        console.log(data.target?.result);
        setImgUrl(data.target?.result);
      }
    };
    const aaa = URL.createObjectURL(file);
    setImgUrl(aaa);
    console.log(aaa);
  };

  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <img style={{ width: "100px", height: "100px" }} src={imgUrl} />
    </>
  );
}
