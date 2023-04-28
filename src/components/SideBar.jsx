import {
  Box,
  IconButton,
  Link,
  Stack,
  Tooltip,
  Typography,
  Divider,
  Button,
  Badge,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import React from "react";
import { theme } from "../theme";
import { links } from "../utlis/constants";
import { useMainContext } from "../Contexts/mainContext";
import CloseIcon from "@mui/icons-material/Close";
import Links from "./Links";
import { styled } from "@mui/system";
import { useCartContext } from "../Contexts/cartContext";
import { useWishListContext } from "../Contexts/wishListContext";
import { useUserContext } from "../Contexts/UserConstext";
import { Logout } from "@mui/icons-material";
const SideBar = () => {
  const mainLinks = [...links];
  const StyledLink = styled(Link)({
    color: theme.palette.primary.main,
    "&:hover": { color: theme.palette.secondary.hover },
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    padding: "15px 2px",
  });

  const StyledBadge = styled(Badge)({
    "& .MuiBadge-badge": {
      color: "white",
      backgroundColor: theme.palette.secondary.main,
    },
  });
  const { allAmount } = useCartContext();
  const { items } = useWishListContext();
  const { logOut, user } = useUserContext();
  const { handleOpenSB, isClose } = useMainContext();
  return (
    <Stack
      top={0}
      zIndex={100000}
      height="100vh"
      padding="20px"
      sx={{
        background: "#000000c9",
        transition: "linear",
        transitionDuration: "500ms",
        width: { xs: 280, md: 400 },
        transform: `${!isClose ? "translateX(0)" : "translateX(-100%)"}`,
      }}
      position="fixed"
      direction="column"
    >
      <Box
        position="absolute"
        color={theme.palette.secondary.main}
        right={0}
        padding={3}
      >
        <CloseIcon
          sx={{ cursor: "pointer" }}
          onClick={() => handleOpenSB(!isClose)}
        />
      </Box>
      <Box paddingTop={5}>
        {mainLinks.map((item, index) => {
          const { name, icon, url } = item;
          return (
            <div key={index}>
              {" "}
              <Tooltip title={name} >
                <Link
                  underline="none"
                  display="flex"
               
                  padding="15px 2px"
                  sx={{
                    color: { xs: theme.palette.primary.main }, alignItems:"center",
                  }}
                  key={index}
                  href={url}
                >
                  <IconButton
                    size="small"
                    sx={{
                      color: { xs: theme.palette.primary.main, md: "black" },
                      padding: { xs: "10px", sm: 2 },
                      color: { xs: theme.palette.secondary.main },
                    }}
                  >
                    {icon}
                  </IconButton>
                  <Typography>{name}</Typography>
                </Link>
              </Tooltip>
              <Divider
                variant="fullWidth"
                light={true}
                sx={{ borderColor: "white" }}
              />
            </div>
          );
        })}
      </Box>
      <Box>
        <Tooltip title="wishlist">
          <StyledLink href="/wishList">
            <IconButton
              size="small"
              sx={{
                color: { xs: theme.palette.primary.main, md: "black" },
                padding: { xs: "10px", sm: 2 },
                color: { xs: theme.palette.secondary.main },
              }}
            >
              <StyledBadge badgeContent={items.length}>
                {" "}
                <FavoriteBorderIcon />{" "}
              </StyledBadge>
            </IconButton>
            <Typography>wishList</Typography>
          </StyledLink>
        </Tooltip>
        <Divider
          variant="fullWidth"
          light={true}
          sx={{ borderColor: "white" }}
        />
        <Tooltip title="cart">
          <StyledLink href={!user ? "/sign in" : "/cart"}>
            <IconButton
              size="small"
              sx={{
                color: { xs: theme.palette.primary.main, md: "black" },
                padding: { xs: "10px", sm: 2 },
                color: { xs: theme.palette.secondary.main },
              }}
            >
              <StyledBadge badgeContent={allAmount}>
                {" "}
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
            <Typography>Cart</Typography>
          </StyledLink>
        </Tooltip>
          <Divider
            variant="fullWidth"
            light={true}
            sx={{ borderColor: "white" }}
          />
        <Tooltip title={user ? "Log out" : "Sign In"}>
          {user ? (
            <StyledLink
              sx={{ cursor: "pointer" }}
              onClick={() => user && logOut()}
            >
              <IconButton
                size="small"
                sx={{
                  color: { xs: theme.palette.primary.main, md: "black" },
                  padding: { xs: "10px", sm: 2 },
                  color: { xs: theme.palette.secondary.main },
                }}
              >
                <Logout />
              </IconButton>

              <Typography>Sign out</Typography>
            </StyledLink>
          ) : (
            <StyledLink href="/sign in">
              <IconButton
                size="small"
                sx={{
                  color: { xs: theme.palette.primary.main, md: "black" },
                  padding: { xs: "10px", sm: 2 },
                  color: { xs: theme.palette.secondary.main },
                }}
              >
                <PersonIcon />
              </IconButton>

              <Typography>Sign In</Typography>
            </StyledLink>
          )}
        </Tooltip>
      </Box>
    </Stack>
  );
};

export default SideBar;
