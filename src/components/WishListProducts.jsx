
import { theme } from "../theme";
import { Box, Divider, Stack, Typography, Checkbox } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";

import CartProduct from "./CartProduct";
import { useWishListContext } from "../Contexts/wishListContext";
import WishListProduct from "./WishListProduct";
import MainButton from "./MainButton";
import { useProductsContext } from "../Contexts/ProductsContext";

const WishListProducts = () => {
  const { items,clearWishList } = useWishListContext()
/*   useEffect(() => {
    if (id) {
      id = id.split(":").join("");
      fetchSingleProduct(id);
    }

  }, [id]); */
  return (
    items && (
      <Stack   sx={{ width: { md: "100%", xs: "100%" } }}>
        <Stack
          width="90%"
          direction="row"
          
          sx={{
            color: theme.palette.neutral,
            display: { md: "flex", xs: "none" },
          }}
        >
          <Typography width="52%">Product</Typography>
          <Typography width='14%'>Price</Typography>
          <Typography>status</Typography>
         
       
        </Stack>
        <Divider sx={{ paddingBlock: "4px" ,display:{md:'block',xs:'none'}}} />
        <Box 
        
          sx={{ width: { md: "100%" },order:{md:'1',xs:'2'} }}
          display="flex"
          flexDirection="column"
        >
          {items?.map((item,i) => {
            const { id } = item;
            return <WishListProduct key={i} data={item} {...item} />;
          })}
        </Box>
      <Box sx={{textAlign:'right',marginTop:'10px',order:{md:'2',xs:'1'}}}><MainButton  functionality={clearWishList} title='Clear All'/></Box>  
      </Stack>
    )
  );
};

export default WishListProducts;
