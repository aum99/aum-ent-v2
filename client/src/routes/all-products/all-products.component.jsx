import { useSelector } from "react-redux";

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/categories.selector";

import ProductCard from "../../components/product-card/product-card.component";
import CategoryButtons from "../../components/category-buttons/category-buttons.component";

import { ProductsContainer, MainContainer } from "./all-products.styles";
import { Fragment } from "react";

import Spinner from "../../components/spinner/spinner.component";

const AllProducts = () => {
  const categories = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <MainContainer>
          <CategoryButtons />
          <ProductsContainer>
            {Object.keys(categories).map((title) => {
              const products = categories[title];
              return products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ));
            })}
          </ProductsContainer>
        </MainContainer>
      )}
    </Fragment>
  );
};

export default AllProducts;
