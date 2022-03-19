import { Box, InputLabel, TextField } from '@mui/material'

export const stepData = [
  {
    label: 'Intergration details',
    description: `Astea Solutions`,
    info: {
      title: "Let's start with your name",
      input: (
        <Box>
          <InputLabel>Please Enter Your Name</InputLabel>
          <TextField
            id="outlined-basic"
            variant="outlined"
            sx={{ width: '100%' }}
          />
          <br />
          <InputLabel>Please Enter Email</InputLabel>
          <TextField
            id="outlined-basic"
            variant="outlined"
            sx={{ width: '100%' }}
          />
        </Box>
      ),
      info_descrition: 'Please fill the necessary information',
    },
    about: 'Some information about the field 1',
  },
  {
    label: 'HR solution(s)',
    description: 'Paycor , FTP solutions',
    info: {
      title: 'What describes you?',
      input: (
        <Box>
          <InputLabel>Please Enter Adress</InputLabel>
          <TextField
            id="outlined-basic"
            variant="outlined"
            sx={{ width: '50%' }}
          />
          <br />
          <InputLabel>Please Phone number</InputLabel>
          <TextField
            id="outlined-basic"
            variant="outlined"
            sx={{ width: '50%' }}
          />
        </Box>
      ),
      info_descrition: 'Please fill the necessary information',
    },
    about: 'Some information about the field 2',
  },
  {
    label: 'Connection settings',
    description: `Connection settings recieved`,
    info: {
      title: 'What services are you looking for?',
      input: (
        <TextField
          sx={{
            width: '80%',
          }}
          helperText="Please enter your name"
          label="Name"
        />
      ),
      info_descrition: 'Please fill the necessary information',
    },
    about: 'Some information about the field 3',
  },
  {
    label: 'Data Exchage jobs',
    description: `Data recieved`,
    info: {
      title: 'Please select your budget',
      input: (
        <TextField
          sx={{
            width: '80%',
          }}
          helperText="Please enter your name"
          label="Name"
        />
      ),
      info_descrition: 'Please fill the necessary information',
    },
    about: 'Some information about the field 4',
  },
  // {
  //   label: 'Complete Intergration',
  //   description: `Final Step`,
  //   info: {
  //     title: 'Complete Submission',
  //     input: (
  //       <TextField
  //         sx={{
  //           width: '80%',
  //         }}
  //         helperText="Please enter your name"
  //         label="Name"
  //       />
  //     ),
  //     info_descrition: 'Please fill the necessary information',
  //   },
  //   about: 'Some information about the field 5',
  // },
]
