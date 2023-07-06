import { Fragment } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";

import { selectCategoriesMap } from "../../store/categories/categories.selector";

import ProductCard from "../product-card/product-card.component";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const SliderComponent = () => {
  const category = useSelector(selectCategoriesMap);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    swipeToSlide: true,
    slidesToScroll: 3,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SampleNextArrow />,
  };

  return (
    <Fragment>
      <h1>Trending in Bolts-Nuts and Gauges</h1>
      <Slider {...settings}>
        {category["bolts-nuts"].map((product) => (
          <ProductCard product={product} key={product.id}></ProductCard>
        ))}
        {category["gauges"].map((product) => (
          <ProductCard product={product} key={product.id}></ProductCard>
        ))}
      </Slider>
    </Fragment>
  );
};

export default SliderComponent;
