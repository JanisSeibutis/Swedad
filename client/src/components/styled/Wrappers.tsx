import styled from "styled-components"

const StyledDiv = styled.div`
  max-width: 61.25rem;
  margin: 0 auto;
  padding: 2rem 0;
  box-sizing: border-box;
  color: black;
`

export const StyledBanner = styled(StyledDiv)`
  height: 16.5rem;
`
export const StyledSection = styled(StyledDiv)`
  display: flex;
  flex-direction: column;
  height: 28rem;
`
export const StyledHeader = styled.div`
  height: 2.75rem;
  width: 100%;
  margin-bottom: 0.5rem;
`

export const StyledCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex: 1;
  gap: 1rem;
`
export const StlyledCard = styled.div`
  height: 100%;
`
