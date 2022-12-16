// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} card-container`}>
      <div>
        <h1 className="heading">{title}</h1>
        <p className="description">{description}</p>
      </div>
      <img src={imgUrl} className="avatar" alt={title} />
    </li>
  )
}

export default CardItem
