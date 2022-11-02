import { createTheme } from "@mui/material/styles";
import { typographyOverrides } from "./overrides/Typography";
import { buttonOverride } from "./overrides/Button";
import { ratingOverride } from "./overrides/Rating";
import { inputOverride } from "./overrides/Input";
import { experimental_sx as sx } from "@mui/material/styles";
import { appBarOverride } from "./overrides/AppBar";
import { sliderOverride } from "./overrides/Slider";
import { listItemButtonOverride } from "./overrides/ListItemButton";
import { drawerOverride } from "./overrides/Drawer";

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
    },
  },
  components: {
    ...inputOverride,
    ...ratingOverride,
    ...buttonOverride,
    ...appBarOverride,
    ...sliderOverride,
    ...listItemButtonOverride,
    ...drawerOverride,
  },
  shape: {
    borderRadius: 6,
  },
});
