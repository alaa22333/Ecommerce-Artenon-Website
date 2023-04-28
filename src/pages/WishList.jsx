import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { theme } from "../theme";
import BreadCrumbs from "../components/BreadCrumbs";
import { CartProducts, CartTotals, Footer, NavBar, WishListProducts } from "../components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MainButton from "../components/MainButton";
import { useWishListContext } from "../Contexts/wishListContext";
import { ToastContainer } from "react-toastify";
import { FavoriteBorder, FavoriteOutlined } from "@mui/icons-material";
const WishList = () => {
  const {items}=useWishListContext()
  
  return (
   <Stack
    sx={{

      position: "relative",
      background: theme.palette.background,
    }}
  >
  
    <Box sx={{ paddingInline: { xs: 3, lg: 20 } }}>
      <BreadCrumbs title={`WishList`} />
      {items?.length >0 ? (
        <Stack
        
          sx={{
            minHeight:'100vh',
            flexDirection: { lg: "row", xs: "column" },
            gap: { lg: 10, xs: 1 },
          }}
        >
          <WishListProducts />
        
        </Stack>
      ) : (
        <Stack direction="column" textAlign="center" marginY={15} gap={4}>
          <Box>
          
            <FavoriteBorder sx={{fontSize:{md:'8rem',xs:'4rem'},color:'grey'}} />
          </Box>
          <Typography sx={{fontSize:{md:'2rem',xs:'1.3rem'}}}>No Product Added To Wishlist</Typography>
          <MainButton href="/products" title="Return To Shop" />
        </Stack>
      )}
   
      
    </Box>
   
      <ToastContainer/>
 <Footer/>
  </Stack>
  )
}

export default WishList
