import { useEffect, useState, type Dispatch, type SetStateAction } from "react"
import { useFetchCategoriesReagions } from "../hooks/useFetchCategoriesReagions"
import { RegionSelect } from "./RegionSelect"

type Props = {
  setSelectedRegion: Dispatch<SetStateAction<string>>
}

export const RegionSelectContainer = ({ setSelectedRegion }: Props) => {
  const { regions } = useFetchCategoriesReagions()

  const defaultRegionId = import.meta.env.VITE_DEFAULT_REGION_ID

  if (!regions || regions.length === 0) return null
  const defaultRegion = regions.find((r) => r.id === defaultRegionId)
  const otherReagions = regions
    .filter((r) => r.id !== defaultRegionId)
    .sort((a, b) => a.name.localeCompare(b.name, "sv"))

  const sortedRegions = defaultRegion
    ? [defaultRegion, ...otherReagions]
    : otherReagions

  const storedSelectedRegion = sessionStorage.getItem("selected-Region")

  const [selected, setSelected] = useState(
    storedSelectedRegion ? storedSelectedRegion : defaultRegion!.id
  )

  useEffect(() => {
    const selectedRegion = regions.find((r) => r.id === selected)
    if (selectedRegion) setSelectedRegion(selectedRegion.id)
  }, [selected, regions, setSelectedRegion])

  return (
    <RegionSelect
      selected={selected}
      setSelected={setSelected}
      sortedRegions={sortedRegions}
    />
  )
}
