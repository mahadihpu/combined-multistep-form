import { CssBaseline, Grid, ThemeProvider } from '@mui/material'
import React from 'react'
import 'react-perfect-scrollbar/dist/css/styles.css'
import { BuildTheme } from './assets/global/Theme-variable'
import HorizontalStepForm from './components/CombinedStepForm/HorizontalStepForm'
import FullLayout from './theme/layouts/full-layout/FullLayout'
const App = () => {
  const customizer = {
    direction: 'ltr',
    theme: 'RED_THEME',
    activeMode: 'dark',
  }
  const theme = BuildTheme(customizer)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container spacing={1}>
        <FullLayout
          customizer={customizer}
          children={
            <>
              <HorizontalStepForm />
            </>
          }
        />
      </Grid>
    </ThemeProvider>
  )
}

export default App
