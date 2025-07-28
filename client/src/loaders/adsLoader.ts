import type { IAd } from "../models/IAd"
import type { LoaderFunctionArgs } from "react-router"

import { getAds } from "../services/adService"

export type AdsLoader = {
  ads: IAd[]
}

export const adsLoader = async ({
  request,
}: LoaderFunctionArgs): Promise<AdsLoader> => {
  const url = new URL(request.url)
  const region = url.searchParams.get("region")
  const category = url.searchParams.get("category")

  let query = []
  if (region) query.push(`region=${region}`)
  if (category) query.push(`category=${category}`)

  const queryString = query.length ? `?${query.join("&")}` : ""

  const ads = await getAds(queryString)

  return { ads }
}
