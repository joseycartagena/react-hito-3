import React, { useState } from "react";
import { pizzaCart } from "../pizzas";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/mycart.css";

const Cart = () => {
  const increaseCount = (cart, id) => {
    return cart.map((pizza) =>
      pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
    );
  };

  const decreaseCount = (cart, id) => {
    return cart.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
      )
      .filter((pizza) => pizza.count > 0);
  };

  const totalPrice = (cart) => {
    return cart.reduce((sum, pizza) => sum + pizza.price * pizza.count, 0);
  };

  const [cart, setCart] = useState(pizzaCart);

  const handleIncrease = (id) => {
    setCart((prevCart) => increaseCount(prevCart, id));
  };

  const handleDecrease = (id) => {
    setCart((prevCart) => decreaseCount(prevCart, id));
  };

  const total = totalPrice(cart);

  return (
    <div className="container mt-3 mx-auto container-custom">
      <h2 className="mb-4 mt-4">Datalles del pedido:</h2>
      <div className="row justify-content-center">
        {cart.map((pizza) => (
          <div key={pizza.id} className="col-12 mb-4">
            <div className="d-flex flex-column flex-md-row align-items-center border p-3 rounded shadow-sm justify-content-between">
              <img
                src={pizza.img}
                alt={pizza.name}
                className="img-fluid rounded mb-3 mb-md-0 pizza-img"
              />
              <div className="ms-md-2 me-0 me-md-auto pizza-info mb-3 mb-md-0">
                <h5 className="text-truncate pizza-name text-capitalize">
                  {pizza.name}:
                </h5>
              </div>
              <div className="ms-3 d-flex d-flex-align">
                <span className="d-block d-block-price">
                  ${(pizza.price * pizza.count).toLocaleString()}
                </span>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDecrease(pizza.id)}
                >
                  -
                </button>
                <span className="mx-2">{pizza.count}</span>
                <button
                  className="btn btn-blue btn-sm"
                  onClick={() => handleIncrease(pizza.id)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-1">
        <h3>Total: ${total.toLocaleString()}</h3>
        <button className="btn btn-success mt-2 mb-4">Pagar</button>
      </div>
    </div>
  );
};

export default Cart;
