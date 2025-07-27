export interface Ad {
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
  images?: Image[]
  user?: User
  category?: Category
  region?: Region
}
