import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const CustomFormLabel = styled((props) => (
  <Typography
    variant="h6"
    {...props}
    component="label"
    htmlFor={props.htmlFor}
  />
))(() => ({
  marginBottom: "5px",
  marginTop: "15px",
  display: "block",
}));

export { CustomFormLabel };
