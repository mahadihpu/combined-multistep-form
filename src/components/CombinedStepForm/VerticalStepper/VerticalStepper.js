import { useTheme } from '@emotion/react'
import { useMediaQuery } from '@mui/material'
import Box from '@mui/material/Box'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import * as React from 'react'
import { DataContext } from '../HorizontalStepForm'
import { verticalSteps } from './data'
import './VerticleStepper.css'

const useStyles = makeStyles((theme) => ({
  stepIconRoot: {
    '&.Mui-active': {
      color: theme.palette.primary.main,
    },
    '&.Mui-completed': {
      color: 'green',
    },
  },
}))

const VerticalStepper = () => {
  const [activeVerStep] = React.useContext(DataContext)
  const classes = useStyles()
  const theme = useTheme()
  const lgUp = useMediaQuery(() => theme.breakpoints.up('md'))
  return (
    <Box className="steps">
      <Stepper
        activeStep={activeVerStep}
        orientation={`${lgUp ? 'vertical' : 'horizontal'}`}
        // {lgUp ? alternativeLabel : null}
        alternativeLabel={lgUp ? false : true}
      >
        {verticalSteps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              StepIconProps={{
                classes: {
                  root: classes.stepIconRoot,
                  active: classes.stepIconActive,
                  completed: classes.stepIconCompleted,
                },
              }}
            >
              <Typography
                variant="h4"
                color={activeVerStep === index ? 'primary' : ''}
              >
                {step.label}
              </Typography>
              <Typography sx={{ fontSize: '13px', color: 'grey' }}>
                {step.description}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}

export default VerticalStepper
