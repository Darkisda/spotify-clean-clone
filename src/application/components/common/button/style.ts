import styled from "styled-components";

interface Props {
  color?: string
}

export const SButton = styled.button<Props>`
  width: 100%;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0.5rem;

  border: 1px solid ${props => props.color ? props.color : '#828282'};
  border-radius: 100px;

  h4 {
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.17rem;
  }
`