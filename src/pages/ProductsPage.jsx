import { Box, Divider, Stack } from "@mui/material";
import React, { Suspense } from "react";
import { theme } from "../theme";
import {
  SettingsComp,
  Sorting,
  ProductsSkeleton,
  ListViewSkeleton,
  FiltersSkeleton,
  Loading,
} from "../components";
import BreadCrumbs from "../components/BreadCrumbs";
import { useFiltersContext } from "../Contexts/filterConstext";
import { useProductsContext } from "../Contexts/ProductsContext";
import ErrorPage from "./ErrorPage";
import { ToastContainer } from "react-toastify";
import { lazy } from "react";
const ListView = lazy(() => import("../components/ListView"));
const GridView = lazy(() => import("../components/GridView"));
const Filters = lazy(() => import("../components/Filters"));
const Error = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return import("../components/Error");
});
const ProductsPage = () => {
  const { isGrid, isList, filteredProducts } = useFiltersContext();
  const {
    isLoading,
    error: { msg, show },
  } = useProductsContext();

  if (show) {
    return <ErrorPage title={msg} href="/" buttonTitle="Return To Home" />;
  }

  return (
    <>
    <Stack
      sx={{
        height: "100vh",
        minHeight: "100%",

        position: "relative",
        background: theme.palette.background,
        paddingInline: { xs: 2, lg: 5 },
      }}
    >
      <Box sx={{ marginLeft: { lg: "32%" } }}>
        <BreadCrumbs title={"Products"} />
      </Box>

      <Sorting />
      <Suspense fallback={<FiltersSkeleton />}>
        <Filters />
      </Suspense>

      {isGrid ? (
        <Suspense fallback={<ProductsSkeleton />}>
          <GridView />
        </Suspense>
      ) : (
        <Suspense fallback={<ListViewSkeleton />}>
          <ListView />
        </Suspense>
      )}
      {filteredProducts?.length === 0 && !isLoading && (
        <Suspense fallback={<Loading />}>
          <Error />
        </Suspense>
      )}
      <SettingsComp />
    </Stack> 
<ToastContainer />
</>
  );
};

export default ProductsPage;
