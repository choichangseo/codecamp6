import { useEffect, useRef, useState } from "react";
import LazyLoad from "react-lazy-load";

export default function LazyLoadPreLoad() {
  const divRef = useRef<HTMLDivElement>(null);
  const [imgTag, setImgTag] = useState<HTMLImageElement>();

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
  };

  return (
    <>
      <div ref={divRef}>
        <img src="" />
      </div>
      <button
        onClick={onClickPreload}
        style={{ width: "100px", height: "50px" }}
      >
        이미지 보여주기
      </button>
      <div>
        <LazyLoad height={500} offsetVertical={200}>
          <img
            style={{ height: "500px", width: "500px" }}
            src="http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg"
          />
        </LazyLoad>
        <LazyLoad height={500} offsetVertical={200}>
          <img
            style={{ height: "500px", width: "500px" }}
            src="http://apod.nasa.gov/apod/image/1502/2015_02_20_conj_bourque1024.jpg"
          />
        </LazyLoad>
        <LazyLoad height={500} offsetVertical={200}>
          <img
            style={{ height: "500px", width: "500px" }}
            src="http://apod.nasa.gov/apod/image/1502/MarsPlume_jaeschke_480.gif"
          />
        </LazyLoad>
        <LazyLoad height={500} offsetVertical={200}>
          <img
            style={{ height: "500px", width: "500px" }}
            src="http://apod.nasa.gov/apod/image/1502/ToadSky_Lane_1080_annotated.jpg"
          />
        </LazyLoad>
        <LazyLoad height={500} offsetVertical={200}>
          <img
            style={{ height: "500px", width: "500px" }}
            src="http://apod.nasa.gov/apod/image/1502/MarsPlume_jaeschke_480.gif"
          />
        </LazyLoad>
        <LazyLoad height={500} offsetVertical={200}>
          <img
            style={{ height: "500px", width: "500px" }}
            src="http://apod.nasa.gov/apod/image/1502/MarsPlume_jaeschke_480.gif"
          />
        </LazyLoad>
        <LazyLoad height={500} offsetVertical={200}>
          <img
            style={{ height: "500px", width: "500px" }}
            src="http://apod.nasa.gov/apod/image/1502/MarsPlume_jaeschke_480.gif"
          />
        </LazyLoad>
        <LazyLoad height={500} offsetVertical={200}>
          <img
            style={{ height: "500px", width: "500px" }}
            src="http://apod.nasa.gov/apod/image/1502/MarsPlume_jaeschke_480.gif"
          />
        </LazyLoad>
        <LazyLoad height={500} offsetVertical={200}>
          <img
            style={{ height: "500px", width: "500px" }}
            src="http://apod.nasa.gov/apod/image/1502/MarsPlume_jaeschke_480.gif"
          />
        </LazyLoad>
      </div>
    </>
  );
}
