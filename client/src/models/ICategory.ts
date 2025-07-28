import type { IAd } from "./IAd"

export interface ICategory {
  id: string
  name: string
  ads?: IAd[]
}
