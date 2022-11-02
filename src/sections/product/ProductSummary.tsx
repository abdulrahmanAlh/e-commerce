import { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Product } from "types";
export interface ProductSummaryProps {
  product: Product;
}

const ProductSummary: FC<ProductSummaryProps> = ({ product, ...rest }) => {
  const { image, title, price } = product;
  return (
    <Stack alignItems={"center"} direction={"row"} spacing={2} {...rest}>
      <Box
        component={"img"}
        src={image}
        sx={{ width: 80, height: 80, borderRadius: "8px" }}
      />
      <Stack spacing={1}>
        <Typography sx={{ maxWidth: "200px" }}>{title}</Typography>
        <Typography color={"primary"}>${price}</Typography>
      </Stack>
    </Stack>
  );
};

export default ProductSummary;
