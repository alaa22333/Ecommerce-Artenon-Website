import React from "react";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { Box, Stack, Typography } from "@mui/material";
import { theme } from "../theme";
const SmallCards = () => {
  const dataCards = [
    {
      icon: <RocketLaunchIcon />,
      title: "Payment & Delivery ",
      des: "Free Shipping for orders over $50",
    },
    {
      icon: <RotateLeftIcon />,
      title: "Return & Refund",
      des: "Free 100% money back guarantee",
    },
    {
      icon: <DonutLargeIcon />,
      title: "Quality Support",
      des: "Always Online feedback 24/7",
    },
  ];
  return (
    <Box
      display="flex"
      my={7}
      textAlign="center"
      justifyContent="space-between"
      alignContent="center"
  gap={2}
      sx={{
        flexDirection: { md: "row", xs: "column" },
        paddingInline: { xs: 2, lg: 20 },flexShrink:'0'
      }}
    >
      {dataCards.map((item, i) => {
        const { icon, title, des } = item;
        return (
          <Box
          key={i}
            display="flex"
            justifyContent="center"
            
            flexDirection="column"
            sx={{
                padding:{lg:10,xs:7,md:5},
              boxShadow: theme.palette.boxShadow.secondary,borderRadius:'10px',
              transition: "ease-out",
              transitionDuration: theme.palette.transitionDuration.main,
              "&:hover": { boxShadow: theme.palette.boxShadow.main }, alignItems:"center",
            }}
          
          >
            <Typography variant="h6">{icon}</Typography>
            <Typography variant="h6">{title}</Typography>
            <Typography
              variant="h8"
              sx={{ whiteSpace: "pre-wrap", lineBreak: "auto" }}
              color={theme.palette.neutral}
            >
              {des}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default SmallCards;
