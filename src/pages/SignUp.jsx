import {
  Box,
  Divider,
  Stack,
  Typography,
  Input,
  Button,
  Link,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { theme } from "../theme";
import img72 from "../assets/data/img72.jpg";
import TextField from "@mui/material/TextField";
import { ToastContainer } from "react-toastify";
import { useUserContext } from "../Contexts/UserConstext";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Footer } from "../components";

const SignUp = () => {
  const { handleSignUp, user } = useUserContext();
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
            Sign Up
          </Typography>
          <Box
            onSubmit={() => handleSignUp(e, email, password)}
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
              padding={3}
              sx={{ borderRadius: "15px" }}
              variant="contained"
              color="warning"
              onClick={(e) => handleSignUp(e, email, password)}
            >
              Sign Up
            </Button>

            <Typography
              marginTop={-2}
              display="flex"
              flexWrap="wrap"
              gap
              fontSize="16px"
              justifyContent="center"
              color={theme.palette.primary.main}
            >
              Already have an account?
              <Link
                underline="none"
                href="/sign in"
                sx={{ cursor: "pointer" }}
                fontSize="18px"
                color={theme.palette.secondary.main}
              >
                Sign In
              </Link>
            </Typography>
          </Box>
        </Stack>
      </Box>
      <ToastContainer />
      <Footer />
    </Stack>
  );
};
export default SignUp;
