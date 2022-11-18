import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  border-bottom: 1px solid #bdbdbd;
  padding-top: 1.22rem;
  padding-bottom: 1.22rem;
`

export const Content = styled.div`
  width: 50%;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0.5rem;

  margin-left: auto;
  margin-right: auto;
`

export const TextContent = styled.div`
  text-align: left;

  h1 {
    font-size: 2rem;
    font-weight: 700;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1rem;
  }
`