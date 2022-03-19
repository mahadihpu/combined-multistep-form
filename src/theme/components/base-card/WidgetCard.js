import { Box, Typography } from "@mui/material";
import React from "react";

const WidgetCard = (props) => {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          mb: 2,
          width: "100%",
        }}
      >
        {props.title}
      </Typography>
    </Box>
  );
};

export { WidgetCard };
