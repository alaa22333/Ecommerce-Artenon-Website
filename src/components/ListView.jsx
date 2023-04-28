import React, { useEffect, useState } from "react";
import { useProductsContext } from "../Contexts/ProductsContext";
import { Box, Divider, Link, Typography } from "@mui/material";
import { format, single_product_url } from "../utlis/constants";
import CircleIcon from "@mui/icons-material/Circle";
import {  FavoriteRounded } from "@mui/icons-material";
import MainButton from "./MainButton";
import { theme } from "../theme";
import { useFiltersContext } from "../Contexts/filterConstext";
import { useWishListContext } from "../Contexts/wishListContext";
import { useCartContext } from "../Contexts/cartContext";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import axios from "axios";
import ListProduct from "./ListProduct";



const ListView = () => {
  const { filteredProducts } = useFiltersContext();

  return (
    <Box
      marginTop={3}
      display="flex"
      flexDirection="column"
      sx={{
        marginLeft: { lg: "32%" },

        paddingInline: { xs: 2, md: 3 },
      }}
      flexWrap="wrap"
      gap={1}
    >
      {filteredProducts?.map((item) => {
        return <ListProduct key={item.id} {...item} />
   })}
    </Box>
  );
};

export default ListView;
