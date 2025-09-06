import "./CategoryPicker.css"
import { SelectRightIcon } from "./Icons/SelectRightIcon"
import { MainCategoryList } from "./MainCategoryList"

export const CategoryPicker = () => {
  return (
    <div className="category-picker-wrap">
      <div className="category-picker">
        <div className="category-select">
          <h2 className="category-picker-header">Upptäck våra kategorier</h2>
          <a href="/kategorier" className="categories-link">
            Alla kategorier
            <SelectRightIcon />
          </a>
        </div>
        <div className="categories-wrap">
          <ul className="categories-ul">
            <MainCategoryList />
          </ul>
        </div>
      </div>
    </div>
  )
}
