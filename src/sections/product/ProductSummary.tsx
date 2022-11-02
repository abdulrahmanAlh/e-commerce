import { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Cart, Product } from "types";
import Button from "@mui/material/Button";
import { useAppDispatch } from "core/store";
import { deleteCart } from "core/redux/product";
export interface ProductSummaryProps {
  product: Product | Cart;
  onDelete?: (id: number) => void;
}

const ProductSummary: FC<ProductSummaryProps> = ({
  product,
  onDelete,
  ...rest
}) => {
  const { image, title, price, quantity, id } = product as Cart;

  const handleDeleteCart = () => {
    onDelete && onDelete(id);
  };
  return (
    <Stack alignItems={"center"} direction={"row"} spacing={2} {...rest}>
      <Box
        component={"img"}
        src={image}
        sx={{ width: 80, height: 80, borderRadius: "8px" }}
      />
      <Stack spacing={1}>
        <Typography sx={{ maxWidth: "200px" }}>{title}</Typography>
        <Stack direction={"row"} justifyContent="space-between">
          <Typography color={"primary"}>${price}</Typography>
          {quantity && <Typography>quetity : {quantity}</Typography>}
        </Stack>
        {onDelete && (
          <Button onClick={handleDeleteCart} color="error" variant="contained">
            Delete
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

export default ProductSummary;
