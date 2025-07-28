import type { IAd } from "../models/IAd"

import { get } from "./serviceBase.ts"

const BASE_URL = `http://localhost:3000/ads`

export const getAds = async (params: string) => {
  return await get<IAd[]>(`${BASE_URL}?${params}`)
}

export const getAd = async (id: string) => {
  return await get<IAd>(`${BASE_URL}/${id}`)
}
