import styled from "@emotion/styled";
import Slider from "react-slick";

export default function BannerLayout() {
  const Wrapper = styled.div`
    height: 400px;
  `;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const Img1 = styled.img`
    width: 100%;
    height: 300px;
  `;
  const Img2 = styled.img`
    width: 100%;
    height: 300px;
  `;

  return (
    <Wrapper>
      <div>
        <Slider {...settings}>
          <div>
            <Img1 src="/landing/hometeam.jpeg" />
          </div>
          <div>
            <Img2 src="/landing/dallashome.png" />
          </div>
        </Slider>
      </div>
    </Wrapper>
  );
}
