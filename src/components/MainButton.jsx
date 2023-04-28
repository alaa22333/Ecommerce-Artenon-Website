import { Button, Link } from "@mui/material";
import React from "react";
import { theme } from "../theme";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { styled } from "@mui/material/styles";
export const ButtonStyled = styled(Button)({
   "&:hover": {
     background: theme.palette.secondary.main,
     borderColor: theme.palette.secondary.main,
     color: "white",
   },
 
   borderColor: theme.palette.secondary.main,
 });
const MainButton = ({ title, href ,functionality,name,bolean}) => {
  return (
    <Link underline="none" href={href} >
      {title === "Add To Cart"  ? (
        <ButtonStyled disabled={bolean}   onClick={functionality} color="warning" variant="outlined" display='flex' gap='10px'sx={{ alignItems:"center",}}>
          <AddShoppingCartIcon />
          {title}
        </ButtonStyled>
      ) : (
        <ButtonStyled  variant={title==='Shop Now'?'outlined':"contained"}color="warning"  onClick={functionality} name={name} > {title}</ButtonStyled>
      )}
    </Link>
  );
};

export default MainButton;
