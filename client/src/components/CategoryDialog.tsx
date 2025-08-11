import { DialogContext } from "../contexts/DialogContext"
import { useContext } from "react"
import { useFetchCategoriesReagions } from "../hooks/useFetchCategoriesReagions"

export const CategoryDialog = () => {
  const { isOpen, setIsOpen } = useContext(DialogContext)
  const { categories, subCategories } = useFetchCategoriesReagions()

  const allItems = [...categories]

  const col1 = [
    {
      id: "special-alla-annonser",
      name: "Alla annonser på Blocket",
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640"
                        className="chevron-right"
                      >
                        <path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z" />
                      </svg>
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
