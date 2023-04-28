import HomeIcon from "@mui/icons-material/Home";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";
import { theme } from "../theme";
import { useParams } from "react-router-dom";
const BreadCrumbs = ({ title, name }) => {
  const { id } = useParams();
  return (
    <Box
      display="flex"
      marginTop={15}
      sx={{
        paddingInline: { xs: 2, lg: 0},
        paddingY: "20px",
        flexWrap: { xs: "wrap" },
      }}
      alignContent="center"
    >
      <Link
        underline="none"
        sx={{ fontSize: { md: "2rem", xs: "1.5rem" } , alignItems:"center",}}
        display="flex"
        justifyContent="center"
       
        color="#00000096"
        gap={1}
        href={`/`}
      >
        <HomeIcon fontSize="2rem" /> Home
      </Link>
      <Typography paddingX={1} sx={{ fontSize: { md: "2rem", xs: "1.5rem" } }}>
        /
      </Typography>

      <Link
        color={id ? "#00000096" : theme.palette.secondary.main}
        sx={{ fontSize: { md: "2rem", xs: "1.5rem" } }}
        href={id ? "/products" : ""}
        underline="none"
      >
        {title}
      </Link>
      {id && (
        <Link
          underline="none"
          color={theme.palette.secondary.main}
         sx={{ textTransform:"capitalize"}}
          display="flex"

          sx={{ fontSize: { md: "2rem", xs: "1.5rem" } , alignItems:"center",}}
        >
          <Typography
            paddingX={1}
            sx={{ fontSize: { md: "2rem", xs: "1.5rem" } }}
          >
            /
          </Typography>

          {name}
        </Link>
      )}
    </Box>
  );
};

export default BreadCrumbs;
