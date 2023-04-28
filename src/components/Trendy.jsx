import {
  Box,
  Divider,
 
  Stack,
  Tab,
 
  Typography,
  styled,
} from "@mui/material";
import React, { memo, useRef, useState } from "react";
import { useProductsContext } from "../Contexts/ProductsContext";
import { theme } from "../theme";
import "../index.css";
import TabPanel from "@mui/lab/TabPanel";
import { Navigation, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import { TabContext, TabList } from "@mui/lab";
import Product from "./Product";
const Trendy = () => {
  const [value, setValue] = React.useState("office");
  let { listFun, products } = useProductsContext();
  listFun = listFun("category").filter((item) => item !== "kitchen");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const swiperRefLocal = useRef();

  const handleMouseEnter = () => {
    swiperRefLocal?.current?.swiper?.autoplay?.stop();
  };

  const handleMouseLeave = () => {
    swiperRefLocal?.current?.swiper?.autoplay?.start();
  };
  const filtered = products.filter((item) => item.category === value);

  const StyledTab = styled((props) => (
    <Tab
      {...props}
      
      tabindicatorprops={{
        children: <span className="MuiTabs-indicatorSpan" />,
      }}
    />
  ))({
    "&.Mui-selected": {
      color: "#fb923c",
      padding: "10px 12px",
      fontFamily: "open-sans",
    },
    "& .MuiTabs-indicatorSpan": {
      maxWidth: 20,
      width: "100%",
    },
  });
  return (
    <Stack
      direction="column"
      textAlign="center"
      mb={10}
      sx={{ paddingInline: { xs: 2, lg: 20 } }}
    >
      <Typography
        variant="h5"
        color={theme.palette.secondary.main}
        paddingY={5}
        sx={{
          
        }}
      >
        Trendy Products
        <Divider width='7%' sx={{textAlign:'center',mx:'auto',mt:'7px',borderColor:theme.palette.secondary.main,borderWidth:'2px'}}/>
      </Typography>
      <TabContext value={value} s>
        <Box
          justifyContent="center"
          display="flex"
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <TabList
          
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            TabIndicatorProps={{
              style: {
                backgroundColor: "#fb923c",
              },
            }}
          >
            {listFun.slice(1, 4).map((item, i) => {
              return <StyledTab value={item} label={item} key={i} />;
            })}
          </TabList>
        </Box>
        <Stack direction="row" display="flex"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Swiper
           ref={swiperRefLocal}
            modules={[Navigation, Autoplay, A11y]}
            spaceBetween={5}
         
         
            autoplay={{
              delay: 5000,
             
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
           
            speed={1000}
            slidesPerView={3}
            navigation={true}
            style={{
              "--swiper-navigation-color": "black",
              "--swiper-navigation-size": "20px",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              400: {
                slidesPerView: 1,
              },
              639: {
                slidesPerView: 2,
              },
              865: {
                slidesPerView: 2,
              },
              1000: {
                slidesPerView: 3,
              },
              1500: {
                slidesPerView: 3,
              },
              1700: {
                slidesPerView: 3,
              },
            }}
            ination={{ clickable: true }}
          >
            {filtered.map((item, i) => {
              return (
                <SwiperSlide   key={i} style={{ "swiperSlide": "1px 0px 11px #fffcfc" }}>
                  <TabPanel value={value}>
                    <Product {...item} />
                  </TabPanel>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Stack>
      </TabContext>
    </Stack>
  );
};

export default memo(Trendy);
