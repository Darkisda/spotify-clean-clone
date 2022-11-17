import { ThemeProvider } from "styled-components"
import { SignIn } from "@application/pages/sign-in"
import { defaultTheme } from "@ui/theme"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SignIn />
    </ThemeProvider>
  )
}

export default App
