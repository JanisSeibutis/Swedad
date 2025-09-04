import type { IAd } from "../models/IAd"

export const getAds = async (params: string) => {
  return await get<IAd[]>(`${BASE_URL}${params}`)
}

export const getAd = async (id: string) => {
  return await get<IAd>(`${BASE_URL}/${id}`)
}
