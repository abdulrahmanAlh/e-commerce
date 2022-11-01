import { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";
export interface ProductListPageProps {}

const ProductListPage: FC<ProductListPageProps> = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url(images/mask-group.png)",
        width: "100%",
        height: "500px",
        bgcolor: "background.paper",
      }}
    >
      <Stack
        sx={{ mx: 5 }}
        alignItems="flex-end"
        height={"100%"}
        justifyContent="center"
      >
        <Typography sx={{ maxWidth: 500 }} variant="h2" fontWeight={700}>
          Home Shopping, Your Choice!
        </Typography>
        <Typography
          sx={{ maxWidth: 500, color: "text.secondary" }}
          variant="body1"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Stack>
    </Box>
  );
};

export default ProductListPage;
