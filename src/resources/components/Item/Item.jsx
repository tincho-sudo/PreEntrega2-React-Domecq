import "./item.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Item(props) {
  const [fav, setFav] = useState(false);

  function handleFavorite() {
    setFav(!fav);
  }

  let classNameFavorite;

  let buttonText = fav ? "♥" : "♡";

  if (fav === true) {
    classNameFavorite = "item-card_favicon favorite";
  } else {
    classNameFavorite = "item-card_favicon";
  }

  const itemContent = (
    <>
      <div className="item-card_header">
        <h2>{props.title}</h2>
      </div>
      <div className="item-card_img">
        <img src={props.img} alt="imagen" />
      </div>
      <div className="item-card_detail">
        <div class="item-card_detail_content">
          <h5>Genero: {props.gen}</h5>
          <h6>$ {props.price}</h6>
        </div>
      </div>
    </>
  );
  return (
    <div className="item-card item-detail-item">
      <button onClick={handleFavorite} className={classNameFavorite}>
        {buttonText}
      </button>
      {props.linkTo ? (
        <Link to={`/products/${props.id}`} style={{ textDecoration: "none" }}>
          {itemContent}
        </Link>
      ) : (
        itemContent
      )}
    </div>
  );
}

export default Item;
