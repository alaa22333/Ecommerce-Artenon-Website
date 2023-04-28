import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import {ProductsProvider }from "./Contexts/ProductsContext";
import "./index.css";
import { ThemeProvider } from'@mui/material/styles'
import { theme } from "./theme";
import { CssBaseline } from "@mui/material";
import { MainContextProvider } from "./Contexts/mainContext";
import { FiltersContextProvider } from "./Contexts/filterConstext";
import { CartProvider } from "./Contexts/cartContext";
import { WishListProvider } from "./Contexts/wishListContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {" "}<MainContextProvider>
    <ProductsProvider>
      
        <FiltersContextProvider>
          <CartProvider>
            <WishListProvider>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter >
                  <App />
                </BrowserRouter>
              </ThemeProvider>
            </WishListProvider>
          </CartProvider>
        </FiltersContextProvider>
      
    </ProductsProvider></MainContextProvider>
  </React.StrictMode>
);
