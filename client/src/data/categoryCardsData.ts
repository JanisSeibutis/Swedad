import ForHemmetIcon from "../assets/images/sofa.png"
import FritidIcon from "../assets/images/hobby.png"
import ElektronikIcon from "../assets/images/arcade.png"
import PersonligtIcon from "../assets/images/backpack.png"
import FordonIcon from "../assets/images/car.png"
import BostadIcon from "../assets/images/house.png"
import KladerIcon from "../assets/images/hoodie.png"
import BarnkladerIcon from "../assets/images/pijama.png"
import NybegagnadIcon from "../assets/images/phone.png"
import type { Card } from "../models/Card"

export const categoryCards: Card[] = [
  {
    imageSrc: FordonIcon,
    text: "Fordon",
    category: "fordon",
  },
  {
    imageSrc: KladerIcon,
    text: "Kläder skor",
    category: "personligt",
    subCategory: "kläder skor",
  },
  {
    imageSrc: BostadIcon,
    text: "Bostad",
    category: "bostad",
  },
  {
    imageSrc: ForHemmetIcon,
    text: "För hemmet",
    category: "för hemmet",
  },
  {
    imageSrc: BarnkladerIcon,
    text: "Barnkläder",
    className: "special-1",
    category: "personligt",
    subCategory: "barnkläder skor",
  },
  {
    imageSrc: PersonligtIcon,
    text: "Personligt",
    category: "personligt",
  },
  {
    imageSrc: ElektronikIcon,
    text: "Elektronik",
    category: "elektronik",
  },
  {
    imageSrc: FritidIcon,
    text: "Fritid hobby",
    category: "fritid hobby",
  },
  {
    imageSrc: NybegagnadIcon,
    text: "Nybegagnad elektronik",
    className: "special-2",
    category: "",
  },
]
