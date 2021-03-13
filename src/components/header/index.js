import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./../../assets/nissanlogo.jpg";
import "./header.css";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <header className="header">
      <div className="left-h">
        <img className="img-h" src={Logo} alt="Nissan Logo" />
        <div className="links-h" id={showLinks ? "hidden" : ""}>
          <Link to="/cars" className="a-h">
            Vehículos
          </Link>
          <Link to="/" className="a-h">
            Descubrí nissan
          </Link>
        </div>
        <button id="responsiveBtn" onClick={() => setShowLinks(!showLinks)}>
          <i class="bi bi-justify"></i>
        </button>
      </div>

      <div className="right-h">
        <div className="formWrap-h">
          <input
            className="input-h"
            type="text"
            placeholder="BUSCAR POR MODELO O VEHICULO"
          />
          <button className="btn-h" type="submit">
            <i class="bi bi-search"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
