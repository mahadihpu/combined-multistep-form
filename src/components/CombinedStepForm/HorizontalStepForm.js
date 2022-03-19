import CheckIcon from '@mui/icons-material/Check'
import { Box, Button, Step, Stepper, Typography } from '@mui/material'
import { makeStyles, styled } from '@mui/styles'
import React, { createContext } from 'react'
import { stepData } from './data'
import HorizontalStepContent from './HorizontalStepContent'
import { verticalSteps } from './VerticalStepper/data'

const CustomStep = styled(Step)(({ theme, index, steps, activeStep }) => ({
  borderRight: `${index !== steps.length - 1 && '1px solid lightgrey'}`,
  padding: '15px',
  display: 'flex',
  width: `calc(100% / ${steps.length})`,

  ...(activeStep === index
    ? {
        backgroundColor: theme.palette.secondary.main,
        color: 'white',
        // color: theme.palette.mode === 'dark' ? 'white' : 'black',
        // borderBottom: `4px solid ${theme.palette.primary.main}`,
      }
    : ''),
  float: 'left',
  marginBottom: '-99999px',
  paddingBottom: '99999px',
}))

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

export const DataContext = createContext()

export default function HorizontalStepForm() {
  const [activeHorStep, setactiveHorStep] = React.useState(0)
  const [verComlete, setVerComlete] = React.useState(0)
  const [completed, setCompleted] = React.useState({})
  const steps = stepData
  const classes = useStyles()

  const totalSteps = () => {
    return steps.length
  }

  const completedSteps = () => {
    return Object.keys(completed).length
  }

  const isLastStep = () => {
    return activeHorStep === totalSteps() - 1
  }

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps()
  }

  const handleHorNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeHorStep + 1
    setactiveHorStep(newActiveStep)
  }
  const handleHorBack = () => {
    setactiveHorStep((prevActiveStep) => prevActiveStep - 1)
  }

  // const handleStep = (step) => () => {
  //   setactiveHorStep(step)
  // }

  const handleComplete = () => {
    const newCompleted = completed
    newCompleted[activeHorStep] = true
    setCompleted(newCompleted)
    setactiveVerStep(0)
    handleHorNext()
  }

  const handleReset = () => {
    setactiveHorStep(0)
    setactiveVerStep(0)
    setCompleted({})
  }
  //vertical stepper information
  const [activeVerStep, setactiveVerStep] = React.useState(0)

  const handleVerNext = () => {
    setactiveVerStep((prevActiveStep) => prevActiveStep + 1)
  }

  // const handleBack = () => {
  //   setactiveVerStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const handleVerReset = () => {
    setactiveVerStep(0)
  }

  return (
    <DataContext.Provider
      value={[
        activeVerStep,
        setactiveVerStep,
        handleVerNext,
        handleVerReset,
        activeHorStep,
      ]}
    >
      <Box sx={{ border: '1px solid lightgrey', overflow: 'hidden' }}>
        <Stepper
          nonLinear
          activeStep={activeHorStep}
          connector=""
          sx={{ overflow: 'hidden' }}
        >
          {steps.map((step, index) => (
            <CustomStep index={index} steps={steps} activeStep={activeHorStep}>
              <Box>
                {completed[index] === true ? (
                  <Typography
                    sx={{
                      fontSize: '12px',
                      color: '#00A56F',
                    }}
                  >
                    Completed
                  </Typography>
                ) : activeHorStep === index ? (
                  <Box sx={{ display: 'flex', marginBottom: '5px' }}>
                    {verticalSteps.map((step, index) => (
                      <Box
                        key={index}
                        sx={{
                          height: '12px',
                          width: '12px',
                          borderRadius: '50%',
                          marginRight: '3px',
                          // color: (theme) => theme.palette.primary.main,
                          backgroundColor: (theme) =>
                            `${
                              activeVerStep === index
                                ? theme.palette.primary.main
                                : index < activeVerStep &&
                                  theme.palette.mode === 'dark'
                                ? 'black'
                                : index < activeVerStep &&
                                  theme.palette.mode === 'light'
                                ? 'black'
                                : 'lightgrey'
                            }`,
                        }}
                      ></Box>
                    ))}
                  </Box>
                ) : null}
                <Typography variant="h5">
                  {index + 1}
                  {'. ' + step.label}
                </Typography>
                <Typography sx={{ fontSize: '14px' }}>
                  {step.description}
                </Typography>
              </Box>
              {completed[index] === true && (
                <CheckIcon
                  sx={{ justifyContent: 'flex-end', color: '#00A56F' }}
                />
              )}
            </CustomStep>
          ))}
        </Stepper>
      </Box>
      <Box>
        {allStepsCompleted() ? (
          <Box>
            <Typography>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        ) : (
          <HorizontalStepContent
            index={activeHorStep}
            data={stepData[activeHorStep]}
            handleComplete={handleComplete}
            completedSteps={completedSteps}
            totalSteps={totalSteps}
            activeStep={activeHorStep}
            handleBack={handleHorBack}
          />
        )}
      </Box>
    </DataContext.Provider>
  )
}
