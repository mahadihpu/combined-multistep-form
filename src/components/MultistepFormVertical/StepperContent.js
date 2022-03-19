import { Box, Button, Divider, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { steps } from './data';
import { DataContext } from './MultistepForm';

const StepperContent = () => {
    const [activeStep, setActiveStep,handleNext,handleReset] = useContext(DataContext);
    return (
    <Box sx={{ mb: 2 }}>
            {"step " +(activeStep + 1) + "/" + steps.length}
            <Typography variant="h2">{steps[activeStep].info.title}</Typography>
            <Typography variant="h6">{steps[activeStep].info.info_descrition}</Typography>
            <br />
            <Divider />
            <br />
            {
                steps[activeStep].info.input ? steps[activeStep].info.input : null
            }
            <br />
            <Button
            variant="contained"
            size="large"
            onClick={() => {activeStep < (steps.length -1) ? handleNext() : handleReset()}}
            sx={{ mt: 1, ml: "70%" }}
            >{activeStep < (steps.length -1) ? "Next" : "Finish & Reset"}</Button>
        </Box>
    );
};

export default StepperContent;