import { FC, useState } from "react";
import { Stack, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import LinearProgress from "@mui/material/LinearProgress";
import { Maybe } from "types";

export interface ProductCategoryProps {
  isLoading?: boolean;
  categories: string[];
  onActiceCategory?: (name: string) => void;
  onDeacticeCategory?: (name: string) => void;
}

const ProductCategory: FC<ProductCategoryProps> = ({
  categories,
  isLoading,
  onActiceCategory,
  onDeacticeCategory,
}) => {
  const [currentCategory, setCategory] = useState<Maybe<string>>(null);

  const handleActiceCategory = (name: string) => {
    if (name !== currentCategory) {
      setCategory(name);
      onActiceCategory && onActiceCategory(name);
    } else {
      setCategory(null);
      onDeacticeCategory && onDeacticeCategory(name);
    }
  };
  return (
    <Stack spacing={1}>
      <Typography fontWeight={800} variant="h6">
        Product Categories
      </Typography>
      <List>
        {!isLoading ? (
          categories.map((category) => (
            <ListItemButton
              onClick={() => handleActiceCategory(category)}
              key={category}
              sx={{
                bgcolor: currentCategory !== category ? "transparent" : "gray",
              }}
            >
              <ListItemText primary={category} />
              <ChevronRightOutlinedIcon />
            </ListItemButton>
          ))
        ) : (
          <LinearProgress />
        )}
      </List>
    </Stack>
  );
};

export default ProductCategory;
