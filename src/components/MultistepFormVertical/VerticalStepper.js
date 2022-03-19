import CreateIcon from '@mui/icons-material/Create'
import ImportContactsIcon from '@mui/icons-material/ImportContacts'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PersonIcon from '@mui/icons-material/Person'
import Box from '@mui/material/Box'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import * as React from 'react'
import { steps } from './data'
import { DataContext } from './MultistepForm'

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundColor: theme.palette.primary.main,
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }),
}))

function ColorlibStepIcon(props) {
  const { active, completed, className } = props

  const icons = {
    1: <PersonIcon />,
    2: <ImportContactsIcon />,
    3: <CreateIcon />,
    4: <LocalOfferIcon />,
    5: <MailOutlineIcon />,
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
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
  icon: PropTypes.node,
}

const VerticalStepper = () => {
  const [activeStep] = React.useContext(DataContext)
  return (
    <Box className="steps">
      <Stepper nonLinear activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>
              <Typography
                variant="h4"
                color={activeStep === index ? 'primary' : ''}
              >
                {step.label}
              </Typography>
              {step.description}
              <br />
              <Box className="step-description">
                {activeStep === index ? (
                  <Typography variant="caption">
                    *{steps[activeStep].about}*
                  </Typography>
                ) : (
                  ''
                )}
              </Box>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}

export default VerticalStepper
