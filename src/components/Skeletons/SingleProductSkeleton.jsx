import React from "react";
import { Box, Divider, FormControl, Skeleton, Stack } from "@mui/material";
import MainButton from "../MainButton";
import { useProductsContext } from "../../Contexts/ProductsContext";
import { useMainContext } from "../../Contexts/mainContext";

const SingleProductSkeleton = () => {
  return (
    <Box
      display="flex"
      sx={{
        flexWrap: { md: "nowrap", xs: "wrap" },
        justifyContent: "space-between", alignItems:"center",


      }}
    >
      <Box
        display="flex"
        sx={{
          width: { lg: "55%", xs: "100%" },
          flexDirection: { lg: "row", xs: "column" },
          flexWrap: { md: "nowrap", xs: "wrap" },
          height: "100%",
          gap: "10px",
          justifyContent: { lg: "space-between" },
        }}
      >
        <Box
        
          sx={{
            width: { lg: "19%", md: "90%" }, alignItems:"center",
            flexDirection: { lg: "column", xs: "row" },

            order: { lg: 1, md: 2, xs: 2 },
          }}
          display="flex"
          gap
        >
          {[1, 2, 3, 4, 5].map((_, i) => {
            return (
              <Box
                key={i}
                sx={{
                  width: { lg: "100%", md: "18%", xs: "19%" },
                  height: "100px",
                  minHeight: "19%",
                  cursor: "pointer",
                }}
              >
                <Skeleton
                  variant="rectangular"
                  height="100%"
                  width="100%"
                  sx={{ borderRadius: "10px", maxWidth: "100%" }}
                ></Skeleton>
              </Box>
            );
          })}
        </Box>
        <Box
          sx={{
            width: { md: "87%", lg: "80%", xs: "100%" },
            height: { lg: "640px", md: "560px", xs: "420px" },
            minHeight: "100%",
            order: { lg: "2", md: "1", xs: "1" },
          }}
        >
          <Skeleton
            variant="rectangular"
            width="100%"
            height="100%"
            sx={{ borderRadius: "10px", maxWidth: "100%" }}
          ></Skeleton>
        </Box>
      </Box>
      <Stack
        direction="column"
        display="flex"
        flexWrap="wrap"
        sx={{ width: { lg: "43%", xs: "100%" } }}
      >
        <Stack direction="column" gap="1px">
          <Skeleton  variant="text"  width={100} height={30} marginTop={4}></Skeleton>
          <Skeleton variant="text"  width={120} height={30}></Skeleton>

          <Skeleton
            sx={{
              marginBottom: 1,
            }}
            variant="text"
          ></Skeleton>
        </Stack>
        <Skeleton variant="text"></Skeleton>
        <Skeleton  sx={{ marginBottom: "10px" }} variant="text"></Skeleton>

        <Box display="flex" alignContent="center" gap="10px">
          <Skeleton variant="text" width={100}></Skeleton>
          <Box display="flex" gap={2}>
            {[1, 9, 91, 18.199].map((_, i) => {
              return (
                <Skeleton key={i} variant="circular" width={20}></Skeleton>
              );
            })}
          </Box>
        </Box>
        {/* <Divider sx={{ marginBlock: "10px" }} /> */}
        <Box display="flex"sx={{   alignItems:"center",}} paddingY={2}>
          <Skeleton width={100} variant="text"></Skeleton>
          <Box
            display="flex"
            marginLeft={2}
            sx={{ gap: { sm: 5, xs: 2 }, alignItems:"center", }}
          
          >
            <Skeleton variant="rectangular"   width={50} height={20}></Skeleton>
            <Skeleton width={60} height={20} variant="rectangular">
              <MainButton />
            </Skeleton>
          </Box>
        </Box>
        {/* <Divider sx={{ marginBottom: "10px" }} /> */}
        <Stack direction="column">
          <Skeleton sx={{ marginBlock: "10px" }} variant="text"></Skeleton>
          <Stack direction="column">
          <Skeleton  sx={{ marginBlock: "10px" }}variant="text"></Skeleton>
          <Stack direction="column">
          <Skeleton variant="text" sx={{ marginBottom: "10px" }}></Skeleton>
        </Stack>
      </Stack>
      </Stack>
      </Stack>
    </Box>

  );
};

export default SingleProductSkeleton;
