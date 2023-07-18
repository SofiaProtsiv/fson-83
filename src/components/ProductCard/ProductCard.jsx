import PropTypes from "prop-types";

const ProductCard = ({ id, price, title, image }) => {
  return (
    <li id={id}>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>${price}</p>
      </div>
    </li>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number,
  price: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
};
export default ProductCard;
