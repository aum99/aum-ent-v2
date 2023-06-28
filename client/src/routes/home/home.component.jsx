import { Fragment } from "react";
import CategoryGrid from "../../components/category-grid/category-grid.components";
import CustomBaner from "../../components/custom-banner/custom-banner.components";

const Home = () => {
  return (
    <Fragment>
      <CategoryGrid />
      <CustomBaner />
    </Fragment>
  );
};

export default Home;
