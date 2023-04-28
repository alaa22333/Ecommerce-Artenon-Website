import React, { useState } from "react";
import { Box, Divider, Stack } from "@mui/material";
import ProductImages from "./ProductImages";
import ProductDescription from "./ProductDescription";

const ProductDetails = ({ images, data,name }) => {
  return (
    <Box
      display="flex"
      
    
      sx={{
        flexWrap: { md: "nowrap", xs: "wrap" },
         justifyContent: "space-between", alignItems:"center",
      }}
    >
      {images && <ProductImages images={images} />}
      { name&& <ProductDescription data={data} {...data} />}
    </Box>
  );
};

export default ProductDetails;
