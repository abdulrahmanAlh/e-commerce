import { FC } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
export interface ProductCardProps {}

const ProductCard: FC<ProductCardProps> = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image="https://picsum.photos/400"
      />
      <CardContent>
        <Stack alignItems={"center"} spacing={1}>
          <Typography variant="h6" fontWeight={700}>
            Urbano Jacket
          </Typography>
          <Rating name="read-only" value={4} readOnly />
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            watchmenow
          </Typography>
          <Typography color="primary">$99</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
