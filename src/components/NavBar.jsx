import { Box, IconButton, styled, Tooltip, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import logo6 from "../assets/data/logo6.jpg";
import { theme } from "../theme";
import { links } from "../utlis/constants";
import { Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useMainContext } from "../Contexts/mainContext";
import Links from "./Links";

const NavBar = () => {
  const { handleOpenSB, isClose } = useMainContext();

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      width="100vw"
      sx={{ paddingInline: { xs: 1, lg: 20 } }}
    >
      <Box
        display="flex"
        justifyContent="center"
        sx={{ gap: { md: 4, xs: 1 }, alignItems: "center" }}
      >
        <IconButton
          sx={{
            display: { xs: "block", md: "none" },
            fontSize: "20px",
            padding: 0,
            "&:hover": { color: theme.palette.secondary.hover },
            color: theme.palette.primary.main,
          }}
          onClick={() => {
            handleOpenSB(!isClose);
          }}
        >
          <MenuIcon />
        </IconButton>
        <Link
          href="/"
          sx={{
            paddingBlock: "8px",
            paddingInline: "11px",
            borderRadius: "8px",
            background: "black",
            height: "46px",
          }}
        >
          <img
            style={{
              borderRadius: "100px",
              maxWidth: "100%",
              width: "fit-content",
            }}
            height={31}
            src={logo6}
          ></img>
        </Link>
        {links.map((i, index) => {
          return (
            <Tooltip key={index} title={i.name}>
              <Link
                underline="none"
                sx={{
                  color: theme.palette.primary.main,
                  transitionDuration: "300",
                  transition: "all",

                  "&:hover": { color: theme.palette.secondary.hover },
                  display: { xs: "none", md: "block" },
                }}
                href={i.url}
              >
                {i.name}
              </Link>
            </Tooltip>
          );
        })}
      </Box>
      <Links />
    </Stack>
  );
};

export default NavBar;
