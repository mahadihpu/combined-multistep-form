import { Box, Button } from "@mui/material";
import FeatherIcon from "feather-icons-react";
import React from "react";
import BaseCard from "../../base-card/BaseCard";

const TextIconLoadingButtons = () => {
  return (
    <BaseCard title="Text Button With Icons & Loading">
      <Box display="flex" justifyContent="center">
        <Button
          color="error"
          startIcon={
            <FeatherIcon icon="trash" width="18" height="18"></FeatherIcon>
          }
          sx={{
            mr: 1,
          }}
        >
          Left Icon
        </Button>
        <Button
          color="secondary"
          endIcon={
            <FeatherIcon icon="send" width="18" height="18"></FeatherIcon>
          }
        >
          Right Icon
        </Button>
      </Box>
    </BaseCard>
  );
};

export { TextIconLoadingButtons };
