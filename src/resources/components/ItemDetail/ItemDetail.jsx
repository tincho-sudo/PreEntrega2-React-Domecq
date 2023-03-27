import React from "react";
import Item from "../Item/Item";
import "./itemDetail.css"; //Por si lo necesito a futuro

function ItemDetail(props) {
  return (
    <div className="item-detail">
      <Item
        id={props.id}
        title={props.title}
        img={props.image}
        gen={props.gen}
        price={props.price}
        className="item-detail-item"
        linkTo={false}
      />
      <p>{props.desc}</p>
    </div>
  );
}

export default ItemDetail;
