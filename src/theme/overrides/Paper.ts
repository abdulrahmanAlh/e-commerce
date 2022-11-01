import { experimental_sx as sx } from "@mui/material/styles";

export const paperOverride = {
  MuiPaper: {
    styleOverrides: {
      root: sx({
        p: 4,
        boxShadow: "0px 4px 20px rgb(0 0 0 / 25%)",
      }),
    },
  },
};
