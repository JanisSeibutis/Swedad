import { Logo } from "./Logo"
import { NavCategoryList } from "./NavCategoryList"
import "./Navigation.css"
import "./Buttons/NewAddBtn"
import { NewAddBtn } from "./Buttons/NewAddBtn"
import { Iconbar } from "./Icons/Iconbar"

export const Navigation = () => {
  return (
    <header>
      <div className="header-wrap">
        <Logo />
        <NavCategoryList />
        <NewAddBtn />
        <Iconbar />
      </div>
    </header>
  )
}
