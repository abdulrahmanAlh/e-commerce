import { experimental_sx as sx } from "@mui/material/styles";

export const dividerOverride = {
  MuiDivider: {
    styleOverrides: {
      root: sx({
        borderColor: "text.secondary",
      }),
    },
  },
};
