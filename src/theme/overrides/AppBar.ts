import { experimental_sx as sx } from "@mui/material/styles";

export const appBarOverride: any = {
  MuiAppBar: {
    styleOverrides: {
      root: sx({
        boxShadow: "none",
        bgcolor: "background.default",
      }),
    },
  },
};
