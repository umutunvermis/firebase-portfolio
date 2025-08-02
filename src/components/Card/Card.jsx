import './Card.css'
import PropTypes from 'prop-types'

const defaultProps = { title: "Anonym", text: "Well, this is a card.", img: "https://cdn-icons-png.flaticon.com/512/4123/4123841.png" };
function Card(props) { 
  props = { ...defaultProps, ...props };
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={props.img} alt={props.title} className="card-image" />
      </div>
      <h2 className="card-title">{props.title}</h2>
      <p className="card-text">{props.text}</p>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string
};


export default Card
