import { slugifiedSelectedRegion } from "../utils/selectedRegion"
import { categoryCards } from "../data/categoryCardsData"
import "../components/CategoryPicker.css"

export const MainCategoryList = () => {
  const regionSlug = slugifiedSelectedRegion()

  return (
    <>
      {categoryCards.map((c, i) => {
        const itemClass = [
          "category-listitem",
          i === 0 ? "start" : "",
          i === categoryCards.length - 1 ? "end" : "",
        ]
          .join(" ")
          .trim()
        return (
          <li key={i} className={itemClass}>
            <a href={`/${regionSlug}`} className="category-link">
              <div className="category-image-wrapper">
                <img
                  src={c.imageSrc}
                  alt={c.text}
                  className={`category-image ${c.className}`}
                />
              </div>
              <span className="category-name">{c.text}</span>
            </a>
          </li>
        )
      })}
    </>
  )
}
