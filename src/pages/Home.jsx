import { Stack } from "@mui/material";
import React, { memo } from "react";
import { Loading } from "../components";
import { lazy } from "react";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
const Trendy = lazy(() => import("../components/Trendy"));
const Footer = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return import("../components/Footer");
});
const SmallCards = lazy(() => import("../components/SmallCards"));

const Hero = lazy(() => import("../components/Hero"));
const Sale = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return import("../components/Sale");
});

const Categories = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return import("../components/Categories");
});
const Home = () => {
  return (
    <Stack
      height="100%"
      overflow="hidden"
      direction="column"
      position="relative"
    >
      <Suspense fallback={<Loading />}>
        <Hero />
        <Categories />
        <Trendy />
        <SmallCards /> <Sale />
        <Footer />
      </Suspense>
      <ToastContainer />
    </Stack>
  );
};

export default memo(Home);
