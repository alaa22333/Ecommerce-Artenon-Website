import { theme } from "../theme";
import { Box, Divider, Stack, Typography, Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import CartControls from "./CartControls";
import { format } from "../utlis/constants";
import DeleteIcon from "@mui/icons-material/Delete";
import { Circle } from "@mui/icons-material";
import { useCartContext } from "../Contexts/cartContext";

const CartProduct = ({ data: { images, price, name }, amount, color, id }) => {
  const [newAmount, setNewAmount] = useState(amount);
  const { toggle, itemFilter, items } = useCartContext();
  const addAmount = () => {
    toggle("add", id);
  };
  const minusAmount = () => {
    toggle("minus", id);
  };
  return (
    <Stack
      underline="none"
      marginY={1}
      sx={{
        order: { lg: 1, xs: 2 },
        gap: { lg: 0, xs: 1.4 },
        boxShadow: { xs: theme.palette.boxShadow.secondary, lg: "none" },
        flexDirection: { lg: "row", xs: "column" },
        justifyContent: { lg: "space-between", xs: "center" },
        paddingBlock: { lg: 0, xs: 4 }, alignItems:"center"
      }}
     
      display="flex"
      width="100%"
    >
      <Box
        display="flex"
      
        width="40%"
        sx={{
          alignItems:"center",
          justifyContent: { lg: "space-between", xs: "center" },
          flexDirection: { lg: "row", xs: "column" },
        }}
        gap={4}
      >
        <Link
          underline="none"
          href={`/products/:${id}`}
          sx={{
           
            width: { lg: "200px", xs: "200px" },
            height: { lg: "100px", xs: "150px" },
          }}
        >
          <img
            width="100%"
            height="100%"
            src={images[0].url}
            alt={name}
            style={{ maxWidth: "100%" ,objectFit:'cover'}}
          ></img>
        </Link>
        <Stack direction="column"sx={{ alignItems:"center",}}>
          <Typography
           sx={{textTransform:"capitalize"}}
            whiteSpace="nowrap"
            fontSize="1rem"
            color={theme.palette.secondary.main}
          >
            {name}
          </Typography>
          <Typography display="flex" sx={{ alignItems:"center",}} gap={1}>
            color: <Circle sx={{color:color}} fontSize="10px" />{" "}
          </Typography>
        </Stack>
      </Box>
      <Typography> {format(price)}</Typography>
      <CartControls
        addAmount={addAmount}
        minusAmount={minusAmount}
        amount={amount}
      />
      <Typography
        color={theme.palette.secondary.main}
        sx={{
          marginRight: {
            lg: -4,

            xs: 0,
          },
        }}
      >
        {format(price * amount)}
      </Typography>
      <Box />
      <IconButton
        sx={{
          color: theme.palette.secondary.main,
          paddingInline: 2,
          order: { lg: 2, xs: 1 },
        }}
        onClick={() => itemFilter(id)}
      >
        <DeleteIcon />
      </IconButton>
    </Stack>
  );
};

export default CartProduct;
