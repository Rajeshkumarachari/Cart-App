/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./Product.css";
import { cartContext } from "../App";

const Product = ({ value }) => {
  const { cart, setCart } = useContext(cartContext);
  const name =
    value?.name > 21 ? value.name.substring(0, 20) + "..." : value.name;

  const addCart = () => {
    setCart([...cart, value]);
  };
  const removeCart = () => {
    setCart(cart.filter((c) => c.id !== value.id));
  };

  return (
    <div className="product">
      <div className="img">
        <img src={value?.image} alt={value?.name} />
      </div>
      <div className="details">
        <h3>{name} </h3>
        <p>Price Rs:{value?.caloriesPerServing} </p>
        <div className="buttonParent">
          {cart.includes(value) ? (
            <button onClick={removeCart} className="removeButton">
              Remove from Cart
            </button>
          ) : (
            <button onClick={addCart} className="detailsButton">
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
