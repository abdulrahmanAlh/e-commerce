import { FC } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export interface LayoutProps {}

export const Layout: FC<LayoutProps> = () => {
  return (
    <Box>
      <Header />
      <Outlet />
    </Box>
  );
};
