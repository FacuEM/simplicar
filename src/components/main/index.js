import React from "react";
import { Link } from "react-router-dom";
import "./main.css";

const Main = () => {
  return (
    <div className="container-main">
      <div className="title-main">
        <h1 className="h1-m">Ahora es online</h1>
      </div>
      <div className="content-main">
        Con Nissan Store, podés acceder a tu nuevo 0km con todos <br /> los
        servicios asociados desde la comodidad de tu sofá.
        <p>Probanos!</p>
      </div>
      <div className="button-main">
        <Link to="/cars">
          <button className="btn-m">
            Ingresar a nissan store <i class="bi bi-arrow-right"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Main;
