import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { theme } from "../theme";
import BreadCrumbs from "../components/BreadCrumbs";
import { CartProducts, CartTotals, Footer, NavBar } from "../components";
import { useCartContext } from "../Contexts/cartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MainButton from "../components/MainButton";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const CartPage = () => {
  const { items,handleCart } = useCartContext();

 
  return (
     <> <Stack
      sx={{
       
        minHeight: "100vh",
        
        position: "relative",
        background: theme.palette.background,paddingInline: { xs: 3, lg: 20 }
      }}
      
    >
     
      <Box >
        <BreadCrumbs title={`Shopping Cart`} />
        {items?.length >0 ? (
          <Stack
          
            sx={{
              flexDirection: { lg: "row", xs: "column" },
              gap: { lg: 10, xs: 1 },
            }}
          >
            <CartProducts />
            <CartTotals />
          </Stack>
        ) : (
          <Stack direction="column" textAlign="center" marginY={15} gap={4}>
            <Box>
            
              <ShoppingCartIcon sx={{fontSize:{md:'8rem',xs:'4rem'},color:'grey'}} />
            </Box>
            <Typography sx={{fontSize:{md:'2rem',xs:'1.3rem'}}}>No Product Added To Cart</Typography>
            <MainButton href="/products" title="Return To Shop" />
          </Stack>
        )} 
     
      </Box>
  <ToastContainer/>
    </Stack>
        <Footer/>
    <Outlet/></>
  );
};

export default CartPage;
