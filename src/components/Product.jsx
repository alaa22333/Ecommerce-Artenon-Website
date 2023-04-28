import { Box, IconButton, Link, Typography } from "@mui/material";
import React, { memo, useEffect, useState } from "react";
import { format, single_product_url } from "../utlis/constants";
import CircleIcon from "@mui/icons-material/Circle";
import { theme } from "../theme";
import MainButton from "./MainButton";
import { Favorite, FavoriteBorder, FavoriteRounded } from "@mui/icons-material";
import { useCartContext } from "../Contexts/cartContext";
import { useWishListContext } from "../Contexts/wishListContext";
import { motion } from "framer-motion";
import axios from "axios";
const Product = ({ image, colors, name, price, id, data: productData }) => {
  const [show, setShow] = useState(false);
  const { items, handleWishList } = useWishListContext();
  const { handleCart } = useCartContext();
  const [color, setColor] = useState(colors[0]);
  const [data, setData] = useState(null);

  const [amount, setAmount] = useState(1);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 60 }}
      whileInView={{ opacity: 2, translateY: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
      onMouseOver={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <Box
        display="flex"
        gap={1}
        paddingBottom={1}
        sx={{
          boxShadow: show
            ? theme.palette.boxShadow.main
            : theme.palette.boxShadow.secondary,
          transition: "ease-in-out",
          transitionDuration: "500ms",
          alignItems: "center",
        }}
        borderRadius={4}
        flexDirection="column"
        position="relative"
        overflow="hidden"
      >
        <Link
          href={`/products/:${id}`}
          sx={{
            height: "200px",

            "&:hover": { transform: "scale(1.1) " },
            transition: "ease-in-out",
            transitionDuration: "400ms",
          }}
        >
          <img
            src={image}
            loading="lazy"
            height="100%"
            width="400px"
            style={{ borderRadius: "6px", boxShadow: "#b5b1a5 1px 1px 7px" }}
          ></img>
        </Link>
        <Typography sx={{ textTransform: "capitalize", color: "black" }}>
          {name}
        </Typography>
        <Typography
          sx={{
            textTransform: "capitalize",
            color: theme.palette.secondary.main,
            opacity: 0.6,
          }}
        >
          {format(price)}
        </Typography>
        <Box display="flex">
          {colors.map((color, i) => {
            return (
              <CircleIcon
                key={i}
                sx={{ color: color, fontSize: "19px" }}
              ></CircleIcon>
            );
          })}
        </Box>
        <Box
          sx={{
            transform: show ? "translateY(-6%)" : "translateY(200%)",
            transition: "ease-in-out",
            transitionDuration: "500ms",
          }}
        >
          {" "}
          <MainButton
            title={"Add To Cart"}
            functionality={async () => {
              const response = await axios.get(`${single_product_url}${id}`);
              const data = response.data;
              setData(data);
              if (data?.stock > 0) {
                handleCart(id, color, amount, data);
              }
            }}
            bolean={data?.stock === 0 && true}
          />
        </Box>
        {show && (
          <IconButton
            onClick={() => handleWishList(id)}
            sx={{
              position: "absolute",
              color: "black",
              "&:hover": { color: "#d10e0ee0" },
              left: "20px",
            }}
          >
            <FavoriteRounded />
          </IconButton>
        )}
      </Box>
    </motion.div>
  );
};

export default memo(Product);
