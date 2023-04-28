import React, { useState } from "react";
import { Divider, Stack, Typography} from "@mui/material";
import { theme } from "../theme";
import { useCartContext } from "../Contexts/cartContext";
import { format } from "../utlis/constants";
import MainButton from "./MainButton";

const CartTotals = () => {
  const { shipping, allTotal ,items} = useCartContext();
  const freeShipping=     items?.filter(item=>item.data.shipping===true)
  console.log(freeShipping);
  return (
    <Stack
      padding="30px"
      borderRadius={3}
      sx={{ background: "#d7d7d75c", width: { lg: "35%", xs: "100%" },height:'300px' }}
      direction="column"
    >
      <Typography variant="h4">Cart Total</Typography>
      <Divider sx={{ marginBlock: "10px", borderColor: "black" }} />
      <Typography display="flex" justifyContent="space-between" width="100%">
        SubTotal: <span>{format(allTotal)}</span>{" "}
      </Typography>
      <Divider sx={{ marginBlock: "10px" }} />{" "}
      <Typography display="flex" justifyContent="space-between" width="100%">
        Shipping: <span>{freeShipping?.length>0? format(0): format(shipping)}</span>{" "}
      </Typography>
      <Divider sx={{ marginBlock: "10px" }} />
  
      <Typography
        display="flex"
        paddingBottom={3}
        color={theme.palette.secondary.main}
        justifyContent="space-between"
        width="100%"
      >
        Total: <span>{format(freeShipping?.length>0?allTotal: shipping + allTotal)}</span>{" "}
      </Typography>
      
    </Stack>
  );
};

export default CartTotals;
