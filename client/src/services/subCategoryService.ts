import { get } from "./serviceBase.ts"
import type { ISubCategory } from "../models/ISubCategory.ts"

export const getSubCategories = async () => {
  return await get<ISubCategory[]>(`http://localhost:3000/subcategory`)
}
