import { Link } from "react-router-dom";
import { cartContext } from "../App";
import "./Header.css";

import { LOGO_HOME } from "../constant";
import { useContext } from "react";

const Header = () => {
  const { cart } = useContext(cartContext);

  return (
    <div className="navbar">
      <div className="logo">
        <div>
          <img src={LOGO_HOME} alt="BANNER" />{" "}
        </div>
        <p className=" name">Food Cart</p>
      </div>
      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/cart">
            <span className="Count">{cart.length}</span> Cart Bar
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
