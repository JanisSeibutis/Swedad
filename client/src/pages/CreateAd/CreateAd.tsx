import type { ReactNode } from "react"
import { ForetagsInfo } from "../../components/Icons/ForetagsInfo"
import "./CreateAd.css"
import ForHemmetIcon from "../../assets/images/sofa.png"
import FritidIcon from "../../assets/images/hobby.png"
import ElektronikIcon from "../../assets/images/arcade.png"
import PersonligtIcon from "../../assets/images/backpack.png"
import OvrigtIcon from "../../assets/images/box.png"
import FordonIcon from "../../assets/images/car.png"
import BostadIcon from "../../assets/images/house.png"
import AffarsverksamhetIcon from "../../assets/images/store.png"

type Card = {
  imageSrc: string
  text: string
  priceText?: string
  price?: number
  currency?: string
  subtext?: string
}

export const CreateAd = () => {
  const cards: Card[] = [
    {
      imageSrc: ForHemmetIcon,
      text: "För hemmet",
      price: 0,
      currency: "kr",
    },
    {
      imageSrc: FritidIcon,
      text: "Fritid & hobby",
      price: 0,
      currency: "kr",
      subtext: "T.ex. elcyklar, djur, musik- eller sportutrustning",
    },
    {
      imageSrc: ElektronikIcon,
      text: "Elektronik",
      price: 0,
      currency: "kr",
    },
    {
      imageSrc: PersonligtIcon,
      text: "Personligt",
      subtext: "T.ex. kläder, skor, barnmöbler eller leksaker",
      price: 0,
      currency: "kr",
    },
    {
      imageSrc: OvrigtIcon,
      text: "Övrigt",
      price: 0,
      currency: "kr",
    },
    {
      imageSrc: FordonIcon,
      text: "Fordon",
    },
    {
      imageSrc: BostadIcon,
      text: "Bostad",
      subtext: "T.ex. lägenheter, utlandsboende eller fritidsboende",
      priceText: "från",
      price: 0,
      currency: "kr",
    },
    {
      imageSrc: AffarsverksamhetIcon,
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
                <img
                  className="listcard-img"
                  src={card.imageSrc}
                  alt={card.text}
                ></img>
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
