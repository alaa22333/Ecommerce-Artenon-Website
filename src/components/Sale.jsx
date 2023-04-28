import React from "react";
import img4 from "../assets/data/img4.jpg";
import img3 from "../assets/data/img3.jpg";
import img6 from "../assets/data/img6.jpg";
import img7 from "../assets/data/img7.jpg";
import img8 from "../assets/data/img8.jpg";
import img9 from "../assets/data/img9.jpg";
import { theme } from "../theme";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/autoplay";

const Sale = () => {
  const images = [img4, img3, img6, img7, img8, img9, img4];
  return (
    <Stack width="100%" direction="column" mb={17} textAlign="center" mt={15}>
      {" "}
      <Typography
        sx={{ paddingInline: { xs: 2, lg: 20 } }}
        variant="h5"
        color={theme.palette.secondary.main}
        paddingBottom={5}
      >
        Our New Arrivals
        <Divider
          width="7%"
          sx={{
            textAlign: "center",
            mx: "auto",
            mt: "7px",
            borderColor: theme.palette.secondary.main,
            borderWidth: "2px",
          }}
        />
      </Typography>
      <Box width="100%" marginY={5}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          cssMode={true}
          autoplay={{
            delay: 700,

            loop: false,
            disableOnInteraction: false,
          }}
          speed={100}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            400: {
              slidesPerView: 2,
            },
            639: {
              slidesPerView: 3,
            },
            865: {
              slidesPerView: 3,
            },
            1000: {
              slidesPerView: 4,
            },

            1500: {
              slidesPerView: 4,
            },
            1700: {
              slidesPerView: 5,
            },
          }}
          ination={{ clickable: true }}
        >
          {images.map((item, i) => {
            return (
              <SwiperSlide
                key={i}
                style={{ swiperSlide: "1px 0px 11px #fffcfc" }}
              >
                <img
                  src={item}
                  loading="lazy"
                  width="390px"
                  style={{
                    position: "relative",
                    backgroundAttachment: "fixed",
                    objectPosition: "center",
                    height: "160px",
                    objectFit: "cover",
                    position: "relative",
                  }}
                  alt="img"
                ></img>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>{" "}
    </Stack>
  );
};

export default Sale;
