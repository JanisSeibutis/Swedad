import { DialogContext } from "../contexts/DialogContext"
import { useContext, useEffect } from "react"
import { useFetchCategoriesReagions } from "../hooks/useFetchCategoriesReagions"
import { useLocation } from "react-router"
import { SelectRightIcon } from "./Icons/SelectRightIcon"

export const CategoryDialog = () => {
  const { isOpen, setIsOpen } = useContext(DialogContext)
  const { categories, subCategories } = useFetchCategoriesReagions()
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [location, setIsOpen])

  const allItems = [...categories]

  const col1 = [
    {
      id: "special-alla-annonser",
      name: "Alla annonser på Swedad",
      special: true,
    },
    ...allItems.slice(0, 1),
  ]
  const col2 = allItems.slice(1, 3)
  const col3 = allItems.slice(3, 5)
  const col4 = allItems.slice(5, 9)

  return (
    <>
      <dialog open={isOpen} className="dialog">
        <ul className="category-ul">
          {[col1, col2, col3, col4].map((col, index) => (
            <li key={index} className="category-column">
              <ul>
                {col.map((c) => (
                  <li
                    key={c.id}
                    className={`category-list${
                      c.special ? " special-list" : ""
                    }`}
                  >
                    <div className="category-wrap">
                      <a href="">{c.name}</a>
                      <SelectRightIcon />
                    </div>
                    {!c.special && (
                      <ul className="sub-ul">
                        {subCategories
                          .filter((sc) => sc.categoryId === c.id)
                          .map((sc) => (
                            <li key={sc.id} className="sub-list">
                              <a href="">{sc.name}</a>
                            </li>
                          ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </dialog>
    </>
  )
}
