import React, { useState } from "react";
import { Box, Divider, Stack, Typography, Checkbox } from "@mui/material";
import { theme } from "../theme";
import CircleIcon from "@mui/icons-material/Circle";
import Rating from "@mui/material/Rating";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { format } from "../utlis/constants";
import MainButton from "./MainButton";
import { useCartContext } from "../Contexts/cartContext";
import CartControls from "./CartControls";
const ProductDescription = ({
  description,
  company,
  name,
  reviews,
  stars,
  colors,
  category,
  stock,
  price,
  id,data
}) => {
  const { items, handleCart } = useCartContext();
  const [amount, setAmount] = useState(1);
  const [color, setColor] = useState(colors[0])
  console.log(items);
  const addAmount = () => {
    setAmount((old) => {
      if (old >= stock) {
      
       return old
      }else{
          return old + 1;
      }
    
    });
  };
  const minusAmount = () => {
    setAmount((old) => {
      if (old <= 1) {
        return old;
      }
      return old - 1;
    });
  };


  return (
    <Stack
      direction="column"
      display="flex"
      flexWrap="wrap"
      sx={{ width: { lg: "43%", xs: "100%" } }}
    >
      <Stack direction="column" gap="1px">
        <Typography
        
          marginTop={4}
          sx={{ fontSize: { md: "40px", xs: "30px" },textTransform:"capitalize" }}
        >
          {name}
        </Typography>
        <Typography display="flex">
          <Rating name="read-only" value={stars} readOnly />
          <span style={{ color: theme.palette.neutral }}>
            ( {reviews} Reviews)
          </span>
        </Typography>

        <Typography
          sx={{
            color: theme.palette.secondary.main,
            fontSize: "30px",
            marginBottom: 1,
          }}
        >
          {format(price)}
        </Typography>
      </Stack>
      <Typography whiteSpace="pre-line">{description}</Typography>
      <Divider sx={{ marginBlock: "10px" }} />

      <Box display="flex" alignContent="center" gap="10px">
        <Typography>colors:</Typography>
        {colors.map((col, i) => {
          return (
            <Checkbox
            key={i}
              sx={{ color: col, padding: "0px" }}
              onClick={() => {
                setColor(col);
              }}
              icon={<CircleIcon sx={{ fontSize: "25px" }} />}
              checked={col === color ? true : false}
              checkedIcon={
                <CheckCircleIcon sx={{ color: col, opacity: ".8" }} />
              }
            />
          );
        })}
      </Box>
<Divider sx={{ marginBlock: "10px" }} />
    {  stock>0&& <Box display="flex"sx={{ alignItems:"center",}} paddingY={2}>
        <Typography>Qty:</Typography>
        <Box
          display="flex"
          marginLeft={2}
          sx={{ gap: { sm: 5, xs: 2 }, alignItems:"center", }}
          
        >
<CartControls addAmount={addAmount} minusAmount={minusAmount}  amount={amount}/>
     
          <MainButton
            functionality={() => {
              handleCart( id, color,amount,data);
            }}
            title={"Add To Cart"}
          />
        </Box>
      </Box>}
      {  stock>0 &&   <Divider sx={{ marginBottom: "10px" }} />}
      <Stack direction="column">
        <Typography
          sx={{ color: theme.palette.neutral, textTransform: "capitalize" }}
        >
          Category: <span style={{ color: "black" }}>{category}</span>
        </Typography>
        <Divider sx={{ marginBlock: "10px" }} />
        <Typography
          sx={{ color: theme.palette.neutral, textTransform: "capitalize" }}
        >
          Company: <span style={{ color: "black" }}>{company}</span>
        </Typography>
        <Divider sx={{ marginBlock: "10px" }} />
        <Typography
          sx={{ color: theme.palette.neutral, textTransform: "capitalize" }}
        >
          Available:{" "}
          <span style={{ color: "black" }}>{`${
            stock > 0 ? "IN Stock" : "Out Stock"
          }`}</span>{" "}
        </Typography>
        <Divider sx={{ marginTop: "10px" }} />
      </Stack>
    </Stack>
  );
};

export default ProductDescription;
