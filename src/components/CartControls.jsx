import React, { useState } from 'react'
import { Box, Divider, Stack, Typography, Checkbox } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import { theme } from '../theme';

const CartControls = ({minusAmount,addAmount,amount}) => {
// const [amount,setAmount]=useState(1)

  return (
    <Stack direction='row' gap={1} >  <IconButton onClick={minusAmount}>
    <RemoveIcon />
  </IconButton>
  <Typography  color={theme.palette.secondary.main} variant="h4">{amount}</Typography>
  <IconButton onClick={addAmount}>
    <AddIcon />
  </IconButton></Stack>  

  )
}

export default CartControls
