import { useEffect, useState } from "react";
import "./index.css";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  ProductsPage,
  ProtectedPage,
  SingleProductPage,
} from "./pages";
import { Loading, SideBar } from "./components/index";
import { Box, CircularProgress } from "@mui/material";
import { theme } from "./theme";
import { UserProvider } from "./Contexts/UserConstext";
import React from "react";
import { Suspense,lazy } from "react";
const Home = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return import("./pages/Home");
});
const NavBar = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return import("./components/NavBar");
});

const SignIn = React.lazy(() => import("./pages/SignIn"));
const SignUp = React.lazy(() => import("./pages/SignUp"));
const WishList = React.lazy(() => import("./pages/WishList"));
const CartPage = React.lazy(() => import("./pages/CartPage"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));

function App() {
  useEffect(()=>{
    window.addEventListener('load',function(e) {
      if ( '.swiper-css-mode'.length > 0 ) {
        setTimeout(function(){
          const swiper = document.querySelector('.swiper-css-mode').swiper;
         
          swiper.autoplay.start()
        }, 4000);
      }
    });
  },[])
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    const scrollEvent = window.addEventListener("scroll", () => {
      const height = window.pageYOffset;
      height >= 400 ? setShowNav(true) : setShowNav(false);
    });
    return () => window.removeEventListener("scroll", scrollEvent);
  });
  const location = useLocation();

  return (
    <UserProvider>
      <Box position="relative" sx={{ background: theme.palette.background }}>
        <SideBar />
       <Suspense>  <Box
          sx={{
            background:
              location.pathname === "/"
                ? showNav
                  ? "#0000008c"
                  : ""
                : "#0000008c",
            zIndex: "200",
            position: "fixed",
            top: "0px",
            height: "87px",
            paddingInline: "10px",
            transition: "ease-in-out",
            transitionDuration: "300ms",
          }}
          paddingY={2}
        >
          <NavBar />
        </Box>
</Suspense>
        <Routes>
          <Route
          
            path="/"
           
            element={
              <Suspense fallback={<Loading/>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/sign in"
            element={
              <Suspense fallback={<Loading/>}>
                <SignIn />
              </Suspense>
            }
          />
          <Route
            path="/sign up"
            element={
              <Suspense fallback={<Loading/>}>
                <SignUp />
              </Suspense>
            }
          />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<SingleProductPage />} />
          <Route element={<ProtectedPage />}>
            <Route
              path="/cart"
              element={
                <Suspense fallback={<Loading/>}>
              
                  <CartPage />
                </Suspense>
              }
            />
          </Route>

          <Route
            path="/wishList"
            element={
              <Suspense    fallback={<Loading/>}>
        
              <WishList />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense    fallback={<Loading/>}>
                {" "}
                <ErrorPage
                title="This Page Is Not Found"
                href="/Ecommerce-Artenon-Website"
                buttonTitle="Return To Home"
              />
              </Suspense>
            }
           
          />
        </Routes>
      </Box>
    </UserProvider>
  );
}

export default App;
