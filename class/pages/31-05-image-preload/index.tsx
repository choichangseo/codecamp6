import { useEffect, useRef, useState } from "react";
export default function ImagePreLoadPage() {
  const [imgTag, setImgTag] = useState<HTMLImageElement>();
  const divRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://mblogthumb-phinf.pstatic.net/MjAxNzA5MDNfNCAg/MDAxNTA0NDA5NTc1MTEz.JdFKj8AcGnzGZ5gUdOqyWw90W89WIl5ixFm8QFrKhZMg.Z2kA3is_n4dy6kjryqvmggWmTW7QT3qfzHUYN2h92Gcg.JPEG.harold_icon/image_898162651504409520963.jpg?type=w800";
    img.onload = () => {
      setImgTag(img);
    };
  }, []);

  const onClickPreload = () => {
    if (imgTag) divRef.current?.appendChild(imgTag);
    // document.getElementById("aaa")?.appendChild(imgTag)
  };

  const onClickLoad = () => {
    setIsLoaded(true);
  };

  return (
    <>
      <div ref={divRef}>
        <img src="" />
      </div>
      <button onClick={onClickPreload}>이미지 프리로드</button>
      ====================================
      {isLoaded && (
        <img src="https://mblogthumb-phinf.pstatic.net/MjAxNzA5MDNfNCAg/MDAxNTA0NDA5NTc1MTEz.JdFKj8AcGnzGZ5gUdOqyWw90W89WIl5ixFm8QFrKhZMg.Z2kA3is_n4dy6kjryqvmggWmTW7QT3qfzHUYN2h92Gcg.JPEG.harold_icon/image_898162651504409520963.jpg?type=w800" />
      )}
      <button onClick={onClickLoad}>이미지 일반로드</button>
    </>
  );
}
