import React from "react";
import { Box, Button, IconButton, Tooltip, Typography } from "@mui/material";
import { theme } from "../theme";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import { Badge } from "@mui/material";
import { useCartContext } from "../Contexts/cartContext";
import { Link } from "@mui/material";
import { useWishListContext } from "../Contexts/wishListContext";
import { useUserContext } from "../Contexts/UserConstext";
import { styled } from "@mui/system";
import { Logout } from "@mui/icons-material";

const Links = () => {
  const StyledLink = styled(Link)({
    color: theme.palette.primary.main,
    "&:hover": { color: theme.palette.secondary.hover },
    display: "flex",
    textDecoration: "none",
    alignItems: "center",
    textTransform: "capitalize",
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
  return (
    <Box display="flex"sx={{ alignItems:"center",}}>
      <Tooltip title="wishlist">
        <StyledLink href="/wishList">
          <IconButton
            sx={{
              color: { xs: theme.palette.primary.main, lg: "black" },
              padding: { xs: "10px", lg: 2},
              "&:hover": { color: { xs: theme.palette.secondary.hover } },
            }}
            size="small"
          >
            <StyledBadge badgeContent={items.length}>
              {" "}
              <FavoriteBorderIcon />{" "}
            </StyledBadge>
          </IconButton>
          <Typography sx={{ display: { xs: "none", lg: "block" } }}>
            wishList
          </Typography>
        </StyledLink>
      </Tooltip>
      <Tooltip title="cart">
        <StyledLink href={!user?'/sign in':"/cart"}>
          <IconButton
            sx={{
              color: { xs: theme.palette.primary.main, lg: "black" },
              padding: { xs: "10px", sm: 2 },
              "&:hover": { color: { xs: theme.palette.secondary.hover } },
            }}
            size="small"
          >
            <StyledBadge badgeContent={allAmount}>
              {" "}
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
          <Typography sx={{ display: { xs: "none", lg: "block" } }}>
            Cart
          </Typography>
        </StyledLink>
      </Tooltip>
      <Tooltip title={user ? "Log out" : "Sign In"}>
        {user ? (
          <StyledLink
            sx={{ cursor: "pointer" }}
            onClick={() => user && logOut()}
          >
            <IconButton
              sx={{
                color: { xs: theme.palette.primary.main, lg: "black" },
                padding: { xs: "10px", sm: 2 },
                "&:hover": { color: { xs: theme.palette.secondary.hover } },
              }}
              size="small"
            >
              <Logout />
            </IconButton>

            <Typography sx={{ display: { xs: "none", lg: "block" } }}>
            Sign out
            </Typography>
          </StyledLink>
        ) : (
          <StyledLink href="/sign in">
            <IconButton
              sx={{
                color: { xs: theme.palette.primary.main, lg: "black" },
                padding: { xs: "10px", sm: 2 },
                "&:hover": { color: { xs: theme.palette.secondary.hover } },
              }}
              size="small"
            >
              <PersonIcon />
            </IconButton>

            <Typography sx={{ display: { xs: "none", lg: "block" } }}>
              Sign In
            </Typography>
          </StyledLink>
        )}
      </Tooltip>
    </Box>
  );
};

export default Links;
