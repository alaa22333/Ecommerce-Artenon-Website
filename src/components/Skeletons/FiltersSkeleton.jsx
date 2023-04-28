import { Box, Divider, FormControl, Skeleton, Stack } from "@mui/material";
import React from "react";
import { useMainContext } from "../../Contexts/mainContext";

const FiltersSkeleton = () => {
  const { openFilters } = useMainContext();
  return (
    <Stack
      direction="column"
      flexDirection="column"
      paddingBottom={20}
      justifyContent="center"
      display="flex"
      paddingRight={2}
      sx={{
        width: { lg: "27%" },
        paddingLeft: { xs: 4, md: 10 },

        transitionDuration: "500ms",
        transform: {
          xs: `${openFilters ? "translateX(0)" : "translateX(-100%)"}`,
          lg: "translateX(0)",
        },
      }}
      height="100%"
    
      zIndex={10}
      position="fixed"
      top={120}
    >
      <Box
        paddingTop={30}
        display="flex"
        sx={{   alignItems:"center",}}
        justifyContent="space-between"
      >
        <Skeleton variant="rectangular"></Skeleton>
        <Skeleton variant="rectangular"></Skeleton>
      </Box>
      <Box>
        <Skeleton variant="rectangular"></Skeleton>
      </Box>
      <Divider sx={{ width: "100%", paddingTop: "10px" }} />
      <Box paddingY={3}>
        <Skeleton variant="text"></Skeleton>
        <Box display="flex" sx={{   alignItems:"center",}} flexDirection="column">
          {[1, 2, 4, 5, 6, 5, 4].map((_, i) => {
            return (
              <Skeleton
                key={i}
                width="60%"
                height="60px"
                variant="text"
              ></Skeleton>
            );
          })}
        </Box>
      </Box>
      <Divider sx={{ width: "100%" }} />
      <Box paddingY={3}>
        <Skeleton variant="text"></Skeleton>
        <Skeleton variant="rectangular" width={"70%"}></Skeleton>
      </Box>

      <Box paddingY={3}>
        <Skeleton variant="text"></Skeleton>
        <Box gap={1} display="flex">
          {[1, 9, 91, 18.199, 4, 2, 4].map((_,i) => {
            return <Skeleton key={i} variant="circular" width={18}></Skeleton>;
          })}
        </Box>
      </Box>
      <Divider sx={{ width: "100%" }} />
      <Box paddingY={3}>
        <Skeleton variant="text"></Skeleton>

        <Skeleton variant="rectangular"></Skeleton>
      </Box>
      <Divider sx={{ width: "100%" }} />
      <Box paddingY={3}>
        <Skeleton variant="text"></Skeleton>
        <Skeleton variant="circular" width={30}></Skeleton>
      </Box>
    </Stack>
  );
};

export default FiltersSkeleton;
