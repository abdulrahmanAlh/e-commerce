import { FC } from "react";
import { Typography, Stack } from "@mui/material";
import { Cart, Product } from "types";
import ProductSummary from "./ProductSummary";

export interface ProductListSummaryProps {
  title?: string;
  products: (Product | Cart)[];
}

const ProductListSummary: FC<ProductListSummaryProps> = ({
  title,
  products,
}) => {
  return (
    <Stack spacing={2} sx={{ minWidth: 200 }}>
      {title && (
        <Typography fontWeight={800} variant="h6">
          {title}
        </Typography>
      )}
      <Stack spacing={1}>
        {products.map((product) => (
          <ProductSummary key={product.id} product={product} />
        ))}
      </Stack>
    </Stack>
  );
};

export default ProductListSummary;
