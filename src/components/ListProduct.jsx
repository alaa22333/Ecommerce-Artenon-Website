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


AOS.refresh()
const ListProduct = ({  image, description, id, name, colors, price, category}) => {
    
    const [color, setColor] = useState(colors[0]);

      const { handleCart } = useCartContext();
      const [data, setData] = useState(null);
      const [amount, setAmount] = useState(1);
    const {handleWishList}=useWishListContext()
    useEffect(()=>{
      AOS.init({duration:1000});
    },[])
  return (
    <Box >
           
    <Box
     
      data-aos="fade-right"
 

      data-aos-easing="ease-in-sine"
      flexShrink="0"
      display="flex"
      sx={{
        flexWrap: { md: "nowrap", xs: "wrap" },
        marginRight: { lg: "3%" },   alignItems:"center",
 
      }}
      gap={2}
      paddingBlock={3}
   
    >
      <Link
        href={`/products/:${id}`}
        sx={{
          flexShrink: "0",
          borderRadius: "6px",
          height: "200px",
          flexShrink: "revert-layer",
          maxWidth: "100%",
         
          boxShadow: "#b5b1a5 1px 1px 7px",
        }}
      >
        <img
          src={image}
          style={{
            borderRadius: "6px",

            height: "100%",

            maxWidth: "100%",
            width: "500px",objectFit:'cover',
            boxShadow: "#b5b1a5 1px 1px 7px",
          }}
          alt={name}
        ></img>
      </Link>
      <Box
        display="flex"
        flexDirection="column"
        sx={{ order: { xs: 3, md: 2 } }}
      >
        <Typography
          sx={{
            "&:hover": { color: theme.palette.secondary.main },
            color: theme.palette.neutral,textTransform:"capitalize"
          }}
      
        >
          {category}
        </Typography>
        <Typography
          mb={2}
          sx={{ "&:hover": { color: theme.palette.secondary.main },textTransform:"capitalize" }}
         
        >
          {name}
        </Typography>
        <Typography whiteSpace="pre-wrap">
          {description.slice(0, 170)}...
        </Typography>
        <Box display="flex" marginTop={2} gap={1}>
          {colors.map((color,i) => {
            return (
              <CircleIcon
                key={i}
                sx={{ color: color, fontSize: "19px" }}
              ></CircleIcon>
            );
          })}
        </Box>
      </Box>
      <Box
        display="flex"
        gap={1}
        justifyContent="center"
        flexDirection="column"
        sx={{
          order: { xs: 2, md: 3 },
          padding: "10px ",
          width: { xs: "100%", md: "50%" },   alignItems:"center",
        }}
      >
        <Typography
          sx={{
            color: theme.palette.secondary.main,
          }}
        >
          {format(price)}
        </Typography>
        <Link
          underline="none"
          sx={{
            cursor:'pointer',
            "&:hover": {
              textDecoration: "underline",
              textDecorationColor: '#a30f0f',
            },
          }}
          onClick={() => handleWishList(id)}
        >
          <Typography
            gap={1}
            sx={{
              "&:hover": { color:'#a30f0f'},
              color: theme.palette.neutral,   alignItems:"center",
            }}
            display="flex"
          >
            <FavoriteRounded  sx={{
             
          
            }} />{" "}
            wishlist{" "}
          </Typography>
        </Link>
        <MainButton
      title={"Add To Cart"}
      functionality={async () => {
        const response = await axios.get(`${single_product_url}${id}`);
        const data = response.data;
        setData(data);
        if (data?.stock > 0) {
          handleCart(id, color, amount, data)}

      }}
      bolean={data?.stock===0&&true}
    />              </Box>
    </Box>
    <Divider />
  </Box>

  )
}

export default ListProduct
