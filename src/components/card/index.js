import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = (car) => {
  const { amount, model, gallery, id } = car;
  const configImg = `https://s3.sa-east-1.amazonaws.com/simplimotos-stg.com/${gallery[0].large}`;

  return (
    <div className="card-card">
      <div className="header-card">
        <img className="img-card" src={configImg} alt="Car image" />
        <h1 className="model-card">{model}</h1>
      </div>
      <div className="hover-card">
        <hr className="hr-card" />
        <div className="priceWrapper-card">
          <div className="priceWrapper-card-r">Precio desde</div>
          <div className="priceWrapper-card-l">US$ {amount}</div>
        </div>

        <hr className="hr-card" />
        <div className="detailsWrapper-card">
          <div className="detailsWrapper-card-l">
            <Link to={`/cars/${id}`}>Ver detalles de modelo</Link>
          </div>
          <div className="detailsWrapper-card-r">
            <Link to={`/cars/${id}`}>
              <i class="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
        <p className="disclaimer-card">
          Imágenes meramente ilustrativas no reportando la realidad exacta,
          pudiendo existir variaciones en la percepción.
        </p>
      </div>
    </div>
  );
};

export default Card;
