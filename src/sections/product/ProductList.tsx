import { FC } from "react";
import { Button, Grid, Stack } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import ProductCard from "./ProductCard";
export interface ProductListProps {}

const ProductList: FC<ProductListProps> = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} lg={4}>
        <ProductCard />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <ProductCard />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <ProductCard />
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" justifyContent={"center"}>
          <LoadingButton variant="contained">See More</LoadingButton>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ProductList;
