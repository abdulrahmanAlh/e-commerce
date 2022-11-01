import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

export interface ProductCategoryProps {}

const categories = [
  "Coat and Jackets",
  "Dressses",
  "Playsuit",
  "Short",
  "Top",
  "Bottoms",
];

const ProductCategory: FC<ProductCategoryProps> = () => {
  return (
    <Stack spacing={1}>
      <Typography fontWeight={800} variant="h6">
        Product Categories
      </Typography>
      <List>
        {categories.map((category) => (
          <ListItemButton>
            <ListItemText primary={category} />
            <ChevronRightOutlinedIcon />
          </ListItemButton>
        ))}
      </List>
    </Stack>
  );
};

export default ProductCategory;
