import { Link } from "react-router"
import "./NewAddBtn.css"

export const NewAddBtn = () => {
  return (
    <Link to="/ads/create-ad">
      <button className="custom-button">
        <span className="icon">+</span> Lägg in annons
      </button>
    </Link>
  )
}
