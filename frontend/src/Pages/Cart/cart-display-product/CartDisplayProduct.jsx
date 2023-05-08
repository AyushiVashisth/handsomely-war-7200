import { useState } from "react";

import "./CartDisplayProduct.css";
import { addItemQuantity, getCart, reduceItemQuantity } from "./useHandleCart";
import { Link } from "react-router-dom";
import { UpdateCart } from "../../../redux/CartRouter/actionCart";

function CartDisplayProduct(props) {
  const [quantity, setQuantity] = useState(props.quantity);

  const seller = " MediGreen ";
  const { id, name, image, price, rating,setState, handleRemove, calculateTotalPrice ,item} =
    props;

  function handleReduce() {
    UpdateCart(item,-1,item._id)
    setState((prev)=>!prev)
    // if (quantity > 1) {
    //   setQuantity(quantity - 1);
    // }
    // reduceItemQuantity(id);
    // props.setCartItems(getCart());
    // calculateTotalPrice();
  }

  function handleAdd() {
    UpdateCart(item,1,item._id)
    setState((prev)=>!prev)  
    // calculateTotalPrice();
  }

  if (quantity === 0) {
    return null;
  }
  return (
    <div className="single-cart-product-card">
      <div className="cart-card-flex">
        <div className="cart-product-image">
          <img src={image} alt={name} />
          <div className="cart-quantity-buttons">
            <button
              disabled={quantity <= 1}
              onClick={handleReduce}
              className="reduce"
            >
              -
            </button>
            {quantity}
            <button onClick={handleAdd} className="increase">
              +
            </button>
          </div>
        </div>
        <div className="cart-product-details">
          <Link to={`/products/${id}`}>
            <h3 className="capitalize">{name}</h3>
          </Link>
          <h6>Seller - {seller}</h6>
          <h3>Price - ₹{price}</h3>
          <p>Rating - {rating}</p>
          <div className="cart-product-buttons">
            <button onClick={() => handleRemove(id)}>Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartDisplayProduct;
