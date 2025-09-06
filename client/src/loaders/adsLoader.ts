import type { IAd } from "../models/IAd"
import type { LoaderFunctionArgs } from "react-router"

import { getAds } from "../services/adService"
import type { IRegion } from "../models/IReagion"
import type { ICategory } from "../models/ICategory"
import { slugify } from "../utils/stringUtils"
import type { ISubCategory } from "../models/ISubCategory"

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
  const subCategorySlug = params.subcategory
  const searchText = url.searchParams.get("searchText") ?? undefined

  let regionId: string | undefined
  let categoryId: string | undefined
  let subCategoryId: string | undefined

  const regions = JSON.parse(
    sessionStorage.getItem("regions") || "[]"
  ) as IRegion[]
  const categories = JSON.parse(
    sessionStorage.getItem("categories") || "[]"
  ) as ICategory[]

  const subCategories = JSON.parse(
    sessionStorage.getItem("subCategories") || "[]"
  ) as ISubCategory[]

  if (regionSlug) {
    regionId = regions.find((r) => slugify(r.name) === regionSlug)?.id
  }

  if (categorySlug) {
    categoryId = categories.find((c) => slugify(c.name) === categorySlug)?.id
  }

  console.log(categoryId)

  if (subCategorySlug) {
    subCategoryId = subCategories.find(
      (sc) => slugify(sc.name) === subCategorySlug
    )?.id
  }

  const ads =
    (await getAds(regionId, categoryId, subCategoryId, searchText)) || []
  return { ads }
}
