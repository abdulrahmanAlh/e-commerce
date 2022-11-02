import { experimental_sx as sx } from "@mui/material/styles";

export const sliderOverride: any = {
  MuiSlider: {
    styleOverrides: {
      root: sx({
        p: 0,
        color: "text.secondary",
      }),
      thumb: sx({
        width: 8,
        height: 8,
      }),
    },
  },
};
