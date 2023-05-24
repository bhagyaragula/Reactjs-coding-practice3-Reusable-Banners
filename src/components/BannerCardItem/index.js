// Write your code here.
import './index.css'
const BannerCardItem = props => {
  const {bannerCards} = props
  const {headerText, description, className} = bannerCards
  return (
    <li className={`${className} banner-card-container`}>
      <div>
        <h1 className="banner-text">{headerText}</h1>
        <p className="description">{description}</p>
        <button class="show-button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
