import styled from "styled-components";
import { Colors } from '@ui/theme'

export type StyledProps = {
  flat?: boolean
}

export const SButton = styled.button<StyledProps>`
  width: ${props => props.flat && '100%' };
  height: 3rem;
  padding-left: ${props => !props.flat && '1.75rem'};
  padding-right: ${props => !props.flat && '1.75rem'};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0.5rem;

  border-radius: 100px;

  backdrop-filter: blur(18px);
  background-clip: padding-box;
  
  border: 2px solid rgba(21,21,21, 0.75);
  background-color: ${Colors.white};

  transition: all 150ms ease-in-out;

  color: ${Colors.black};

  cursor: pointer;

  &:hover {
    border-color: black;
  }

  h4 {
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.17rem;
  }
`