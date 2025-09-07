import styled from "styled-components"

const StyledDiv = styled.div`
  max-width: 61.25rem;
  margin: 0 auto;
  box-sizing: border-box;
  color: black;
`

export const StyledBanner = styled(StyledDiv)`
  height: 13rem;
  margin-bottom: 1.5rem;
  padding: 0 1rem;
`
export const StyledSection = styled(StyledDiv)`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  @media (min-width: 992px) {
    padding: 1.5rem 0;
  }
`
export const StyledHeader = styled.div`
  width: 100%;
`

export const StyledCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex: 1;
  gap: 1rem;
`
export const StlyledCard = styled.div`
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 0px 0px;
  background-color: rgb(255, 255, 255);
  border-radius: 0.25rem;
  overflow: hidden;
`
export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 1rem;
`
