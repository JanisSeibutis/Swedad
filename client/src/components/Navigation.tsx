import { Logo } from "./Logo"
import { NavCategoryList } from "./NavCategoryList"
import "./Navigation.css"
import "./Buttons/NewAddBtn"
import { NewAddBtn } from "./Buttons/NewAddBtn"
import { Iconbar } from "./Icons/Iconbar"
import { CloseNewAds } from "./Buttons/CloseNewAds"

import { useLocation } from "react-router"

export const Navigation = () => {
  const location = useLocation()

  const showNavElements = location.pathname == "/ads/create-ad"
  return (
    <div className={`header-wrap ${showNavElements ? "newads-open" : ""}`}>
      <Logo />
      {!showNavElements && (
        <>
          <NavCategoryList />
          <NewAddBtn />
          <Iconbar />
        </>
      )}
      {showNavElements && <CloseNewAds />}
    </div>
  )
}
