import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import { Badge } from "@mui/material";
import { theme } from "../theme";
import React from 'react'
import "../index.css";
import img4 from "../assets/data/img4.jpg";
import img3 from "../assets/data/img3.jpg";
import img6 from "../assets/data/img6.jpg";
import img7 from "../assets/data/img7.jpg";
import img8 from "../assets/data/img8.jpg";
import img9 from "../assets/data/img9.jpg";
import img10 from "../assets/data/img10.jpg";
import { NumericFormat } from "react-number-format";
import { useCartContext } from "../Contexts/cartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { lazy } from "react";
export const links = [
  { name: "Home", url: "/", icon: <HomeIcon /> },
  { name: "Products", url: "/products", icon: <StoreIcon /> },
];
export const data = [
  { img: img7, cat: "Dinning" },
  { img: img8, cat: "office" },
  { img: img9, cat: "Kitchen" },
  { img: img10, cat: "Bedroom" },

  { img: img3, cat: "Living Room" },
];
export const products_url =
  "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;

export const format = (value) => {
  return (
    <NumericFormat
      value={value}
      prefix="$"
      thousandSeparator=","
      displayType="text"
      renderText={(value) => <b>{value}</b>}
    />
  );
};
export const errorFun = (message) => {
  return toast.error(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "black",
        left: "10px",
        zIndex: 1000,
      }}
      onClick={onClick}
    />
  );
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "black",
        right: 10,
        zIndex: 1000,
      }}
      onClick={onClick}
    />
  );
}
export const HeroSettings = {
  infinite: true,
  speed: 200,
  DelayNode: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: true,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
fade:true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
};
export const saleSettings = {


  speed: 200,pauseOnHover: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
 
  initialSlide: 0,
 
  responsive: [
    {
      breakpoint: 0,
      settings: {
        slidesToShow: 2,
      
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 3,
      
      },
    },
    {
      breakpoint: 639,
      settings: {
        slidesToShow: 3,
  },
    },
    {
      breakpoint: 865,
      settings: {
        slidesToShow: 4,
     
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
  ],
};
export const trendySettings = {
  speed: 200,pauseOnHover: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
 
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 0,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
       
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 639,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 865,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};
