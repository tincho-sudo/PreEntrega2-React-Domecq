import React, { useState, useEffect } from "react";
import productsDb from "../../../data/products";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

function getItem(idURL) {
  const prom = new Promise((resolve) => {
    setTimeout(() => {
      const found = productsDb.find((item) => {
        return item.id === parseInt(idURL);
      });
      resolve(found);
    }, 1000);
  });
  return prom;
}

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    console.log("rendering");
    getItem(id).then((resp) => setProduct(resp));
  }, [id]);

  // return ItemDetail y pasarle por props los datos.
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <ItemDetail
        image={product.image}
        title={product.title}
        cat={product.cat}
        gen={product.gen}
        price={product.price}
        desc={product.desc}
        linkTo={false}
      />
    </div>
  );
}

export default ItemDetailContainer;
