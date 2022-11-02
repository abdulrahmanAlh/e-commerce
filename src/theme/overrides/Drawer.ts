import { experimental_sx as sx } from "@mui/material/styles";

export const drawerOverride: any = {
  MuiDrawer: {
    styleOverrides: {
      paper: sx({
        px: 4,
        py: 2,
      }),
    },
  },
};
