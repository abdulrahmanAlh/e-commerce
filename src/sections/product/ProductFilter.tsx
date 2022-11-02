import { FC, useEffect, useState } from "react";
import { Box, InputBase, Stack } from "@mui/material";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import PriceSlider from "widgets/price-slider";
import ProductCategory from "widgets/product-category";
import ProductListSummary from "./ProductListSummary";
import { useAppDispatch, useAppSelector } from "core/store";
import { FetchCategories } from "core/redux/category";
import { FetchProducts } from "core/redux/product";
import { Maybe } from "types";

export interface ProductFilterProps {}

const ProductFilter: FC<ProductFilterProps> = () => {
  const dispatch = useAppDispatch();
  const { categories, isLoading } = useAppSelector((state) => state.Category);

  useEffect(() => {
    dispatch(FetchCategories());
  }, []);

  const handleActiveCategory = (name: string) => {
    dispatch(FetchProducts(name));
  };
  const handleDeactiveCategory = (name: string) => {
    dispatch(FetchProducts());
  };

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
      <ProductCategory
        onActiceCategory={handleActiveCategory}
        onDeacticeCategory={handleDeactiveCategory}
        categories={categories}
        isLoading={isLoading}
      />
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
