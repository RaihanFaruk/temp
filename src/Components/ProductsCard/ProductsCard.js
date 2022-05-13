import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ProductsCard.css";

const ProductsCard = ({ product }) => {
  console.log(product);
  const { _id, name, price, supplier, quantity, img, description } = product;
  const navigate = useNavigate();
  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      
    >
      
      <Card style={{ width: "18rem" }} id="card">
        <Card.Body>
          <img className="card-images" src={img} alt={img} />
          <div className="card-text">
            <div className="">
              
              <h3>{name}</h3>
              <span className="text-danger "> Price: {price} </span>
            </div>
            <p className="quantity">Quantity: {quantity}</p>
            <p className="supplier">Supplier: {supplier}</p>
            <p> {description}</p>
          </div>
          <button
            onClick={() => handleProductClick(_id)}
            className="button-product-card"
          >
            Update
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductsCard;
