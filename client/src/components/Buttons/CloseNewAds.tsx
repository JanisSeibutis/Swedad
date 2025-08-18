import { Link } from "react-router"
import "./CloseNewAds.css"

export const CloseNewAds = () => {
  return (
    <Link className="close-newads" to={"/"}>
      <button className="close-btn">Avbryt</button>
    </Link>
  )
}
