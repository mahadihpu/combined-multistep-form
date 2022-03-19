import { Card, Grid, Typography } from '@mui/material'
import React, { createContext } from 'react'
import './MultistepForm.css'
import StepperContent from './StepperContent'
import VerticalStepper from './VerticalStepper'

export const DataContext = createContext()

const MultistepForm = () => {
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    console.log('active: ', activeStep)
  }

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const handleReset = () => {
    setActiveStep(0)
  }
  return (
    <DataContext.Provider
      value={[activeStep, setActiveStep, handleNext, handleReset]}
    >
      <Card sx={{ padding: '50px' }}>
        <Typography variant="h2">Examples with steps UI</Typography>
        <Typography>
          Fill the information and click next to finish the map.
        </Typography>
        <br />
        <br />
        <Grid container>
          <Grid md={3} xs={12} sx={{ borderRight: '0.5px solid lightgrey' }}>
            <VerticalStepper />
          </Grid>
          <Grid md={9} xs={12} sx={{ padding: '20px' }}>
            <StepperContent />
          </Grid>
        </Grid>
      </Card>
    </DataContext.Provider>
  )
}

export default MultistepForm
