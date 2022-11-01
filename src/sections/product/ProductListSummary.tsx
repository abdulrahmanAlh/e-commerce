import { FC } from "react";
import { Typography, Grid, Stack } from "@mui/material";
import { Product } from "types";
import ProductSummary from "./ProductSummary";

export interface ProductListSummaryProps {
  title?: string;
  products: Product[];
}

const ProductListSummary: FC<ProductListSummaryProps> = ({
  title,
  products,
}) => {
  return (
    <Stack spacing={2}>
      {title && (
        <Typography fontWeight={800} variant="h6">
          {title}
        </Typography>
      )}
      <Stack spacing={1}>
        {products.map((product) => (
          <ProductSummary product={product} />
        ))}
      </Stack>
    </Stack>
  );
};

export default ProductListSummary;
