import { useState } from "react"
import { Link, useLoaderData } from "react-router"
import type { AdsLoader } from "../loaders/adsLoader.ts"
import type { IAd } from "../models/IAd.ts"

export const Ads = () => {
  const { ads } = useLoaderData<AdsLoader>()

  const [adsInState, setAdsInState] = useState<IAd[]>(ads)
  return (
    <>
      {adsInState.map((ad: IAd) => {
        return (
          <div key={ad.id}>
            <p>{ad.description}</p>
            <Link to={`/ads/${ad.id}`}>
              <span>{ad.title}</span>
            </Link>
          </div>
        )
      })}
    </>
  )
}
