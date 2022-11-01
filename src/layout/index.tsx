import { FC } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Container, Stack, Typography } from "@mui/material";

export interface LayoutProps {}

export const Layout: FC<LayoutProps> = () => {
  return (
    <Box>
      <Header />
      <Box
        sx={{
          backgroundImage: "url(images/mask-group.png)",
          width: "100%",
          height: "500px",
          bgcolor: "background.paper",
        }}
      >
        <Container maxWidth={"xl"} sx={{ height: "100%" }}>
          <Stack
            alignItems="flex-end"
            justifyContent="center"
            sx={{ height: "100%" }}
          >
            <Typography sx={{ maxWidth: 500 }} variant="h2" fontWeight={700}>
              Home Shopping, Your Choice!
            </Typography>
            <Typography
              sx={{ maxWidth: 500, color: "text.secondary" }}
              variant="body1"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Stack>
        </Container>
      </Box>
      <Container maxWidth={"xl"} sx={{ my: 8 }}>
        <Outlet />
      </Container>
    </Box>
  );
};
