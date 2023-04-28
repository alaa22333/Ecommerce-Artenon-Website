import { theme } from "../theme";
import { Box, Divider, Stack, Typography, Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import CartControls from "./CartControls";
import { format, single_product_url } from "../utlis/constants";
import DeleteIcon from "@mui/icons-material/Delete";
import { Circle } from "@mui/icons-material";

import { useWishListContext } from "../Contexts/wishListContext";
import MainButton from "./MainButton";
import { useProductsContext } from "../Contexts/ProductsContext";
import { useCartContext } from "../Contexts/cartContext";
import { toast } from "react-toastify";

const WishListProduct = ({
  data: {
    description,
    company,
    name,
    reviews,
    stars,
    colors,
    images,
    category,
    stock,
    price,
    id,
  },
  data,
}) => {
  const { items, itemFilter } = useWishListContext();
  const { handleCart } = useCartContext();
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  return (
    <Stack
      underline="none"
      marginY={1}
      sx={{
        order: { md: 1, xs: 2 },
        gap: { md: 0, xs: 1.4 },
        boxShadow: { xs: theme.palette.boxShadow.secondary, md: "none" },
        flexDirection: { md: "row", xs: "column" },
        justifyContent: { md: "space-between", xs: "center" },
        paddingBlock: { md: 0, xs: 4 },
        alignItems: "center",
      }}
      display="flex"
      width="100%"
    >
      <Box
        display="flex"
        width="40%"
        sx={{
          alignItems: "center",
          justifyContent: { md: "start", xs: "center" },
          flexDirection: { md: "row", xs: "column" },
        }}
        gap={15}
      >
        <Link
          underline="none"
          href={`/products/:${id}`}
          sx={{
            width: { md: "200px", xs: "200px" },
            height: { md: "100px", xs: "150px" },
          }}
        >
          <img
            width="100%"
            height="100%"
            src={images[0].url}
            alt={name}
            style={{ maxWidth: "100%", objectFit: "cover" }}
          ></img>
        </Link>
        <Stack direction="column" sx={{ alignItems: "center" }}>
          <Typography
            whiteSpace="nowrap"
            sx={{
              fontSize: { md: "1rem", xs: "1.4rem" },
              textTransform: "capitalize",
            }}
            color={theme.palette.secondary.main}
          >
            {name}
          </Typography>
          <Typography display="flex" sx={{ alignItems: "center" }} gap={1}>
            color: <Circle fontSize="10px" sx={{ color: colors[0] }} />{" "}
          </Typography>
        </Stack>
      </Box>
      <Typography> {format(price)}</Typography>
      <Typography color={theme.palette.secondary.main}>
        {" "}
        {`${stock > 0 ? "IN Stock" : "Out Stock"}`}
      </Typography>

      <Box />
      <IconButton
        sx={{
          color: theme.palette.secondary.main,
          paddingInline: 2,
          order: { md: 2, xs: 1 },
        }}
        onClick={() => itemFilter(id)}
      >
        <DeleteIcon />
      </IconButton>
      <MainButton
        functionality={() => {
          handleCart(id, color, amount, data);

          itemFilter(id);
        }}
        title={"Add To Cart"}
        bolean={stock === 0 && true}
      />
    </Stack>
  );
};

export default WishListProduct;
