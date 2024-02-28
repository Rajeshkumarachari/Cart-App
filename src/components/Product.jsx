/* eslint-disable react/prop-types */
import "./Product.css";
const Product = ({ value }) => {
  return (
    <div className="product">
      <div className="img">
        <img src={value?.image} alt={value?.name} />
      </div>
      <div className="details">
        <h3>{value?.name} </h3>
        <p>Price Rs:{value?.caloriesPerServing} </p>
        <button> Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
