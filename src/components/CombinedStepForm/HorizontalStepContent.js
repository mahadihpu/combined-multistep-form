import React from 'react'
import VerticalStepForm from './VerticalStepper/VerticalStepForm'

const HorizontalStepContent = ({
  index,
  data,
  handleComplete,
  completedSteps,
  totalSteps,
  activeStep,
  handleBack,
}) => {
  return (
    <>
      <VerticalStepForm
        handleComplete={handleComplete}
        completedSteps={completedSteps}
        totalSteps={totalSteps}
        data={data}
      />
    </>
  )
}

export default HorizontalStepContent
