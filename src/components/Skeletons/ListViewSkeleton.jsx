import React from "react";
import { Box, Divider, FormControl, Skeleton, Stack } from "@mui/material";
import MainButton from "../MainButton";
import { useProductsContext } from "../../Contexts/ProductsContext";
import { useMainContext } from "../../Contexts/mainContext";
const ListViewSkeleton = () => {
    const {isLoading}=useProductsContext()
    const {isList}=useMainContext()

        return  (<Box
      marginTop={3}
      display="flex"
      flexDirection="column"
      sx={{
        marginLeft: { lg: "32%" },

        paddingInline: { xs: 2, md: 3 },      }}
      flexWrap="wrap"
      gap={1}
    >
      {[1, 2, 3, 4, 4, 3, 4, 4, 3, 3, 2, 3].map((_,i) => {
        return (
          <Box key={i}>
           
            <Box
            
              flexShrink="0"
              display="flex"
              sx={{
                flexWrap: { md: "nowrap", xs: "wrap" },
                marginRight: { lg: "3%" }, alignItems:"center",
               
              }}
              gap={2}
              paddingBlock={3}
             
            >
              <Skeleton
                variant="rectangular"
                sx={{
                  flexShrink: "0",
                  borderRadius: "6px",
                  height: "200px",
                  flexShrink: "revert-layer",
                  maxWidth: "100%",
                  width: "40%",
                }}
              >
              </Skeleton>
              <Box
                display="flex"
                flexDirection="column"
                sx={{ order: { xs: 3, md: 2 } }}
              >
                <Skeleton variant="text"     sx={{ textTransform:"capitalize"}}></Skeleton>
                <Skeleton
                  variant="text"
                  
                 
                  sx={{ textTransform:"capitalize", mb:2}}
                >
                 
                </Skeleton>
                <Skeleton variant="text"></Skeleton>
                <Box display="flex" marginTop={2} gap={1}>
                  {[1, 9, 91, 18.199, 4, 2, 4].map((_,i) => {
                    return <Skeleton key={i} variant="circular" width={18}></Skeleton>;
                  })}
                </Box>
              </Box>
              <Box
                display="flex"
                gap={1}
                justifyContent="center"
              
                flexDirection="column"
                sx={{
                  order: { xs: 2, md: 3 },
                  padding: "10px ", alignItems:"center",
                  width: { xs: "50%", md: "30%" },
                }}
              >
                <Skeleton variant="text" width='50%'></Skeleton>

                <Skeleton
                  variant="text"
                  width='50%'
                  gap={1}
                  display="flex"
                  sx={{   alignItems:"center",}}
                ></Skeleton>
                <Skeleton width='50%' variant="rectangular">
                  <MainButton />
                </Skeleton>
              </Box>
            </Box>
            <Divider />
          </Box>
        );
      })}
    </Box>)
  
};

export default ListViewSkeleton;
