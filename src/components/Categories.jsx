import { Box, Divider, Link, Stack, Typography, styled } from "@mui/material";
import React, { memo, useState } from "react";
import { useProductsContext } from "../Contexts/ProductsContext";
import { useFiltersContext } from "../Contexts/filterConstext";

import { theme } from "../theme";
import {data}from '../utlis/constants'
import MainButton from "./MainButton";
const Categories = () => {
  const [show, setShow] = useState(false);


  return (
    <Stack
      direction="column"
      my={10}
      sx={{ paddingInline: { xs: 2, lg: 20 } }}
      textAlign="center"
    >
      <Typography
        variant="h5"
        color={theme.palette.secondary.main}
        paddingBottom={5}
        
      >
        Categories
         <Divider width='7%' sx={{textAlign:'center',mx:'auto',mt:'7px',borderColor:theme.palette.secondary.main,borderWidth:'2px'}}/>
      </Typography>

      <Stack
        display="grid"
        gap="10px"
        sx={{
          width: "100%",

          gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))!important",
        }}
      >
        {data.map((item, i) => {
          return (
            <Box
          
              onMouseOver={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
              key={i}
              sx={{
                position: "relative",
                height: "400px",
                "&:hover": { opacity: ".9" },
              }}
            >
              <div
                style={{
                  background: "rgb(0 0 0 / 80%)",
                  opacity: 0.8,
                  position: "absolute",
                  zIndex: "20",
                  width: "100%",
                  height: "100%",
                  borderRadius: "30px",
                }}
              ></div>
              <Box width="100%" height="100%">
                <img
              
                  width="100%"
                  height="100%"
                  src={`${item.img}`}
                  srcSet={`${item.img}`}
                  alt={item.cat}
                  style={{ borderRadius: "30px", overflow: "hidden" }}
                />
              </Box>

              <Box
                sx={{
                  top: "50%",
                  position: "absolute",
                  zIndex: "50",
                  left: "50%",
                  textAlign: "center",
                  transform: "translate(-50%,-50%)",
                }}
                display="flex"
                flexDirection="column"
              >
                <Link underline="none">
                  <Typography
                    sx={{
                      fontSize: {
                        lg: "1.7rem",
                        xs: "1rem",
                        color: theme.palette.primary.main,display:show&&'none',

                        transitionDuration: "500ms",
                        transition: "ease-in-out",
                      },
                    }}
                  >
                    {item.cat}
                  </Typography>
                </Link>
                <Box
                  sx={{
                 transform:show&& 'translateY(-10px)',
                    transition: "ease-in-out",
                    shrink: "0",

                    transitionDuration: "500ms",
                  }}
                >
                  <MainButton title="Shop Now" href="/products" />
                </Box>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default memo(Categories) ;
