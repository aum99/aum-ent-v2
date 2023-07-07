import { Fragment } from "react";

import CategoryGrid from "../../components/category-grid/category-grid.components";
import CustomBaner from "../../components/custom-banner/custom-banner.components";
import SliderComponent from "../../components/slider/slider.component";
import QualityBanner from "../../components/quality-banner/quality-banner.component";

import { SliderHead } from "./home.styles";

const Home = () => {
  return (
    <Fragment>
      <CategoryGrid />
      <CustomBaner />
      <SliderHead>Trending in Bolts-Nuts and Gauges</SliderHead>
      <SliderComponent itemCategory={["bolts-nuts", "gauges"]} />
      <QualityBanner />
    </Fragment>
  );
};

export default Home;
