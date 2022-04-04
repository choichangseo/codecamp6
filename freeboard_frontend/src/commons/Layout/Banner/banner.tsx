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

  return (
    <Wrapper>
      <div>
        <Slider {...settings}>
          <div></div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </Wrapper>
  );
}
