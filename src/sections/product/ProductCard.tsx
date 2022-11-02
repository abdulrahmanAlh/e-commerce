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
import { Product } from "types";
import FavoriteIcon from "@mui/icons-material/Favorite";
export interface ProductCardProps {
  product: Product;
  onClickLike?: (product: Product) => void;
  onClickCart?: (product: Product) => void;
}

const ProductCard: FC<ProductCardProps> = ({
  product,
  onClickLike,
  onClickCart,
}) => {
  const { title, price, image, liked } = product;
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
          onClick={() => onClickCart && onClickCart(product)}
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
          onClick={() => onClickLike && onClickLike(product)}
        >
          {!liked ? <FavoriteBorderIcon /> : <FavoriteIcon />}
        </IconButton>
      </Box>
      <CardMedia component="img" height="200" image={image} />
      <CardContent>
        <Stack alignItems={"center"} spacing={1}>
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              width: "100%",
              textOverflow: "ellipsis",
              textAlign: "center",
            }}
          >
            {title}
          </Typography>
          <Rating name="read-only" value={4} readOnly />
          {/* <Typography variant="body1" sx={{ color: "text.secondary" }}>
            watchmenow
          </Typography> */}
          <Typography color="primary">${price}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
