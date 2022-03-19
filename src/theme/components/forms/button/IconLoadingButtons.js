import { Box, Button } from "@mui/material";
import FeatherIcon from "feather-icons-react";
import React from "react";
import BaseCard from "../../base-card/BaseCard";

const IconLoadingButtons = () => {
  return (
    <BaseCard title="Button With Icons">
      <Box display="flex" justifyContent="center">
        <Button
          variant="contained"
          color="error"
          startIcon={<FeatherIcon icon="trash" width="18"></FeatherIcon>}
          sx={{
            mr: 1,
          }}
        >
          Left Icon
        </Button>
        <Button
          variant="contained"
          color="secondary"
          endIcon={<FeatherIcon icon="send" width="18"></FeatherIcon>}
        >
          Right Icon
        </Button>
      </Box>
    </BaseCard>
  );
};

export { IconLoadingButtons };
