import { Box, IconButton, Skeleton } from "@mui/material";
import React from "react";
import MainButton from "../MainButton";
import { useProductsContext } from "../../Contexts/ProductsContext";
import { useMainContext } from "../../Contexts/mainContext";

const ProductsSkeleton = () => {

  return (
    <Box
      marginTop={3}
      display="flex"
      sx={{
        marginLeft: { lg: "30%" },
        paddingInline: { xs: 1, lg: 0, md: 10 },
      }}
      flexWrap="wrap"
    
      justifyContent="center"
      gap={3}
    >
      {[1, 2, 34, 5, 6, 6, 4, , 3, 3, , 2, 3, 1, 3, 1].map((_,i) => {
        return (
          <Box
          key={i}
            flexShrink="0"
            sx={{ width: { lg: "30%", md: "30%", sm: "40%", xs: "90%" } }}
          >
            <Box
              display="flex"
              gap={1}
              paddingBottom={1}
              borderRadius={4}
              sx={{   alignItems:"center",}}
              flexDirection="column"
              position="relative"
            
            >
              <Skeleton
                variant="rectangular"
                height="200px"
                width="100%"
                style={{ borderRadius: "6px" }}
              ></Skeleton>
              <Skeleton  height="30px"
                width="200px" variant="text"></Skeleton>
             
                
            
              <Skeleton  height="30px"
                width="200px" variant="text"></Skeleton>
             
              <Box display="flex" gap={2}> 
                {[1, 9, 91, 18.199].map((_,i) => {
                  return (
                    <Skeleton
                    key={i}
                      variant="circular"
                     width={18}
                    ></Skeleton>
                  );
                })}
              </Box>
              
              <IconButton
                sx={{ position: "absolute", right: "20px" }}
              ></IconButton>
              
            </Box>
          </Box>
        )
      })}
    </Box>
  );
};

export default ProductsSkeleton;
