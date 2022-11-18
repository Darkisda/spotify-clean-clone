import styled, { BreakPointMapper } from "styled-components";

interface Props {
  size?: BreakPointMapper
}

export const Container = styled.div<Props>`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  ${props => {
    switch (props.size) {
      case "xs":
        return `
          max-width: ${props.theme.breakPoints.xs}
        `
      case "sm":
        return `
          max-width: ${props.theme.breakPoints.sm}
        `
      case "md":
        return `
          max-width: ${props.theme.breakPoints.md}
        `
      case "lg":
        return `
          max-width: ${props.theme.breakPoints.lg}
        `
      case "xl":
        return `
          max-width: ${props.theme.breakPoints.xl}
        `
    }
  }}
`