import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  Input,
  InputLabel,
  ListItem,
  NativeSelect,
  Slider,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React, { useCallback, useEffect } from "react";
import { useProductsContext } from "../Contexts/ProductsContext";
import CircleIcon from "@mui/icons-material/Circle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { theme } from "../theme";
import { useMainContext } from "../Contexts/mainContext";
import { useFiltersContext } from "../Contexts/filterConstext";
import FiltersSkeleton from "./Skeletons/FiltersSkeleton";
import { format } from "../utlis/constants";

const Filters = () => {
  const { listFun } = useProductsContext();
  const { openFilters, setOpenFilters } = useMainContext();
  const { filters, handleChange, maxPrice, handleClearFilters } =
    useFiltersContext();
  const { category, company, color, price, search } = filters;
  const TypographyWithStyles = styled(Typography)(({ theme }) => ({
    fontSize: "1.3rem",
    paddingBottom: "10px",
    fontWeight: "500",
  }));
  
    const intervel = useCallback( ()=>window.addEventListener("resize", () => {
      if (openFilters && window.innerWidth <= 1000) {
        setOpenFilters(false);
      } else {
        setOpenFilters(true);
      }
    }),[window.innerWidth])
    
  return (
    <Box
      sx={{
        width: { lg: "29.5%",xs:'300px' },
        paddingLeft: { xs: 1, lg: 14 },
        background: "#ffffff",
        transition: "linear",
        paddingTop: { xs: "1rem" },
        paddingBottom: "4rem",
        transitionDuration: "500ms",
        transform: {
          xs: `${openFilters ? "translateX(0)" : "translateX(-110%)"}`,
          lg: "translateX(0)",
        },
        top: { xs: "87px" },
      }}
      height="100vh"
      overflow="auto"
      zIndex={10}
      position="fixed"
    >
      <Box
        flex={1}
        display="flex"
        sx={{ alignItems: "center" }}
        justifyContent="space-between"
      >
        <Typography fontSize="1.2rem" sx={{ textTransform: "capitalize" }}>
          filters:
        </Typography>
        <Button
          onClick={handleClearFilters}
          sx={{ color: theme.palette.secondary.main }}
        >
          Clear All
        </Button>
      </Box>
      <Box>
        <Input
          placeholder="Search"
          name="search"
          value={search}
          onChange={(e) => handleChange(e.target)}
          sx={{ width: "100%", color: theme.palette.secondary.main }}
        ></Input>
      </Box>

      <Box paddingY={3}>
        <TypographyWithStyles>Categories</TypographyWithStyles>
        <Box display="flex" sx={{ alignItems:'start' }} flexDirection="column">
          {listFun("category").map((item, i) => {
            return (
              <Button
                name="category"
                key={i}
                sx={{
                  textTransform: "capitalize",
                  color:
                    category === item
                      ? theme.palette.secondary.main
                      : theme.palette.neutral,
                  textDecoration: category === item && "underline",
                  textDecorationThickness: "3px",
                  textUnderlineOffset: "2px",
                }}
                onClick={(e) => {
                  handleChange(e.target);
                  setOpenFilters(false);
                }}
              >
                {item}
              </Button>
            );
          })}
        </Box>
      </Box>
      <Divider sx={{ width: "100%" }} />
      <Box paddingY={3}>
        <TypographyWithStyles>Company</TypographyWithStyles>
        <FormControl sx={{ width: "100%" }}>
          <NativeSelect
            onChange={(e) => {
              handleChange(e.target);
              setOpenFilters(false);
            }}
            value={company}
            inputProps={{
              name: "company",
              id: "company",
            }}
          >
            {listFun("company").map((com, i) => {
              return <option key={i}>{com}</option>;
            })}
          </NativeSelect>
        </FormControl>
      </Box>
      <Box paddingY={3}>
        <TypographyWithStyles>Colors</TypographyWithStyles>
        <Box display="flex">
          {listFun("colors").map((col, i) => {
            if (col === "All") {
              return (
                <Button
                  name="color"
                  key={i}
                  size="small"
                  sx={{
                    textTransform: "capitalize",
                    fontSize: "1rem",
                    margin: "-10px",
                    color:
                      col === color
                        ? theme.palette.secondary.main
                        : theme.palette.neutral,
                    textDecoration: col === color && "underline",
                    textDecorationThickness: "3px",
                    textUnderlineOffset: "2px",
                  }}
                  onClick={(e) => {
                    handleChange(e.target);
                    setOpenFilters(false);
                  }}
                >
                  {col}
                </Button>
              );
            }
            return (
              <Checkbox
                key={i}
                sx={{ color: col, padding: { xl: "9px", md: "5px" } }}
                value={col}
                name="color"
                onChange={(e) => {
                  handleChange(e.target);
                  setOpenFilters(false);
                }}
                icon={<CircleIcon sx={{ fontSize: "1.2rem !important" }} />}
                checked={col === color ? true : false}
                checkedIcon={
                  <CheckCircleIcon sx={{ color: color, opacity: ".8" }} />
                }
              />
            );
          })}
        </Box>
      </Box>
      <Divider sx={{ width: "100%" }} />
      <Box paddingY={3}>
        <TypographyWithStyles>Price</TypographyWithStyles>
        <Box width={250}>
          <Slider
            value={price}
            max={maxPrice}
            name="price"
            onChange={(e) => handleChange(e.target)}
            aria-label="Default"
            valueLabelDisplay="auto"
            // valueLabelFormat={format(Number(price) )}
            valueLabelFormat={value => <div>{format(price)}</div>}
            sx={{ color: theme.palette.secondary.main }}
          />
        </Box>
      </Box>
      <Divider sx={{ width: "100%" }} />
      <Box paddingY={3}>
        <TypographyWithStyles>free Shipping</TypographyWithStyles>
        <Checkbox
          name="shipping"
          onChange={(e) => {
            handleChange(e.target);
            setOpenFilters(false);
          }}
          sx={{ "&.Mui-checked": { color: theme.palette.secondary.main } }}
        />
      </Box>
    </Box>
  );
};

export default Filters;
