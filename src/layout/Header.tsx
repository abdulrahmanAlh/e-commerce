import { FC, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box, Button, Drawer, IconButton, Paper, Stack } from "@mui/material";
import { Container } from "@mui/system";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import InputBase from "@mui/material/InputBase";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ProductListSummary from "sections/product/ProductListSummary";
import { useAppDispatch, useAppSelector } from "core/store";
import Badge from "@mui/material/Badge";
import { useDispatch } from "react-redux";
import { deleteCart, removeFromWishlist } from "core/redux/product";

export interface HeaderProps {}

const pages = ["Shop", "Promo", "About", "Blog"];

export const Header: FC<HeaderProps> = () => {
  const dispatch = useAppDispatch();
  const { cart, wishlist } = useAppSelector((state) => state.Product);

  const [cartDrawer, setCartDrawer] = useState<boolean>();

  const [wishlistDrawer, setWishlistDrawer] = useState<boolean>();

  const toggleCartDrawer = () => {
    setCartDrawer(!cartDrawer);
  };

  const toggleWishlistDrawer = () => {
    setWishlistDrawer(!wishlistDrawer);
  };

  const handleDeleteCart = (id: number) => {
    dispatch(deleteCart(id));
  };
  const handleDeleteFromWishlist = (id: number) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <>
      <Drawer anchor={"right"} open={cartDrawer} onClose={toggleCartDrawer}>
        <ProductListSummary
          onDelete={handleDeleteCart}
          title="Carts"
          products={cart}
        />
      </Drawer>

      <Drawer
        anchor={"right"}
        open={wishlistDrawer}
        onClose={toggleWishlistDrawer}
      >
        <ProductListSummary
          onDelete={handleDeleteFromWishlist}
          title="Wishlist"
          products={wishlist}
        />
      </Drawer>

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
              <Stack direction={"row"} spacing={1}>
                <Button
                  startIcon={<CallOutlinedIcon />}
                  sx={{ display: { xs: "none", sm: "flex" } }}
                >
                  <Box>Call Center</Box>
                </Button>
                <Button
                  startIcon={<LocalShippingOutlinedIcon />}
                  sx={{ display: { xs: "none", sm: "flex" } }}
                >
                  <Box sx={{ display: { xs: "none", sm: "block" } }}>
                    Shipping & Returns
                  </Box>
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
              <Paper
                sx={{
                  py: 1,
                  px: 3,
                  width: "100%",
                  maxWidth: 400,
                  display: { xs: "none", md: "block" },
                }}
              >
                <Stack direction={"row"} justifyContent="space-between">
                  <InputBase
                    id="header-search"
                    placeholder="Search what you need"
                    sx={{ width: "100%" }}
                  />
                  <SearchOutlined sx={{ color: "text.secondary" }} />
                </Stack>
              </Paper>

              <Stack
                direction={"row"}
                spacing={1}
                sx={{ display: { xs: "none", md: "block" } }}
              >
                <IconButton
                  size="medium"
                  edge="start"
                  sx={{ color: "text.primary" }}
                  onClick={toggleWishlistDrawer}
                >
                  <Badge badgeContent={wishlist.length} color="primary">
                    <FavoriteBorderOutlinedIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size="medium"
                  edge="start"
                  sx={{ color: "text.primary" }}
                  onClick={toggleCartDrawer}
                >
                  <Badge badgeContent={cart.length} color="primary">
                    <ShoppingCartOutlinedIcon />
                  </Badge>
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
