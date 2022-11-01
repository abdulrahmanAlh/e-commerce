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
            placeholder="Search what you need"
            sx={{ width: "100%" }}
          />
          <SearchOutlined sx={{ color: "text.secondary" }} />
        </Stack>
      </Box>
    </Stack>
  );
};

export default ProductFilter;
