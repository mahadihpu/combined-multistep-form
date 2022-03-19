import { useTheme } from '@emotion/react'
import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import React, { useContext } from 'react'
import { DataContext } from '../HorizontalStepForm'
import VerticalStepper from './VerticalStepper'
import VerticalStepperContent from './VerticalStepperContent'

const VerticalStepForm = ({
  handleComplete,
  completedSteps,
  totalSteps,
  data,
}) => {
  const [
    activeStep,
    setActiveStep,
    handleNext,
    handleReset,
    activeHorStep,
  ] = useContext(DataContext)
  const theme = useTheme()
  const lgUp = useMediaQuery(() => theme.breakpoints.up('md'))
  return (
    <Box sx={{ border: '1px solid lightgrey', padding: '20px' }}>
      <Grid container>
        <Grid xs={6} md={8} lg={9}>
          <Typography variant="h2">
            {activeHorStep + 1}. Setup {data.label}
          </Typography>
        </Grid>
        <Grid xs={6} md={4} lg={3}>
          {/* <Button
            variant="outlined"
            //   color="success"
            sx={{ marginLeft: '20px' }}
          >
            Save Progress and close
          </Button> */}
        </Grid>
      </Grid>
      <br />
      <Grid container>
        <Grid
          md={3}
          xs={12}
          sx={{ borderRight: `${lgUp ? '0.5px solid lightgrey' : ''}` }}
        >
          <VerticalStepper />
        </Grid>
        <Grid md={9} xs={12} sx={{ padding: '20px' }}>
          <VerticalStepperContent
            handleComplete={handleComplete}
            completedSteps={completedSteps}
            totalSteps={totalSteps}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default VerticalStepForm
