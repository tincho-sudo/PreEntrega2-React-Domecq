import "./itemListContainer.css";
import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import productsDb from "../../../data/products";
import Flex from "../Flex/Flex";
import { useParams } from "react-router-dom";

function getItems() {
  const prom = new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsDb);
    }, 1000);
  });
  return prom;
}

function getItemsCateg(categURL) {
  const prom = new Promise((resolve) => {
    setTimeout(() => {
      const filter = productsDb.filter((item) => item.cat === categURL);
      resolve(filter);
    }, 1000);
  });
  return prom;
}

function getItemsGen(genURL, categURL) {
  const prom = new Promise((resolve) => {
    setTimeout(() => {
      const filter = productsDb.filter((item) => {
        return item.gen === genURL && item.cat === categURL;
      });
      resolve(filter);
    }, 1000);
  });
  return prom;
}

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categoryId, genId } = useParams();

  useEffect(() => {
    if (categoryId === undefined && genId === undefined) {
      getItems().then((resp) => setProducts(resp));
    } else if (genId === undefined) {
      getItemsCateg(categoryId).then((resp) => setProducts(resp));
    } else {
      getItemsGen(genId, categoryId).then((resp) => setProducts(resp));
    }
  }, [categoryId, genId]);
  return (

    <Flex>
      {products.map((item) => {
        return (
          <ItemList
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            cat={item.cat}
            brand={item.brand}
            stock={item.stock}
            gen={item.gen}
            linkTo={true}
          />
        );
      })}
    </Flex>
  );
}

export default ItemListContainer;
