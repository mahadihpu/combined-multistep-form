import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const StepContents = ({
  index,
  data,
  handleComplete,
  completedSteps,
  totalSteps,
  activeStep,
  handleBack,
}) => {
  return (
    <Box style={{ marginTop: '5%', marginLeft: '15px' }}>
      <Typography variant="h3">{data.info.info_descrition}</Typography>
      <Typography>{data.about}</Typography>
      <br />
      {data.info.input}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: '10px',
        }}
      >
        <Button
          disabled={activeStep === 0}
          variant="outlined"
          onClick={handleBack}
          startIcon={<ArrowBackIcon />}
          sx={{ marginRight: '5px' }}
        >
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={handleComplete}>
          {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Next'}
        </Button>
      </Box>
    </Box>
  )
}

export default StepContents
