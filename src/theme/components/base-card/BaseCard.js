import { Card, CardContent, CardHeader, Divider } from "@mui/material";
import React from "react";

const BaseCard = (props) => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: "100%",
        p: 0,
      }}
    >
      <CardHeader title={props.title} />

      <Divider />
      <CardContent>{props.children}</CardContent>
    </Card>
  );
};

export default BaseCard;
