import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h1 className="title-f">
        Nissan. <span className="span-f">Innovation that excites.</span>
      </h1>
      <div className="container-f">
        <div className="links-f">
          <h1 className="h1-f">COTIZACIÓN DE VEHÍCULOS</h1>
          <Link className="a-f">
            <i class="bi bi-exclamation-circle"></i> Información Legal
          </Link>
        </div>
        <div className="links-f" id="doble-link-f">
          <h1 className="h1-f">RALITOR S.A</h1>
          <Link className="a-f">nissan.com.uy</Link>
          <Link className="a-f">Políticas de Cookies</Link>
        </div>
        <div className="links-f">
          <h1 className="h1-f">AYUDA AL CLIENTE</h1>
          <Link className="a-f">Políticas de Privacidad</Link>
        </div>
        <div className="socials-f">
          <h1 className="h1-f">NISSAN SOCIAL</h1>
          <div className="socialsLinks-f">
            <Link className="a-f">
              <i class="bi bi-facebook"></i>
            </Link>
            <Link className="a-f">
              <i class="bi bi-instagram"></i>
            </Link>
            <Link className="a-f">
              <i class="bi bi-twitter"></i>
            </Link>
            <Link className="a-f">
              <i class="bi bi-youtube"></i>
            </Link>
          </div>
        </div>
      </div>
      <hr className="hr-f" />
      <p className="simplicar-f">
        © 2020 SIMPLICAR. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
