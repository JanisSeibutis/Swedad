import { useState } from "react"
import { useFetchCategoriesReagions } from "../hooks/useFetchCategoriesReagions"
import { CategoryDialog } from "./CategoryDialog"
import { NavCategorySelect } from "./NavCategorySelect"
import { DialogContext } from "../contexts/DialogContext"

export const NavCategoryList = () => {
  const { categories, subCategories } = useFetchCategoriesReagions()
  const [selectedRegion, setSelectedRegion] = useState("hela_sverige")

  const [isOpen, setIsOpen] = useState(false)

  return (
    <DialogContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="categoryList">
        <NavCategorySelect />
        <CategoryDialog />
      </div>
    </DialogContext.Provider>
  )
}
