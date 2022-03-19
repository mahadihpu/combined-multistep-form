import { TextField } from '@mui/material'

export const verticalSteps = [
  {
    label: 'General Settings',
    description: `Browse and Upload`,
    info: {
      title: "Let's start with your name",
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
    about: 'Some information about the field 1',
  },
  {
    label: 'User Roaster',
    description: 'Browse and Upload',
    info: {
      title: 'What describes you?',
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
    about: 'Some information about the field 2',
  },
  {
    label: 'Gross Earnings',
    description: `Browse and Upload`,
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
    label: 'Net earnings',
    description: `Browse and Upload`,
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
  {
    label: 'Direct deposit updates',
    description: `Browse and Upload`,
    info: {
      title: 'Complete Submission',
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
    about: 'Some information about the field 5',
  },
  {
    label: 'Vault check',
    description: `Browse and Upload`,
    info: {
      title: 'Complete Submission',
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
    about: 'Some information about the field 5',
  },
]
