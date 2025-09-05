import { Logo } from "./Logo"
import { NavCategoryList } from "./NavCategoryList"
import "./Navigation.css"
import { NewAddBtn } from "./Buttons/NewAddBtn"
import { Iconbar } from "./Icons/Iconbar"
import { CloseNewAds } from "./Buttons/CloseNewAds"

import { useLocation } from "react-router"
import { slugifiedSelectedRegion } from "../utils/selectedRegion"

export const Navigation = () => {
  const location = useLocation()
  const regionSlug = slugifiedSelectedRegion()

  const showNavElements = location.pathname === "/annonser/skapa-annons"

  return (
    <div className={`header-wrap ${showNavElements ? "newads-open" : ""}`}>
      <Logo />
      {!showNavElements && (
        <>
          <NavCategoryList />
          <NewAddBtn />
          <Iconbar selectedRegion={regionSlug} />
        </>
      )}
      {showNavElements && <CloseNewAds />}
    </div>
  )
}
