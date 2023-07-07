import { useSelector } from "react-redux";
import Slider from "react-slick";

import { selectCategoriesMap } from "../../store/categories/categories.selector";

import ProductCard from "../product-card/product-card.component";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SliderDiv, OuterDiv } from "./slider.styles";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundColor: "black",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundColor: "black",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

const SliderComponent = ({ itemCategory }) => {
  const category = useSelector(selectCategoriesMap);

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SampleNextArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1355,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 655,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 611,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 465,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <OuterDiv>
      <SliderDiv>
        <Slider {...settings}>
          {itemCategory.map((cat) =>
            category[cat].map((product) => (
              <div style={{ margin: "auto" }}>
                <ProductCard product={product} key={product.id}></ProductCard>
              </div>
            ))
          )}
        </Slider>
      </SliderDiv>
    </OuterDiv>
  );
};

export default SliderComponent;
