import { createTheme } from "@mui/material/styles";
import { paperOverride } from "./overrides/Paper";
import { typographyOverrides } from "./overrides/Typography";
import { dividerOverride } from "./overrides/Divider";
import { buttonOverride } from "./overrides/Button";
import { ratingOverride } from "./overrides/Rating";
import { inputOverride } from "./overrides/Input";

export const DarkTheme = createTheme({
  typography: {
    ...typographyOverrides,
  },
  palette: {
    mode: "dark",
    // primary: {
    //   main: "#1B46FF",
    // },
    // text: { primary: "#fff", secondary: "#B1B5C3" },
    // background: {
    //   // default: "linear-gradient(1.41deg, #000021 8.53%, #011094 76.62%, #000821 94.68%);",
    //   // default: "linear-gradient( #000821 1000px, #011094, #000821 90%);",
    //   default: "linear-gradient( #000021 30%, #061065 50%, #000821 62%);",
    //   // paper: "#000B56",
    //   paper: "#000735",
    //   header: "#00072E",
    //   footer: "#000736",
    // },
  },
  // mixins: { toolbar: { minHeight: 50 } },
  components: {
    // MuiCssBaseline: {
    //   styleOverrides: (theme) => ({
    //     body: { background: theme.palette.background.default },
    //     ".MuiPopover-paper": {
    //       padding: "10px !important",
    //     },
    //   }),
    // },
    // ...inputOverride,
    // ...ratingOverride,
    // ...buttonOverride,
    // ...dividerOverride,
    // ...paperOverride,
  },
  // shape: {
  //   borderRadius: 20,
  // },
});
