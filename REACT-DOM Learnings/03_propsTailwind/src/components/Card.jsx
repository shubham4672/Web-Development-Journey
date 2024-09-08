import PropTypes from "prop-types";
function Card(props) {
  return (
    <div className='card h-screen flex items-center justify-center flex-col max-w-72 border-solid border-2 border-white-500'>
      <img
        src='https://images.pexels.com/photos/920147/pexels-photo-920147.jpeg?auto=compress&cs=tinysrgb&w=600'
        alt=''
      />
      <h1>{props.cardName}</h1>
      <p>{props.description}</p>
    </div>
  );
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Card;
