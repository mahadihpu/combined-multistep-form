import AppsIcon from "@mui/icons-material/Apps";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import { useState } from "react";
import DropDownButton from "./DropDownButton";
import "./muitoolbar.css";

const useStyles = makeStyles({
  iconClass: {
    fontSize: "37px",
    marginLeft: "5px",
  },
});

const CustomDiv = styled(AppBar)(({ theme }) => ({
  //backgroundColor: theme.palette.primary.light,
  backgroundColor:
    theme.palette.mode === "light" ? theme.palette.primary.light : "#001E3C",
  // '& .MuiSlider-thumb': {
  //   '&:hover, &.Mui-focusVisible': {
  //     boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
  //   },
  //   '&.Mui-active': {
  //     boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
  //   },
  // },
}));

const CustomIconDiv = styled("div")(({ theme }) => {
  console.log(theme.palette);
  return {
    color: theme.palette.primary.main,
    "&:hover": {
      color: alpha(theme.palette.common.white),
    },
  };
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
    display: "block",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.primary,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.primary,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();
  const [icon, setIcon] = useState("gridIcon");

  const handleClick = () => {
    if (icon === "gridIcon") setIcon("listIcon");
    else setIcon("gridIcon");
  };

  return (
    <CustomDiv position="static">
      <Toolbar>
        <Grid container>
          <Grid sx={{ padding: "3px 0" }} sm={3} xs={12}>
            <DropDownButton />
          </Grid>
          <Grid sx={{ padding: "3px 0" }} sm={3} xs={12}>
            <DropDownButton />
          </Grid>
          <Grid sx={{ padding: "3px 0" }} sm={3} xs={12}>
            <DropDownButton />
          </Grid>
          <Grid sx={{ padding: "3px 0" }} sm={3} xs={12}>
            <Grid container>
              <Grid xs={11}>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </Grid>
              <Grid xs={1} sx={{ margin: "auto" }}>
                {icon === "gridIcon" ? (
                  <>
                    <CustomIconDiv>
                      <AppsIcon
                        className={classes.iconClass}
                        onClick={handleClick}
                      />
                    </CustomIconDiv>
                  </>
                ) : (
                  <CustomIconDiv>
                    {" "}
                    <FormatListBulletedIcon
                      className={classes.iconClass}
                      onClick={handleClick}
                    />
                  </CustomIconDiv>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: "block" }}
        >
          MUI
        </Typography> */}
      </Toolbar>
    </CustomDiv>
  );
}
