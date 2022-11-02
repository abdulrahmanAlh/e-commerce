import { FC } from "react";
import { Button, Grid, Stack } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import ProductCard from "./ProductCard";
import { Product } from "types";
import CircularProgress from "@mui/material/CircularProgress";
import { useAppDispatch } from "core/store";
import { addCart, addToWishlist, removeFromWishlist } from "core/redux/product";
import { activeAlert } from "utils/helpers/alert";
export interface ProductListProps {
  products: Product[];
  isLoading?: boolean;
  isLoadingMore?: boolean;

  onClickMore?: VoidFunction;
}

const ProductList: FC<ProductListProps> = ({
  products,
  isLoading,
  onClickMore,
  isLoadingMore,
}) => {
  const dispatch = useAppDispatch();

  const handleClickMore = () => {
    onClickMore && onClickMore();
  };

  const handleClickCart = (product: Product) => {
    activeAlert({
      message: "Added successfully to cart",
      severity: "success",
    });
    dispatch(addCart({ ...product, quantity: 1 }));
  };

  const handleClickLike = (product: Product) => {
    if (product.liked) {
      activeAlert({
        message: "Deleted successfully from wishlist",
        severity: "success",
      });

      dispatch(removeFromWishlist(product.id));
    } else {
      activeAlert({
        message: "Added successfully to wishlist",
        severity: "success",
      });
      dispatch(addToWishlist(product));
    }
  };
  return (
    <Grid container justifyContent={"center"} spacing={2}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        products.map((product) => (
          <Grid item xs={12} sm={6} lg={4} key={product.id}>
            <ProductCard
              onClickCart={handleClickCart}
              onClickLike={handleClickLike}
              product={product}
            />
          </Grid>
        ))
      )}

      <Grid item xs={12}>
        <Stack direction="row" justifyContent={"center"}>
          <LoadingButton
            loading={isLoadingMore}
            onClick={handleClickMore}
            variant="contained"
          >
            See More
          </LoadingButton>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ProductList;
