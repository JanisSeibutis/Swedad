import { slugifiedSelectedRegion } from "../utils/selectedRegion"
import { categoryCards } from "../data/categoryCardsData"
import "../components/CategoryPicker.css"
import { slugify } from "../utils/stringUtils"

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

        let url = `/annonser/${regionSlug}`

        if (c.category) url = `${url}/${slugify(c.category)}`

        if (c.subCategory) url = `${url}/${slugify(c.subCategory)}`

        return (
          <li key={i} className={itemClass}>
            <a href={url} className="category-link">
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
