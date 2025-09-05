import { useContext } from "react"
import { useFetchCategoriesReagions } from "../hooks/useFetchCategoriesReagions"
import { SelectedRegionContext } from "../contexts/SelectedRegionContext"
import { slugify } from "./stringUtils"

export const slugifiedSelectedRegion = () => {
  const { regions } = useFetchCategoriesReagions()
  const { selectedRegion } = useContext(SelectedRegionContext)
  const foundSelectedRegion = regions.find((r) => r.id === selectedRegion)
  const regionSlug = foundSelectedRegion
    ? slugify(foundSelectedRegion.name)
    : ""
  return regionSlug
}
