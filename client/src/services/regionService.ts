import { get } from "./serviceBase.ts"
import type { IRegion } from "../models/IReagion.ts"

export const getRegion = async () => {
  return await get<IRegion[]>(`http://localhost:3000/region`)
}
