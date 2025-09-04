import type { IAd } from "../models/IAd"
import type { LoaderFunctionArgs } from "react-router"

import { getAds } from "../services/adService"
import type { IRegion } from "../models/IReagion"
import type { ICategory } from "../models/ICategory"
import { slugify } from "../utils/stringUtils"

export type AdsLoader = {
  ads: IAd[]
}

export const adsLoader = async ({
  params,
  request,
}: LoaderFunctionArgs): Promise<AdsLoader> => {
  const url = new URL(request.url)
  const regionSlug = params.region
  const categorySlug = params.category
  const searchText = url.searchParams.get("searchText") ?? undefined

  let regionId: string | undefined
  let categoryId: string | undefined

  const regions = JSON.parse(
    sessionStorage.getItem("regions") || "[]"
  ) as IRegion[]
  const categories = JSON.parse(
    sessionStorage.getItem("categories") || "[]"
  ) as ICategory[]

  if (regionSlug) {
    regionId = regions.find((r) => slugify(r.name) === regionSlug)?.id
  }

  if (categorySlug) {
    categoryId = categories.find((c) => slugify(c.name) === categorySlug)?.id
  }

  const ads = (await getAds(regionId, categoryId, searchText)) || []

  return { ads }
}
