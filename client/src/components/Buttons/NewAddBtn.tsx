import { Link } from "react-router"
import "./NewAddBtn.css"

export const NewAddBtn = () => {
  const handleClick = () => {}
  return (
    <Link to="/annonser/skapa-annons" onClick={handleClick}>
      <button className="custom-button">
        <span className="icon">+</span> Lägg in annons
      </button>
    </Link>
  )
}
