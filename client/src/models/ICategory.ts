import type { IAd } from "./IAd"
import type { ISubCategory } from "./ISubCategory"

export interface ICategory {
  id: string
  name: string
  subCategories: ISubCategory[]
  ads?: IAd[]
}
