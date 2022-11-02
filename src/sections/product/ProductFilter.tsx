import { FC } from "react";
import {
  Box,
  Button,
  Grid,
  InputBase,
  Paper,
  Slider,
  Stack,
} from "@mui/material";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import PriceSlider from "widgets/price-slider";
import ProductCategory from "widgets/product-category";
import ProductListSummary from "./ProductListSummary";
import { Product } from "types";

export interface ProductFilterProps {}

const ProductFilter: FC<ProductFilterProps> = () => {
  return (
    <Stack spacing={5}>
      <Box
        sx={{ py: 1, px: 2, border: "1px solid #11142D", borderRadius: "4px" }}
      >
        <Stack direction={"row"} justifyContent="space-between">
          <InputBase
            id="header-search"
            placeholder="Search products"
            sx={{ width: "100%" }}
          />
          <SearchOutlined sx={{ color: "text.secondary" }} />
        </Stack>
      </Box>
      <PriceSlider />
      <ProductCategory />
      <ProductListSummary
        title="Featured Product"
        products={[
          {
            title: "Tropical Playsuit",
            category: "",
            id: 1,
            image: "https://picsum.photos/400",
            description: "",
            price: 99,
          },
        ]}
      />
    </Stack>
  );
};

export default ProductFilter;
