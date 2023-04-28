import {
  Box,
  Divider,
  Stack,
  Typography,
  Input,
  Button,
  Link,
  IconButton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { theme } from "../theme";
import TextField from "@mui/material/TextField";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import img72 from "../assets/data/img72.jpg";
import { useUserContext } from "../Contexts/UserConstext";
import { ToastContainer } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Footer } from "../components";
import { styled } from "@mui/material/styles";
const SignIn = () => {
  const StyledButton = styled(Button)({
    transition: "ease-in-out",
    transitionDuration: "400ms",
    borderRadius: "10px",
    textTransform: "capitalize",
    display: "flex",
    justifyContent: "space-evenly",
    borderRadius: "10px",
    width: "100%",
    mx: "auto",
    height: "60px",
    "&:hover": {
      color: theme.palette.background,
    },
    background: "#00000014",
  });
  const { signInWithGoogle, signInWithFaceBook, handleSignIn } =
    useUserContext();
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Stack
      sx={{
        minHeight: "100%",

        position: "relative",
        background: `url(${img72})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        width="100%"
        height="100%"
        sx={{ background: "#000000a6", position: "absolute", zIndex: 0 }}
      ></Box>

      <Box sx={{ paddingBottom: 10, paddingInline: { xs: 3, md: 10 } }}>
        <Stack
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          justifyContent="space-between"
          borderRadius={6}
          boxShadow="#1a1515d1 1px 1px 70px"
          textAlign="center"
          maxWidth="100%"
          direction="column"
          position="relative"
          height="80%"
          mt={17}
          mx="auto"
          sx={{
            padding: { lg: 7, xs: 5 },
            width: { lg: "35%", sm: "450px", xs: "98%" },
            background: "#b9b9b92b",
          }}
        >
          <Typography
            color={theme.palette.secondary.main}
            marginTop={2}
            variant="h4"
          >
            Sign In{" "}
          </Typography>
          <Box
            component="form"
            display="flex"
            marginTop={3}
            flexDirection="column"
            gap={3}
          >
            <TextField
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              label="Email"
              color="warning"
              InputProps={{
                sx: {
                  ".css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root": {
                    color: theme.palette.secondary.main,
                  },
                },
              }}
              variant="outlined"
            />

            <TextField
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="outlined-basic"
              color="warning"
              label="Password"
              InputProps={{
                sx: {
                  ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                    borderRadius: "10px",
                  },
                },
              }}
              sx={{
                color: theme.palette.secondary.main,
              }}
              variant="outlined"
            />
            <Button
              onClick={(e) => {
                window.scrollTo({ top: 0, behavior: "smooth" }),
                  handleSignIn(e, email, password);
              }}
              padding={3}
              sx={{ borderRadius: "15px" }}
              variant="contained"
              color="warning"
            >
              Sign In
            </Button>
          </Box>
          <Box display="flex" marginTop={3} flexDirection="column" gap={3}>
            <Typography
              marginTop={-2}
              display="flex"
              flexWrap="wrap"
              fontSize="16px"
              justifyContent="center"
              color={theme.palette.primary.main}
            >
              Don't have an account?
              <Link
                underline="none"
                href="/sign up"
                sx={{ cursor: "pointer" }}
                fontSize="18px"
                color={theme.palette.secondary.main}
              >
                Sign Up
              </Link>
            </Typography>
            <Box
              display="flex"
              width="100%"
              justifyContent="space-between"
              sx={{ alignItems: "center" }}
            >
              <Divider
                width="24%"
                sx={{ borderColor: "rgb(36 32 32 / 80%)" }}
              />
              <Typography
                color={theme.palette.secondary.main}
                flex="1"
                whiteSpace="nowrap"
              >
                or sign in with
              </Typography>
              <Divider
                width="24%"
                sx={{ borderColor: "rgb(36 32 32 / 80%)" }}
              />
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              gap={2}
              justifyContent="start"
            >
              <StyledButton
                onClick={signInWithGoogle}
                variant="contained"
                sx={{
                  color: "white",

                  "&:hover": {
                    background: "#a72020",
                  },
                }}
              >
                <GoogleIcon /> Sign In With Google{" "}
              </StyledButton>
              <StyledButton
                onClick={signInWithFaceBook}
                variant="contained"
                sx={{
                  "&:hover": {
                    background: "#093a83",
                  },
                  color: "white",
                }}
              >
                <FacebookRoundedIcon color={theme.palette.secondary.main} />{" "}
                Sign In With Facebook{" "}
              </StyledButton>
            </Box>
          </Box>
        </Stack>
      </Box>
      <ToastContainer />
      <Footer />
    </Stack>
  );
};

export default SignIn;
