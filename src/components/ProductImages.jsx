import React, { useState } from "react";
import { Box, Divider, Stack } from "@mui/material";

const ProductImages = ({ images }) => {
  let [index, setIndex] = useState(0);

  const {
    thumbnails: {
      large: { url, width, height },
    },
    filename,
  } = images[index];
  return (
    <Box
      display="flex"
      sx={{
        width: { lg: "55%", xs: "100%" },
        flexDirection: { lg: "row", xs: "column" },
        flexWrap: { md: "nowrap", xs: "wrap" },
        height: "100%",gap:'10px',
        justifyContent: { lg: "space-between" },
      }}
    >
      <Box
       
        sx={{
          width: { lg: "19%", md: "90%" },
          flexDirection: { lg: "column", xs: "row" },
        
          order: { lg: 1, md: 2, xs: 2 }, alignItems:"center",
        }}
        display="flex"
        gap
      >
        {images?.map((image, i) => {
          const { url, filename } = image;
          return (
            <Box
              key={i}
              sx={{
                width: { lg: '100%', md: "18%", xs: "19%" },
                height: "100px",minHeight:'19%',cursor:'pointer'
              }}
            >
              <img

                height="100%"
                width="100%"
                style={{borderRadius:'10px', maxWidth: "100%" }}
                alt={filename}
                onClick={() => {
                  setIndex(i);
                }}
                src={url}
              ></img>
            </Box>
          );
        })}
      </Box>
      <Box
        sx={{
          width: { md: "87%", lg: "80%", xs: "100%" },
          height: {lg: "640px",md:'560px',xs:'420px'},minHeight:'100%',
          order: { lg: "2", md: "1", xs: "1" },
        }}
      >
        <img width="100%" height="100%" style={{borderRadius:'10px',maxWidth:'100%'}} src={url} alt={filename}></img>
      </Box>
    </Box>
  );
};

export default ProductImages;
