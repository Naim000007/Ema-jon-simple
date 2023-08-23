import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
const Shop = () => {
  const [products, setproducts] = useState([]);
  const [cart , setcart] = useState([])

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, []);
  const handelAddtocart = (product) => {
    // console.log(product);
    const newCart =[...cart, product]
    setcart(newCart);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handelAddtocart={handelAddtocart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <h1>Order summary </h1>
        <p>Select items: {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;
