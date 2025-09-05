import { Navigation } from "./Navigation"
import { Footer } from "./Footer"
import { Main } from "./MainContent"
import { useState } from "react"
import { SelectedRegionContext } from "../contexts/SelectedRegionContext"

export const Layout = () => {
  const [selectedRegion, setSelectedRegion] = useState("")
  return (
    <SelectedRegionContext.Provider
      value={{ selectedRegion, setSelectedRegion }}
    >
      <header>
        <Navigation />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </SelectedRegionContext.Provider>
  )
}
