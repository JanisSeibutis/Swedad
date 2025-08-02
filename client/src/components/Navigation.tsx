import { Logo } from "./Logo"
import { NavCategoryList } from "./NavCategoryList"
import "./Navigation.css"

export const Navigation = () => {
  return (
    <header>
      <Logo />
      <NavCategoryList />
    </header>
  )
}
