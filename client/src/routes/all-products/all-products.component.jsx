import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </MainContainer>
      )}
    </Fragment>
  );
};

export default AllProducts;
