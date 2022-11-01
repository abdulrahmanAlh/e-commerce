import { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, IconButton, Paper, Stack } from "@mui/material";
import { Container } from "@mui/system";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import InputBase from "@mui/material/InputBase";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
export interface HeaderProps {}
const pages = ["Shop", "Promo", "About", "Blog"];

export const Header: FC<HeaderProps> = () => {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar
          sx={{
            bgcolor: "background.paper",
          }}
        >
          <Container maxWidth={"xl"}>
            <Stack
              width={"100%"}
              direction={"row"}
              justifyContent="space-between"
              alignItems={"center"}
            >
              <Typography variant="h4" fontWeight={"700   "} color={"primary"}>
                Dealerz.
              </Typography>
              <Stack direction={"row"} spacing={2}>
                <Button startIcon={<CallOutlinedIcon />}>Call Center</Button>
                <Button startIcon={<LocalShippingOutlinedIcon />}>
                  Shipping & Returns
                </Button>
              </Stack>
            </Stack>
          </Container>
        </Toolbar>
        <Toolbar
          sx={{
            bgcolor: "background.default",
            my: 1,
          }}
        >
          <Container maxWidth={"xl"}>
            <Stack
              width={"100%"}
              direction={"row"}
              justifyContent="space-between"
              alignItems={"center"}
            >
              <Stack direction={"row"} spacing={1}>
                {pages.map((page) => (
                  <Button sx={{ width: 40 }} key={page}>
                    {page}
                  </Button>
                ))}
              </Stack>
              <Paper sx={{ py: 1, px: 3, width: "100%", maxWidth: 400 }}>
                <Stack direction={"row"} justifyContent="space-between">
                  <InputBase
                    id="header-search"
                    placeholder="Search what you need"
                    sx={{ width: "100%" }}
                  />
                  <SearchOutlined sx={{ color: "text.secondary" }} />
                </Stack>
              </Paper>

              <Stack direction={"row"} spacing={1}>
                <IconButton
                  size="medium"
                  edge="start"
                  sx={{ color: "text.primary" }}
                >
                  <FavoriteBorderOutlinedIcon />
                </IconButton>
                <IconButton
                  size="medium"
                  edge="start"
                  sx={{ color: "text.primary" }}
                >
                  <ShoppingCartOutlinedIcon />
                </IconButton>
                <IconButton
                  size="medium"
                  edge="start"
                  sx={{ color: "text.primary" }}
                >
                  <PersonOutlineOutlinedIcon />
                </IconButton>
                <IconButton
                  size="medium"
                  edge="start"
                  sx={{ color: "text.primary" }}
                >
                  <NotificationsOutlinedIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};
