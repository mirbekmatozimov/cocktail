import React from "react";
import { Link } from "react-router-dom";
export default function Cocktail({ image, name, id, info, glass }) {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <div className="cocktail-footer__bottom">
          <div>
            <h4>{glass}</h4>
            <p>{info}</p>
          </div>
          <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
            details
          </Link>
        </div>
      </div>
    </article>
  );
}
