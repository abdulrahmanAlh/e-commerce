import { FC } from "react";
import { Typography, Stack } from "@mui/material";
import { Cart, Product } from "types";
import ProductSummary from "./ProductSummary";

export interface ProductListSummaryProps {
  title?: string;
  products: (Product | Cart)[];
  onDelete?: (id: number) => void;
}

const ProductListSummary: FC<ProductListSummaryProps> = ({
  title,
  products,
  onDelete,
}) => {
  return (
    <Stack spacing={2} sx={{ minWidth: 200 }}>
      {title && (
        <Typography fontWeight={800} variant="h6">
          {title}
        </Typography>
      )}
      <Stack spacing={2}>
        {products.map((product) => (
          <ProductSummary
            onDelete={onDelete}
            key={product.id}
            product={product}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default ProductListSummary;
