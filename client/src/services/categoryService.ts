import { get } from "./serviceBase.ts"
import type { ICategory } from "../models/ICategory.ts"

export const getCategory = async () => {
  return await get<ICategory[]>(`http://localhost:3000/category`)
}
