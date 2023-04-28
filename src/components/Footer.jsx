import {
  Box,
  Button,
  Divider,
  Link,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import img72 from "../assets/data/img72.jpg";
import { Facebook, GitHub, Google, Instagram } from "@mui/icons-material";
import { theme } from "../theme";
import { useLocation } from "react-router-dom";
const Footer = () => {
  const location = useLocation();
  const StyledLink = styled(Link)({
    color: theme.palette.primary.main,
    "&:hover": { color: theme.palette.secondary.main },
  });
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      mx="auto"
      sx={{
        backgroundImage:
          " linear-gradient(to top,white,#757171bd 0%, #ffb583cf 100%)",
        width: "100%",
      }}
      color={theme.palette.secondary.main}
      position="relative
    "
      mt={7}
      borderRadius={2}
    >
      {/* image */}
      {location.pathname === "/" && (
        <Box position="relative" width="100%" height="350px">
          <img
            loading="lazy"
            height="100%"
            width="100%"
            style={{ borderRadius: "20px", objectFit: "cover" }}
            src={img72}
          ></img>
          <Box
            position="absolute"
            height="100%"
            width="100%"
            top={0}
            sx={{
              backgroundImage:
                "linear-gradient(to top,#000000d1 0%, #7d39246e 100%)",
            }}
          >
            <Stack
              position="absolute "
              top="50%"
              left="50%"
              padding={0.3}
              flex={1}
              paddingInline={1}
              sx={{
                width: { md: "50%", xs: "96%" },
                transform: "translate(-50% ,-50%)",
                alignItems: "center",
              }}
              justifyContent="center"
              direction="column"
            >
              <Typography fontSize="1rem" mb="10px">
                Join Our NewSletter
              </Typography>
              <Box
                width="100%"
                height="fit-content"
                position="relative"
                component="form"
                action="https://formspree.io/f/xoqzplqk"
                method="POST"
              >
                <Box
                  component="input"
                  width="100%"
                  sx={{
                    padding: "13px 8px",
                    borderRadius: "70px",
                    outline: "0",
                    borderColor: theme.palette.secondary.main,
                    "::placeholder": { color: theme.palette.secondary.main },
                  }}
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                />
                <Button
                  type="submit"
                  color="warning"
                  variant="contained"
                  size="small"
                  sx={{
                    textTransform: "capitalize",
                    position: "absolute",
                    height: "100%",
                    top: "0",
                    right: "0",
                    borderRadius: "50px",
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Stack>
          </Box>
        </Box>
      )}
      {/* details */}

      {/* more  details*/}
      <Box
        padding="1rem"
        display="flex"
        height="fit-content"
        width="100%"
        sx={{
          gap: { lg: 2, xs: 1 },
          flexDirection: { lg: "row", xs: "column" },
          display: "flex",
          flexWrap: { lg: "nowrap", xs: "wrap" },
        }}
        justifyContent="center"
      >
        <Box
          display="flex"
          height="fit-content"
          sx={{
            justifyContent: { md: "space-evenly", xs: "space-between" },
            width: {
              lg: "60%",
              xs: "100%",
              flexWrap: "wrap",
              flexDirection: { sm: "row", xs: "column" },
            },
          }}
        >
          <Stack direction="column" padding={0.3} sx={{ width: { lg: "25%" } }}>
            <Typography fontSize="1rem" mb="10px">
              Products
            </Typography>
            <StyledLink
              sx={{
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                },
              }}
              fontSize=".8rem"
              color={theme.palette.primary.main}
            >
              Trendy{" "}
            </StyledLink>
            <StyledLink
              paddingTop={1}
              sx={{
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                },
              }}
              fontSize=".8rem"
              color={theme.palette.primary.main}
            >
              our Shop
            </StyledLink>
          </Stack>
          <Stack direction="column" padding={2} sx={{ width: { lg: "25%" } }}>
            <Typography fontSize="1rem" mb="10px">
              About
            </Typography>
            <StyledLink
              sx={{
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                },
              }}
              fontSize=".8rem"
              color={theme.palette.primary.main}
            >
              Our Projects{" "}
            </StyledLink>
            <StyledLink
              paddingTop={1}
              sx={{
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                },
              }}
              fontSize=".8rem"
              color={theme.palette.primary.main}
            >
              Careers
            </StyledLink>
          </Stack>

          <Stack direction="column" padding={0.3} sx={{ width: { lg: "25%" } }}>
            <Typography fontSize="1rem" mb="10px">
              Contact Us
            </Typography>
            <Typography fontSize=".8rem" color={theme.palette.primary.main}>
              +0201286747743{" "}
            </Typography>
            <Stack direction="row" paddingTop={1} gap>
              <StyledLink>
                <Google />
              </StyledLink>
              <StyledLink>
                <Facebook />
              </StyledLink>
              <StyledLink>
                <GitHub />
              </StyledLink>
            </Stack>
          </Stack>
        </Box>
      </Box>

      <Box
        m="1rem"
        sx={{ width: { lg: "120%", xs: "100%" }, alignItems: "center" }}
        display="flex"
        flexDirection="column"
        width="100%"
        justifyContent="center"
        mx="auto"
      >
        <Divider
          sx={{
            borderColor: theme.palette.primary.main,
            width: { lg: "55%", xs: "90%" },
          }}
        />
        <Typography sx={{ color: theme.palette.primary.main }} padding={3}>
          All Rights reserved{" "}
          <Box sx={{ color: theme.palette.secondary.main }} component="span">
            {new Date().getFullYear()}
          </Box>{" "}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
