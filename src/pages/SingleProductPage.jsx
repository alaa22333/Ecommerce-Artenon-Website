import { Box, Divider, Stack } from "@mui/material";
import React, { Suspense, useEffect } from "react";
import { theme } from "../theme";
import BreadCrumbs from "../components/BreadCrumbs";
import { Footer, Loading, SingleProductSkeleton } from "../components";
import { useProductsContext } from "../Contexts/ProductsContext";
import { useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import { lazy } from "react";
const SingleProductPage = () => {
  const {
    product: {
      data,
      error: { msg, show },
      isLoading,
    },
    fetchSingleProduct,
  } = useProductsContext();
  const ProductDetails = lazy(() => import("../components/ProductDetails"));
  const Footer = lazy(async () => {
    await new Promise(resolve => setTimeout(resolve,3000));
    return import('../components/Footer');
  });
  let { id } = useParams();
  console.log({ id, data });
  useEffect(() => {
    if (id) {
      id = id.split(":").join("");
      fetchSingleProduct(id);
    }

  }, [id]);

  if (show) {
    return (
      <ErrorPage
        title={msg}
        href="/products"
        buttonTitle="Return To Products"
      />
    );
  }

  console.log({ msg, show });
  return (
    <Stack
      sx={{
    
       minHeight:'100vh',
        position: "relative",
        background: theme.palette.background,
      }}
    >
      <Box sx={{   paddingInline: { xs: 3, lg: 20 } }}>
    
        <BreadCrumbs title={`products`} name={data?.name} />
        <Suspense  fallback={<SingleProductSkeleton />}>
          <ProductDetails data={data} {...data} />
        </Suspense>
      </Box>
    <Suspense fallback={<Loading/>}> <Footer /></Suspense> 
    </Stack>
  );
};

export default SingleProductPage;
