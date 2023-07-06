import { Fragment } from "react";

import CategoryGrid from "../../components/category-grid/category-grid.components";
import CustomBaner from "../../components/custom-banner/custom-banner.components";
import SliderComponent from "../../components/slider/slider.component";

const Home = () => {
  return (
    <Fragment>
      <CategoryGrid />
      <CustomBaner />
      <SliderComponent />
    </Fragment>
  );
};

export default Home;
