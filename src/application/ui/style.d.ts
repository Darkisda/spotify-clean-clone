import 'styled-components'

interface IPalette {
  main: string
  contrastText: string
}

declare module 'styled-components' {
  export type BreakPointsValues = {
    sm: string
    md: string
    lg: string
    xl: string
  }

  export type BreakPointMapper = | 'sm' | 'md' | 'lg' | 'xl'

  export interface DefaultTheme {
    borderRadius: string
    palette: {
      common: {
        black: string
        white: string
      }
    }
    breakPoints: BreakPointsValues
  }
}