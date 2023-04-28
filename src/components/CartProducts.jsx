import { theme } from "../theme";
import { Box, Divider, Stack, Typography, Checkbox } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import { useCartContext } from "../Contexts/cartContext";

import CartProduct from "./CartProduct";
import MainButton from "./MainButton";

const CartProducts = () => {
  const { items ,clearAllCart} = useCartContext();

  return (
    items &&<Stack sx={{ width: { lg: "60%", xs: "100%" } }}>
      <Stack
        width="90%"
        direction="row"
        justifyContent="space-between"
        sx={{
          color: theme.palette.neutral,
          display: { lg: "flex", xs: "none" },
        }}
      >
        <Typography width="41%">Product</Typography>
        <Typography>Price</Typography>
        <Typography>Quantity</Typography>
        <Typography>Total</Typography>
      </Stack>
      <Divider sx={{ paddingBlock: "4px" }} />
      <Box sx={{ width: { lg: "106%" } ,order:{lg:'1',xs:'2'}}} display="flex" flexDirection="column">
        {items?.map((item,i) => {
          const { id } = item;
          return <CartProduct key={i} {...item} />;
        })}

      </Box>
      <Box sx={{textAlign:'right',marginTop:'10px',order:{lg:'2',xs:'1'}}}><MainButton functionality={clearAllCart} title='Clear All'/></Box>  

    </Stack>
  );
};

export default CartProducts;
