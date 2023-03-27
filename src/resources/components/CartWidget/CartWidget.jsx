import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./cartWidget.css";

library.add(faShoppingCart);

const CartWidget = (props) => {
  const itemCount = props.count || Math.floor(Math.random() * (12 - 3 + 1)) + 3;
  return (
    <div className="cart-container">
      <a href="#">
        <FontAwesomeIcon icon={faShoppingCart} />
        <div className="cart-number">
          <span className="number">{itemCount > 999 ? "999+" : itemCount}</span>
        </div>
      </a>
    </div>
  );
};
export default CartWidget;
