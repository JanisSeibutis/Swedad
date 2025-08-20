import { GeoIcon } from "./Icons/GeoIcon"
import { SelectDownIcon } from "./Icons/SelectDownIcon"
import type { IRegion } from "../models/IReagion"
import { type ChangeEvent } from "react"

type Props = {
  selected: string
  sortedRegions: IRegion[]
  setSelected: (e: string) => void
}

export const RegionSelect = ({
  selected,
  sortedRegions,
  setSelected,
}: Props) => {
  const selectRegion = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value)
    sessionStorage.setItem("selected-Region", e.target.value)
  }

  return (
    <label>
      <GeoIcon />
      <select
        className="region-select"
        value={selected}
        onChange={selectRegion}
      >
        {sortedRegions?.map((r) => (
          <option key={r.id} value={r.id}>
            {r.name}
          </option>
        ))}
      </select>

      <SelectDownIcon className="region-select-icon" />
    </label>
  )
}
