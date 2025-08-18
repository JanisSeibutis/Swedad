import { ForetagsInfo } from "../../components/Icons/ForetagsInfo"
import { cards } from "../../data/cardsData"
import "./CreateAd.css"

export const CreateAd = () => {
  return (
    <div className="ad-category-wrap">
      <h1>Vad vill du annonsera?</h1>
      <a href="/" className="foretags-info">
        <div className="text-wrap">
          Information för dig som är företag
          <ForetagsInfo />
        </div>
      </a>

      <div className="list-cards-wrap">
        {cards.map((card, i) => {
          return (
            <a className="list-card" key={i}>
              <div className="listcard-icon">
                <img
                  className="listcard-img"
                  src={card.imageSrc}
                  alt={card.text}
                ></img>
              </div>
              <div className="listcard-text">
                <div className="listcard-category">{card.text}</div>
                <div className="listcard-price">
                  {card.priceText && card.priceText} {card.price}{" "}
                  {card.currency}
                </div>
                {card.subtext && (
                  <span className="listcard-subtext">{card.subtext}</span>
                )}
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}
