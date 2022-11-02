import { FC, useEffect } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import ProductList from "sections/product/ProductList";
import ProductFilter from "sections/product/ProductFilter";
import { useDispatch } from "react-redux";
import { FetchMoreProducts, FetchProducts } from "core/redux/product";
import { useAppDispatch, useAppSelector } from "core/store";
export interface ProductListPageProps {}

const ProductListPage: FC<ProductListPageProps> = () => {
  const dispatch = useAppDispatch();
  const { products, isLoading, isLoadingMore } = useAppSelector(
    (state) => state.Product
  );

  useEffect(() => {
    dispatch(FetchProducts());
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            //If granted then you can directly call your function here
            navigator.geolocation.getCurrentPosition((location) =>
              console.log(location)
            );
          } else if (result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(
              (location) => console.log(location),
              (errors) => console.log(errors)
            );
          } else if (result.state === "denied") {
            //If denied then you have to show instructions to enable location
          }
          result.onchange = function () {
            console.log(result.state);
          };
        });
    }
  }, []);

  const handleClickMore = () => {
    dispatch(FetchMoreProducts());
  };

  return (
    <Grid container spacing={5}>
      <Grid item md={3} xs={12}>
        <ProductFilter />
      </Grid>
      <Grid item md={9} xs={12}>
        <ProductList
          onClickMore={handleClickMore}
          products={products}
          isLoadingMore={isLoadingMore}
          isLoading={isLoading}
        />
      </Grid>
    </Grid>
  );
};

export default ProductListPage;
