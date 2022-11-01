import { FC } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import ProductList from "sections/product/ProductList";
import ProductFilter from "sections/product/ProductFilter";
export interface ProductListPageProps {}

const ProductListPage: FC<ProductListPageProps> = () => {
  return (
    <Grid container spacing={5}>
      <Grid item md={3} xs={12}>
        <ProductFilter />
      </Grid>
      <Grid item md={9} xs={12}>
        <ProductList />
      </Grid>
    </Grid>
  );
};

export default ProductListPage;
