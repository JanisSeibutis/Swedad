import { SelectRightIcon } from "./Icons/SelectRightIcon"
import { StyledHthree } from "./styled/Headers"
import { StyledSpan } from "./styled/Spans"
import {
  StlyledCard,
  StyledBanner,
  StyledCards,
  StyledHeader,
  StyledSection,
} from "./styled/Wrappers"

export const ArticleSection = () => {
  return (
    <>
      <StyledBanner />
      <StyledSection>
        <StyledHeader>
          <StyledHthree>Hitta din bil på Swedad</StyledHthree>
          <StyledSpan>
            Allt om bilar
            <SelectRightIcon margin="0" />
          </StyledSpan>
        </StyledHeader>
        <StyledCards>
          <StlyledCard></StlyledCard>
          <StlyledCard></StlyledCard>
          <StlyledCard></StlyledCard>
        </StyledCards>
      </StyledSection>
      <StyledSection>
        <StyledHeader>
          <StyledHthree>Finda i hela Sverige</StyledHthree>
          <StyledSpan>
            Mer om våra tjänster
            <SelectRightIcon margin="0" />
          </StyledSpan>
        </StyledHeader>
        <StyledCards>
          <StlyledCard></StlyledCard>
          <StlyledCard></StlyledCard>
          <StlyledCard></StlyledCard>
        </StyledCards>
      </StyledSection>
      <StyledSection>
        <StyledSpan>
          Mer inspiration
          <SelectRightIcon margin="0" />
        </StyledSpan>
        <StyledCards>
          <StlyledCard></StlyledCard>
          <StlyledCard></StlyledCard>
          <StlyledCard></StlyledCard>
        </StyledCards>
      </StyledSection>
    </>
  )
}
