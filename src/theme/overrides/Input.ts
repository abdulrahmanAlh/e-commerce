import { experimental_sx as sx } from "@mui/material/styles";

export const inputOverride = {
  MuiInputBase: {
    styleOverrides: {
      input: sx({
        p: 0,
      }),
    },
  },
};
