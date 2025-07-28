import { useLoaderData } from "react-router"
import type { AdLoader } from "../loaders/adLoader.ts"

export const Ad = () => {
  const { ad } = useLoaderData<AdLoader>()

  return (
    <>
      (
      <div key={ad.id}>
        <span>{ad.title}</span>
        <p>{ad.description}</p>
      </div>
      )
    </>
  )
}
