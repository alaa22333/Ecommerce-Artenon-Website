import { Box, Button, IconButton, Link, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { memo, useEffect, useState } from "react";
import NavBar from "./NavBar";

import img22 from "../assets/data/img22.jpg";
import img52 from "../assets/data/img52.jpg";
import img42 from "../assets/data/img42.jpg";
import img72 from "../assets/data/img72.jpg";

import { theme } from "../theme";
import MainButton, { ButtonStyled } from "./MainButton";
import { Navigation, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { motion } from "framer-motion";

const Hero = () => {
  const images = [img22, img42];

  return (
    <Stack height="100vh" position="relative" width="100%" direction="column">
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          left: "0",
        }}
      >
        <Swiper
          modules={[Navigation, Autoplay, A11y]}
          spaceBetween={0}
          lazyPreloadPrevNext={4}
          loop={false}
          height="inherit"
          cssMode={true}
          delay={6000}
          speed={6000}
          navigation
          style={{
            "--swiper-navigation-color": "white",
            "--swiper-navigation-size": "25px",
          }}
          effect="fade"
          slidesPerView={1}
          ination={{ clickable: true }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "0",
              width: "100%",
              height: "100%",
              background: "#00000070",
              zIndex: "1",
            }}
          ></Box>
          {images.map((item, i) => {
            return (
              <SwiperSlide
                key={i}
                style={{
                  swiperSlide: "1px 0px 11px #fffcfc",
                  position: "relative",
                }}
              >
                <img
                  height="100%"
                  width="100%"
                  loading="lazy"
                  style={{
                    objectFit: "cover",
                    top: "0",
                    backgroundAttachment: "fixed",
                    backgroundPosition: "top center",
                  }}
                  src={item}
                ></img>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Box
          sx={{
            position: "absolute",
            zIndex: "100",
            m: "auto",

            top: "55%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            color: theme.palette.primary.main,
            alignItems: "center",
          }}
          display="flex"
          justifyContent="center"
          flexDirection="column"
        >
          <Typography
            variant="h6"
            component={motion.div}
            initial={{ opacity: 0, translateY: 60 }}
            whileInView={{ opacity: 2, translateY: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            sx={{ color: "#e2e8f0" }}
          >
            Don't Miss
          </Typography>
          <Typography
            variant="h1"
            marginY={2}
            sx={{
              fontFamily: "Dynalight",
              fontWeight: "600",
              fontSize: { xs: "45px", md: "130px", sm: "60px" },
            }}
            whiteSpace="nowrap"
            component={motion.div}
            initial={{ opacity: 0, translateY: 70 }}
            whileInView={{ opacity: 2, translateY: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Mystery Deals
          </Typography>
          <Typography
            component={motion.div}
            initial={{ opacity: 0, translateY: 60 }}
            whileInView={{ opacity: 2, translateY: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            variant="h6"
            sx={{ color: "#e2e8f0" }}
            paragraph
          >
            Online Only
          </Typography>
          <Link underline="none" href="/products">
            {" "}
            <ButtonStyled
              sx={{ borderRadius: "50px" }}
              size="large"
              color="warning"
              variant="contained"
              component={motion.button}
              initial={{ opacity: 0, translateY: 60 }}
              whileInView={{ opacity: 2, translateY: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              {" "}
              Discover
            </ButtonStyled>
          </Link>{" "}
        </Box>
      </Box>
    </Stack>
  );
};

export default memo(Hero);
