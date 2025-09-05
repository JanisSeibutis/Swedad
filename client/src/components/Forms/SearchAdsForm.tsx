import { useContext, useState, type FormEvent } from "react"
import { SearchIcon } from "../Icons/SearchIcon"
import { RegionSelectContainer } from "../RegionSelectContainer"
import "./SearchAdsForm.css"
import { Checkmark } from "../Icons/Checkmark"
import { FindAds } from "../Buttons/FindAds"
import { useNavigate } from "react-router"
import { SelectedRegionContext } from "../../contexts/SelectedRegionContext"
import { slugifiedSelectedRegion } from "../../utils/selectedRegion"

export const SearchAdsForm = () => {
  const [isActive, setIsActive] = useState(false)
  const [search, setSearch] = useState("")
  const { setSelectedRegion } = useContext(SelectedRegionContext)
  const regionSlug = slugifiedSelectedRegion()

  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const path = search
      ? `/annonser/${regionSlug}?searchText=${encodeURIComponent(search)}`
      : `/annonser/${regionSlug}`

    navigate(path)
  }

  return (
    <div className="hero-wrap">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-wrap">
          <span className="search">Sök</span>
          <div className="searchinput-wrap">
            <SearchIcon />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="search-input"
              placeholder="Vad vill du söka efter?"
            />
          </div>
          <span className="search">Välj plats</span>
          <div className="regioninput-wrap">
            <RegionSelectContainer setSelectedRegion={setSelectedRegion} />
          </div>
          <span className="search">Eller hitta saker som kan skickas</span>
          <div className="shipping">
            <label className="shipping-wrap">
              <span
                className={
                  isActive ? "custom-checkbox checked" : "custom-checkbox"
                }
              >
                {isActive && <Checkmark />}
              </span>
              <input
                type="checkbox"
                checked={isActive}
                onChange={() => setIsActive(!isActive)}
              />
              Visa bara annonser med frakt
            </label>
          </div>
          <FindAds />
        </div>
      </form>
    </div>
  )
}
