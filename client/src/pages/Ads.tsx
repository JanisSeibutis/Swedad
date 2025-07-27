import axios from "axios"
import { useEffect, useState } from "react"

export const Ads = () => {
  const [ads, setAds] = useState([])

  useEffect(() => {
    if (ads.length > 0) return

    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/ads")

        setAds(response.data)
      } catch (err) {
        console.error("Failed to fetch ads:", err)
      }
    }
    getData()
  })
  return (
    <>
      {ads.map((ad) => {
        return (
          <div key={ad.id}>
            <span>{ad.title}</span>
            <p>{ad.description}</p>
          </div>
        )
      })}
    </>
  )
}
