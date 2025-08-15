import type { ReactNode } from "react"
import { ForetagsInfo } from "../../components/Icons/ForetagsInfo"
import { ForHemmet } from "../../components/Icons/ForHemmet"
import "./CreateAd.css"

type Card = {
  svg: ReactNode
  text: string
  priceText?: string
  price?: number
  currency?: string
  subtext?: string
}

export const CreateAd = () => {
  const cards: Card[] = [
    {
      svg: <ForHemmet />,
      text: "För hemmet",
      price: 0,
      currency: "kr",
    },
    {
      svg: <ForHemmet />,
      text: "Fritid & hobby",
      price: 0,
      currency: "kr",
      subtext: "T.ex. elcyklar, djur, musik- eller sportutrustning",
    },
    {
      svg: <ForHemmet />,
      text: "Elektronik",
      price: 0,
      currency: "kr",
    },
    {
      svg: <ForHemmet />,
      text: "Personligt",
      subtext: "T.ex. kläder, skor, barnmöbler eller leksaker",
      price: 0,
      currency: "kr",
    },
    {
      svg: <ForHemmet />,
      text: "Övrigt",
      price: 0,
      currency: "kr",
    },
    {
      svg: <ForHemmet />,
      text: "Fordon",
    },
    {
      svg: <ForHemmet />,
      text: "Bostad",
      subtext: "T.ex. lägenheter, utlandsboende eller fritidsboende",
      priceText: "från",
      price: 0,
      currency: "kr",
    },
    {
      svg: <ForHemmet />,
      text: "Affärsverksamhet (företag)",
      subtext: "T.ex. inventarier, maskiner, lokaler eller tjänster",
    },
  ]

  return (
    <div className="ad-category-wrap">
      <h1>Vad vill du annonsera?</h1>
      <a href="" className="foretags-info">
        <div className="text-wrap">
          Information för dig som är företag
          <ForetagsInfo />
        </div>
      </a>

      <div className="list-cards-wrap">
        {cards.map((card, i) => {
          return (
            <a className="list-card" key={i}>
              <div className="listcard-icon">
                <span>
                  <ForHemmet />
                </span>
              </div>
              <div className="listcard-text">
                <div className="listcard-category">{card.text}</div>
                <div className="listcard-price">
                  {card.priceText && card.priceText} {card.price}{" "}
                  {card.currency}
                </div>
                {card.subtext && (
                  <span className="listcard-subtext">{card.subtext}</span>
                )}
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}
