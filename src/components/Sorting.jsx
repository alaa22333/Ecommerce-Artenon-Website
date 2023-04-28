import {
  Box,
  FormControl,
  IconButton,
  NativeSelect,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { theme } from "../theme";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import { useFiltersContext } from "../Contexts/filterConstext";
import { useProductsContext } from "../Contexts/ProductsContext";
const Sorting = () => {
  const { isGrid, isList,handleGridView,handleListView } = useFiltersContext();
const {products}=useProductsContext()
const {filteredProducts}=useFiltersContext()

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      paddingBottom={1}
      sx={{
        marginLeft: { lg: "30%" },
        flexDirection: { md: "row", xs: "column" },
        paddingInline: { xs: 1, lg: 5, md: 4 }, alignItems:"center",
      }}
      display="flex"
  
    >
      <Typography sx={{ color: theme.palette.neutral }}>
        Showing <span style={{ color: theme.palette.secondary.main }}>{filteredProducts?.length}</span>{" "}
        of <span style={{ color: theme.palette.secondary.main }}>{products?.length}</span>{" "}
        Products
      </Typography>
   
        
        <Box gap={0} sx={{marginRight:{lg:'20px'}}} display="flex">
          {" "}
          <IconButton onClick={handleListView} sx={{ color:isList ? theme.palette.secondary.main:theme.palette.neutral }}>
            <ViewListIcon />
          </IconButton>
          <IconButton onClick={handleGridView} sx={{ color:isGrid ? theme.palette.secondary.main:theme.palette.neutral}}>
            <ViewModuleIcon />
          </IconButton>
        
      </Box>
    </Stack>
  );
};

export default Sorting;
