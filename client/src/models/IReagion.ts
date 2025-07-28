import type { IAd } from "./IAd"

export interface IRegion {
  id: string
  name: string
  ads?: IAd[]
}
