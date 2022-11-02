import { FC } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
export interface ProductCardProps {}

const ProductCard: FC<ProductCardProps> = () => {
  return (
    <Card>
      <Box sx={{ position: "relative" }}>
        <IconButton
          sx={{
            top: 10,
            right: 8,
            zIndex: 20,
            position: "absolute",
            textTransform: "uppercase",
            color: "white",
          }}
        >
          <AddShoppingCartOutlinedIcon />
        </IconButton>
        <IconButton
          sx={{
            top: 10,
            right: 40,
            zIndex: 20,
            position: "absolute",
            textTransform: "uppercase",
            color: "white",
          }}
        >
          <FavoriteBorderIcon />
        </IconButton>
      </Box>
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
