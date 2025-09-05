import { createContext, type Dispatch, type SetStateAction } from "react"

type SelectedRegionContextType = {
  selectedRegion: string
  setSelectedRegion: Dispatch<SetStateAction<string>>
}

export const SelectedRegionContext = createContext<SelectedRegionContextType>({
  selectedRegion: sessionStorage.getItem("selected-Region") || "",
  setSelectedRegion: () => {},
})
