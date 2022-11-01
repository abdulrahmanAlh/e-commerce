import { createTheme } from "@mui/material/styles";
import { dividerOverride } from "./overrides/Divider";
import { paperOverride } from "./overrides/Paper";
import { typographyOverrides } from "./overrides/Typography";
import { buttonOverride } from "./overrides/Button";
import { ratingOverride } from "./overrides/Rating";
import { inputOverride } from "./overrides/Input";
import { experimental_sx as sx } from "@mui/material/styles";

export const LightTheme = createTheme({
  typography: {
    ...typographyOverrides,
  },
  palette: {
    mode: "light",
    primary: { main: "#F86338" },
    text: { primary: "#11142D", secondary: "#515151" },
    background: {
      default: "#E5E5E5",
      paper: "#ffffff",
      header: "#ffffff",
      footer: "#ffffff",
    },
    // background:{default}
  },
  components: {
    // MuiCssBaseline: {
    //   styleOverrides: (theme) => ({
    //     body: { background: theme.palette.background.default },
    //     ".MuiPopover-paper": {
    //       padding: "10px !important",
    //     },
    //   }),
    // },
    ...inputOverride,
    // ...ratingOverride,
    ...buttonOverride,
    // ...dividerOverride,
    // ...paperOverride,

    MuiAppBar: {
      styleOverrides: {
        root: sx({
          boxShadow: "none",
          bgcolor: "background.default",
        }),
      },
    },
  },
  shape: {
    borderRadius: 6,
  },
});
