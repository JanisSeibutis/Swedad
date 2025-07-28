import type { IAd } from "../models/IAd"
import type { LoaderFunctionArgs } from "react-router"

import { getAd } from "../services/adService"

export type AdLoader = {
  ad: IAd
}

export const adLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<AdLoader> => {
  const { id } = params

  if (id) {
    const ad = await getAd(id)
    return { ad }
  }

  throw new Error("No ad ID provided")
}
