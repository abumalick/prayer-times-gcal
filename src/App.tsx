import React from 'react'
import { ThemeProvider } from 'theme-ui'
import PrayerTimesGCal from './screens/PrayerTimesGCal'
import theme from './theme'
const App: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <PrayerTimesGCal />
    </ThemeProvider>

  )
}

export default App
