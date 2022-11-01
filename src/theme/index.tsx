import { ReactNode } from "react";
// @mui
import { CssBaseline } from "@mui/material";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { LightTheme } from "./light";
import { DarkTheme } from "./dark";
import { RootState } from "../core/store";
import { useSelector } from "react-redux";

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const { mode } = useSelector((state: RootState) => state.Setting);

  const isLight = mode === "light";

  const theme = isLight ? LightTheme : DarkTheme;

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
