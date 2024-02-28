/* eslint-disable react/prop-types */
import { useEffect, useState, useContext } from "react";
import { cartContext } from "../App";

import "./ViewCart.css";
// eslint-disable-next-line no-unused-vars
const ViewCart = () => {
  const [total, setTotal] = useState(0);
  const { cart } = useContext(cartContext);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + parseInt(curr.caloriesPerServing), 0)
    );
  }, [cart]);
  return (
    <div className="Main">
      <h1 className=" CartHeading"> Your Cart Details</h1>
      <div className="CartContainer">
        {cart &&
          cart.map((value) => (
            <div className="CartProduct" key={value.id}>
              <div className="img">
                <img src={value?.image} alt="ddsds" />
              </div>
              <div className="CartProductDetails">
                <h3> {value.name} </h3>
                <p>Price {value?.caloriesPerServing} </p>
              </div>
            </div>
          ))}
      </div>
      <h2 className="CartAmount">Total Amount : {total}</h2>
    </div>
  );
};

export default ViewCart;
