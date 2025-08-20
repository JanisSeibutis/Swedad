import { SearchIcon } from "../Icons/SearchIcon"
import { RegionSelectContainer } from "../RegionSelectContainer"
import "./SearchAdsForm.css"

export const SearchAdsForm = () => {
  return (
    <div className="hero-wrap">
      <form className="search-form">
        <div className="form-wrap">
          <span className="search">Sök</span>
          <div className="searchinput-wrap">
            <SearchIcon />
            <input
              type="text"
              className="search-input"
              placeholder="Vad vill du söka efter?"
            />
          </div>
          <span className="search">Välj plats</span>
          <div className="regioninput-wrap">
            <RegionSelectContainer />
          </div>
        </div>
      </form>
    </div>
  )
}
