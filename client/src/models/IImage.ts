import type { IAd } from "./IAd"

export interface IImage {
  id: string
  url: string
  adId: string
  ad?: IAd
}
