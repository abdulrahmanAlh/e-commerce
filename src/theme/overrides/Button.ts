import { experimental_sx as sx } from "@mui/material/styles";

export const buttonOverride: any = {
  MuiButton: {
    styleOverrides: { root: sx({ textTransform: "inherit" }) },
    variants: [
      {
        props: { variant: "text" },
        style: sx({
          color: "text.primary",
        }),
      },
      {
        props: { variant: "outlined" },
        style: sx({
          color: "text.secondary",
          borderColor: "text.secondary",
        }),
      },
    ],
  },
};
