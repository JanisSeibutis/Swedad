import { useState } from "react"
import { useFetchCategoriesReagions } from "../hooks/useFetchCategoriesReagions"
import { RegionSelect } from "./RegionSelect"

export const RegionSelectContainer = () => {
  const { regions } = useFetchCategoriesReagions()
  const DEFAULT_REGION_ID = "cb1ecd19-6420-459b-8e70-52934a0a4a40"

  if (!regions || regions.length === 0) return null
  const defaultRegion = regions.find((r) => r.id === DEFAULT_REGION_ID)
  const otherReagions = regions
    .filter((r) => r.id !== DEFAULT_REGION_ID)
    .sort((a, b) => a.name.localeCompare(b.name, "sv"))

  const sortedRegions = defaultRegion
    ? [defaultRegion, ...otherReagions]
    : otherReagions

  const storedSelectedRegion = sessionStorage.getItem("selected-Region")

  const [selected, setSelected] = useState(
    storedSelectedRegion ? storedSelectedRegion : defaultRegion!.id
  )
  console.log(regions)

  return (
    <RegionSelect
      selected={selected}
      setSelected={setSelected}
      sortedRegions={sortedRegions}
    />
  )
}
