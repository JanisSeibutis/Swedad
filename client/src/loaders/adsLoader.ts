import type { IAd } from "../models/IAd"
import type { LoaderFunctionArgs } from "react-router"

import { getAds } from "../services/adService"
import type { IRegion } from "../models/IReagion"
import type { ICategory } from "../models/ICategory"

export type AdsLoader = {
  ads: IAd[]
}

export const adsLoader = async ({
  params,
  request,
}: LoaderFunctionArgs): Promise<AdsLoader> => {
  const url = new URL(request.url)
  const region = params.region
  const category = params.category
  const searchText = url.searchParams.get("searchText")

  const regions = JSON.parse(sessionStorage.get("regions") || []) as IRegion[]
  const categories = JSON.parse(
    sessionStorage.get("categories") || []
  ) as ICategory[]
  let getAdsParams = ""

  if (region) {
    const regionId = regions.find((r) => r.name.toLowerCase() === region)?.id
    if (regionId !== undefined) {
      getAdsParams = regionId
    }
  }

  if (category) {
    const categoryId = categories.find(
      (c) => c.name.toLowerCase() === category
    )?.id
    if (categoryId !== undefined) {
      getAdsParams += `,${categoryId}`
    }
  }

  if (searchText) {
    getAdsParams += `,${searchText}`
  }

  const ads = (await getAds(getAdsParams)) || []

  return { ads }
}
