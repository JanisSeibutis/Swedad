import type { IAd } from "./IAd"
import type { ICategory } from "./ICategory"

export interface ISubCategory {
  id: string
  name: string
  categoryId: string
  category: ICategory
  ads: IAd[]
}
