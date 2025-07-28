import type { ICategory } from "./ICategory"
import type { IImage } from "./IImage"
import type { IRegion } from "./IReagion"
import type { IUser } from "./IUser"

export interface IAds {
  id: string
  userId: string
  categoryId: string
  regionId: string
  title: string
  description: string
  price: number
  location: string
  createdAt: string
  updatedAt: string
  images?: IImage[]
  user?: IUser
  category?: ICategory
  region?: IRegion
}
