import styled from "@emotion/styled";
import Slider from "react-slick";

export default function BannerLayout() {
  const Wrapper = styled.div`
    height: 400px;
  `;
  // const BannerImg = styled(Slider)`
  //   width: 100%;
  //   height: 300px;
  //   background-size: cover;
  //   background-repeat: no-repeat;
  //   background-image: url("/Space.png");
  // `;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const Img1 = styled.img`
    width: 100%;
    height: 250px;
  `;
  const Img2 = styled.img`
    width: 100%;
    height: 250px;
  `;

  return (
    <Wrapper>
      <div>
        <Slider {...settings}>
          <div>
            <Img1 src="/spacemoon.jpeg" />
          </div>
          <div>
            <Img2 src="/dogstar.png" />
          </div>
        </Slider>
      </div>
    </Wrapper>
  );
}
