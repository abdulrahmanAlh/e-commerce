import { experimental_sx as sx } from "@mui/material/styles";

export const ratingOverride: any = {
  MuiRating: {
    styleOverrides: {
      root: sx({ color: "primary.main" }),
    },
  },
};
