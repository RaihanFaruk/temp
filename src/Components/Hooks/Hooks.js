import { useEffect, useState } from "react";


const useProducts = (refresh) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://murmuring-beyond-23434.herokuapp.com/fruits")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  },[refresh]);
  return [products, setProducts];
};

export default useProducts;
