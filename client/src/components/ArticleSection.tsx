import { sectionCards } from "../data/sectionCardsData"
import { SelectRightIcon } from "./Icons/SelectRightIcon"
import { StyledHthree, StyledHtwo } from "./styled/Headers"
import { StyledImage } from "./styled/Image"
import { StyledP } from "./styled/P"
import { StyledSpan } from "./styled/Spans"
import {
  StlyledCard,
  StyledBanner,
  StyledCards,
  StyledHeader,
  StyledSection,
  StyledTextContainer,
} from "./styled/Wrappers"

export const ArticleSection = () => {
  return (
    <>
      <StyledBanner />
      <StyledSection>
        <StyledHeader>
          <StyledHtwo>Hitta din bil på Swedad</StyledHtwo>
          <StyledSpan>
            Allt om bilar
            <SelectRightIcon margin="0" />
          </StyledSpan>
        </StyledHeader>
        <StyledCards>
          <StlyledCard>
            <StyledImage
              src={sectionCards[0].imageSrc}
              alt=""
              width={"200px"}
              style={{ width: "100%" }}
            />
            <StyledTextContainer>
              <StyledHthree>Är det dags för en ny bil?</StyledHthree>
              <StyledP>
                Vi är Sveriges största plattform för begagnade bilar. Här finns
                allt från nästan nya elbilar till äldre favoriter som
                fortfarande rullar på. Upptäck din nästa bil hos oss!
              </StyledP>
            </StyledTextContainer>
          </StlyledCard>
          <StlyledCard>
            <StyledImage
              src={sectionCards[1].imageSrc}
              alt=""
              width={"200px"}
            />
            <StyledTextContainer>
              <StyledHthree>Välkommen till Bilguiden</StyledHthree>
              <StyledP>
                Låt våra motorjournalister leda dig genom bilvärlden. Här finns
                biltester, guider och nyheter – allt för dig som vill köpa eller
                sälja bil.
              </StyledP>
            </StyledTextContainer>
          </StlyledCard>
          <StlyledCard>
            <StyledImage
              src={sectionCards[2].imageSrc}
              alt=""
              width={"200px"}
            />
            <StyledTextContainer>
              <StyledHthree>Värdera din bil online</StyledHthree>
              <StyledP>
                Planerar du att sälja bilen? Få en gratis värdering på Swedad
                genom att ange registreringsnumret – du får ett ungefärligt pris
                på bara några sekunder!
              </StyledP>
            </StyledTextContainer>
          </StlyledCard>
        </StyledCards>
      </StyledSection>
      <StyledSection>
        <StyledHeader>
          <StyledHtwo>Finda i hela Sverige</StyledHtwo>
          <StyledSpan>
            Mer om våra tjänster
            <SelectRightIcon margin="0" />
          </StyledSpan>
        </StyledHeader>
        <StyledCards>
          <StlyledCard>
            <StyledImage
              src={sectionCards[3].imageSrc}
              alt=""
              width={"200px"}
            />
            <StyledTextContainer>
              <StyledHthree>Fynda direkt med Köp nu</StyledHthree>
              <StyledP>
                Håll utkik efter annonser märkta med Köp nu-ikonen och säkra
                ditt fynd direkt – innan någon annan hinner före.
              </StyledP>
            </StyledTextContainer>
          </StlyledCard>
          <StlyledCard>
            <StyledImage
              src={sectionCards[4].imageSrc}
              alt=""
              width={"200px"}
            />
            <StyledTextContainer>
              <StyledHthree>Frakt från bara 29 kr</StyledHthree>
              <StyledP>
                Få dina saker levererade från hela Sverige från 29 kr. Gäller
                kläder, skor och barnartiklar. Avgift för köpskydd tillkommer.
              </StyledP>
            </StyledTextContainer>
          </StlyledCard>
          <StlyledCard>
            <StyledImage
              src={sectionCards[5].imageSrc}
              alt=""
              width={"200px"}
            />
            <StyledTextContainer>
              <StyledHthree>Sälj gratis till hela Sverige</StyledHthree>
              <StyledP>
                Använd våra extratjänster för att öka dina möjligheter att sälja
                och göra affären trygg för både dig och köparen.
              </StyledP>
            </StyledTextContainer>
          </StlyledCard>
        </StyledCards>
      </StyledSection>
      <StyledSection>
        <StyledSpan>
          Mer inspiration
          <SelectRightIcon margin="0" />
        </StyledSpan>
        <StyledCards>
          <StlyledCard>
            <StyledImage
              src={sectionCards[6].imageSrc}
              alt=""
              width={"200px"}
            />
            <StyledTextContainer>
              <StyledHthree>Det lönar sig att köpa begagnat</StyledHthree>
              <StyledP>
                Barnartiklar och elektronik är exempel på saker som ofta finns i
                toppskick – men till betydligt lägre priser på
                begagnatmarknaden.
              </StyledP>
            </StyledTextContainer>
          </StlyledCard>
          <StlyledCard>
            <StyledImage
              src={sectionCards[7].imageSrc}
              alt=""
              width={"200px"}
            />
            <StyledTextContainer>
              <StyledHthree>Hyr ut tryggt med Swedad Bostad</StyledHthree>
              <StyledP>
                Vi erbjuder säkerhetstjänster genom Quza för att göra
                uthyrningen enkel och trygg.
              </StyledP>
            </StyledTextContainer>
          </StlyledCard>
          <StlyledCard>
            <StyledImage
              src={sectionCards[8].imageSrc}
              alt=""
              width={"200px"}
            />
            <StyledTextContainer>
              <StyledHthree>Kreativa IKEA-hacks och DIY-projekt</StyledHthree>
              <StyledP>
                Ge ditt Beståskåp nytt liv, måla om din IVAR eller förvandla ett
                gammalt skåp till ett dockhus. Här hittar du tips för att göra
                hemmet mer personligt.
              </StyledP>
            </StyledTextContainer>
          </StlyledCard>
        </StyledCards>
      </StyledSection>
    </>
  )
}
