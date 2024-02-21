// import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

export default function Home() {
  const [productTypes, setProductTypes] = useState([]);
  const [productTypeId, setProductTypeId] = useState(0);
  const [products, setProducts] = useState([]);
  // if (localStorage.getItem("access_token")) {
  //   console.log(localStorage.getItem("access_token"));

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "http://localhost:8080/api/product_types",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            'Content-Type': 'application/json',
            Authorization: "Bearer " + localStorage.getItem("access_token")
          }
        }
      );

      const json = await response.json();
      setProductTypes(json.data);
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "http://localhost:8080/api/products/type/" + productTypeId,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            'Content-Type': 'application/json',
            Authorization: "Bearer " + localStorage.getItem("access_token")
          }
        }
      );

      const json = await response.json();
      setProducts(json.data);
      console.log("json:", json);
      console.log("Product:", products);
    }

    fetchData();
  }, [productTypeId]);

  if (localStorage.getItem("access_token")) {
    return (
      <div className="container">
        <select value={productTypeId} onChange={(e) => setProductTypeId(e.target.value)}>
          <option value={0}>ทุกประเภทสินค้า</option>
          {productTypes && productTypes.map(item => {
            console.log("Product Type Item:", item); // Log product type item
            return (
              <option key={item.product_type_id} value={item.product_type_id}>
                {item.product_type_name}
              </option>
            );
          })}
        </select>
        <div className="container mt-3">
          {products && products.map(item => {
            console.log("Product Item:", item); // Log product item
            return (
              <ProductItem key={item.product_id} data={item} />
            );
          })}
        </div>
      </div>
    );
  }
  
};