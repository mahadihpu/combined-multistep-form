import { Box, Button } from "@mui/material";
import React from "react";
import BaseCard from "../../base-card/BaseCard";

const OutlinedSizeButton = () => {
  return (
    <BaseCard title="Outlined Button Sizes">
      <Box sx={{ textAlign: "center" }}>
        <Button
          variant="outlined"
          size="small"
          sx={{
            ml: 1,
          }}
        >
          Small
        </Button>
        <Button
          variant="outlined"
          size="medium"
          sx={{
            ml: 1,
          }}
        >
          Medium
        </Button>
        <Button
          variant="outlined"
          size="large"
          sx={{
            ml: 1,
          }}
        >
          Large
        </Button>
      </Box>
    </BaseCard>
  );
};

export { OutlinedSizeButton };
