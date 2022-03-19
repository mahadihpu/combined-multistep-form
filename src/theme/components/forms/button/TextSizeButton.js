import { Box, Button } from "@mui/material";
import React from "react";
import BaseCard from "../../base-card/BaseCard";

const TextSizeButton = () => {
  return (
    <BaseCard title="Text Sizes Buttons">
      <Box sx={{ textAlign: "center" }}>
        <Button
          size="small"
          sx={{
            ml: 1,
          }}
        >
          Small
        </Button>
        <Button
          size="medium"
          sx={{
            ml: 1,
          }}
        >
          Medium
        </Button>
        <Button
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

export { TextSizeButton };
