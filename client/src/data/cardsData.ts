import ForHemmetIcon from "../assets/images/sofa.png"
import FritidIcon from "../assets/images/hobby.png"
import ElektronikIcon from "../assets/images/arcade.png"
import PersonligtIcon from "../assets/images/backpack.png"
import OvrigtIcon from "../assets/images/box.png"
import FordonIcon from "../assets/images/car.png"
import BostadIcon from "../assets/images/house.png"
import AffarsverksamhetIcon from "../assets/images/store.png"
import type { Card } from "../models/Card"

export const cards: Card[] = [
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
