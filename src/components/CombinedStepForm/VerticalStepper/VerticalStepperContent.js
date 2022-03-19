import { Box, Button, Divider, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { DataContext } from '../HorizontalStepForm'
import { verticalSteps } from './data'

const VerticalStepperContent = ({
  handleComplete,
  completedSteps,
  totalSteps,
}) => {
  const [
    activeStep,
    setActiveStep,
    handleNext,
    handleReset,
    activeHorStep,
  ] = useContext(DataContext)
  return (
    <Box sx={{ mb: 2 }}>
      {'step ' + (activeStep + 1) + '/' + verticalSteps.length}
      <Typography variant="h2">
        {verticalSteps[activeStep].info.title}
      </Typography>
      <Typography variant="h6">
        {verticalSteps[activeStep].info.info_descrition}
      </Typography>
      <br />
      <Divider />
      <br />
      {verticalSteps[activeStep].info.input
        ? verticalSteps[activeStep].info.input
        : null}
      <br />
      <Button
        variant="contained"
        size="large"
        onClick={() => {
          activeStep < verticalSteps.length - 1
            ? handleNext()
            : handleComplete()
        }}
        sx={{ mt: 1, ml: '70%' }}
      >
        {activeStep < verticalSteps.length - 1
          ? 'Next'
          : 'Finish & Go to next step'}
      </Button>
    </Box>
  )
}

export default VerticalStepperContent
