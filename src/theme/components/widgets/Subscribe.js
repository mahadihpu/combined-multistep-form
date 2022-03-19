import { Box, Button, Card, CardContent } from "@mui/material";
import React from "react";
import { WidgetCard } from "../base-card/WidgetCard";
import { CustomTextField } from "../forms/custom-elements/CustomTextField";

const Subscribe = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        mb: 4,
      }}
    >
      <CardContent>
        <WidgetCard title="Subscribe"></WidgetCard>

        <Box
          sx={{
            mt: 2,
          }}
        >
          <CustomTextField
            id="name"
            fullWidth
            placeholder="Enter Name"
            variant="outlined"
            size="small"
            inputProps={{ "aria-label": "Enter Name" }}
            sx={{
              mb: 1,
            }}
          />
          <CustomTextField
            id="email"
            fullWidth
            placeholder="Enter Email"
            inputProps={{ "aria-label": "Enter Email" }}
            variant="outlined"
            size="small"
            sx={{
              mb: 1,
            }}
          />
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{
              width: "100%",
              display: "block",
            }}
          >
            Subscribe
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export { Subscribe };
