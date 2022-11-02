import { experimental_sx as sx } from "@mui/material/styles";

export const listItemButtonOverride: any = {
  MuiListItemButton: {
    styleOverrides: {
      root: sx({
        py: 0,
        px: 1,
      }),
    },
  },
};
