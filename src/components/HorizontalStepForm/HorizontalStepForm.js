import CreateIcon from '@mui/icons-material/Create'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import ImportContactsIcon from '@mui/icons-material/ImportContacts'
import SettingsIcon from '@mui/icons-material/Settings'
import VideoLabelIcon from '@mui/icons-material/VideoLabel'
import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material'
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'
import React from 'react'
import { stepData } from './data'
import StepContents from './StepContents'

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.primary.light,
  zIndex: 1,
  color: 'grey',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundColor: theme.palette.primary.main,
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    color: 'white',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }),
}))

function ColorlibStepIcon(props) {
  const { active, completed, className } = props

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
    4: <CreateIcon />,
    5: <FolderOpenIcon />,
    6: <ImportContactsIcon />,
  }

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  )
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
}

export default function HorizontalStepForm() {
  const [activeStep, setActiveStep] = React.useState(0)
  const [completed, setCompleted] = React.useState({})
  const steps = stepData

  const totalSteps = () => {
    return steps.length
  }

  const completedSteps = () => {
    return Object.keys(completed).length
  }

  const isLastStep = () => {
    return activeStep === totalSteps() - 1
  }

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps()
  }

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1
    setActiveStep(newActiveStep)
  }
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStep = (step) => () => {
    setActiveStep(step)
  }

  const handleComplete = () => {
    const newCompleted = completed
    newCompleted[activeStep] = true
    setCompleted(newCompleted)
    handleNext()
  }

  const handleReset = () => {
    setActiveStep(0)
    setCompleted({})
  }

  return (
    <>
      <Box sx={{ padding: '50px' }}>
        <Card variant="outlined">
          <Stepper nonLinear activeStep={activeStep} connector="">
            {steps.map((step, index) => (
              <Step key={index}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  {activeStep === index ? (
                    <>
                      <Typography color="primary" sx={{ fontSize: '14px' }}>
                        Step {index + 1} / {steps.length}
                      </Typography>
                      <Typography variant="h5">{step.label}</Typography>
                    </>
                  ) : (
                    ''
                  )}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Card>
        <Box>
          {allStepsCompleted() ? (
            <Box>
              <Typography>All steps completed</Typography>
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          ) : (
            <StepContents
              index={activeStep}
              data={stepData[activeStep]}
              handleComplete={handleComplete}
              completedSteps={completedSteps}
              totalSteps={totalSteps}
              activeStep={activeStep}
              handleBack={handleBack}
            />
          )}
        </Box>
      </Box>
    </>
  )
}
