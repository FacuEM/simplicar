import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useInput } from "../../hooks/useInput";
import axios from "axios";
import "./carDetails.css";

const CarDetails = () => {
  const [details, setDetails] = useState({});
  const {
    value: fullname,
    bind: bindFullname,
    reset: resetFullname,
  } = useInput("");
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
  const { value: phone, bind: bindPhone, reset: resetPhone } = useInput("");
  const { id } = useParams();

  const headers = {
    Authorization: "Bearer qwertyuiopasdfghjklzxcvbnm123456",
  };
  useEffect(async () => {
    const response = await axios.get(
      `https://4my1q6hsyo.api.quickmocker.com/product/${id}`,
      headers
    );
    const data = await response.data;
    console.log(data);
    setDetails(data);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { fullname, email, phone };
    axios
      .post("https://4my1q6hsyo.api.quickmocker.com/lead", data, headers)
      .then(() => {
        resetFullname();
        resetPhone();
        resetEmail();
      });
  };
  return (
    <div className="main-cd">
      <div className="banner-cd">
        <Link to="/cars">
          <i class="bi bi-arrow-left"></i>
          <span className="oneSpan-cd">Volver a la tienda</span>
        </Link>
        <span className="twoSpan-cd hidden-cd">/</span>
        <span className="threeSpan-cd hidden-cd ">{details.model}</span>
        <span className="fourSpan-cd hidden-cd">/</span>
        <span className="fivepan-cd hidden-cd">Enviar cotización por mail</span>
      </div>
      <div className="row-cd">
        <div className="container-cd">
          {details.hasOwnProperty("detail") && (
            <>
              <h1 className="carModel-cd">{details.model}</h1>
              <img
                src={`https://s3.sa-east-1.amazonaws.com/simplimotos-stg.com/${details.gallery[0].large}`}
              />
              <hr />

              <div className="specsWrapper">
                <div className="spec">
                  <span>
                    <i class="bi bi-gear"></i>
                    {details.detail.characteristics.engine}
                  </span>

                  <span>
                    <i class="bi bi-calendar-week"></i>
                    {details.detail.characteristics.warranty}
                  </span>
                </div>

                <div className="spec bottomSpecs-cd">
                  <span>
                    <i class="bi bi-share"></i>
                    {details.detail.characteristics.gas_type}
                  </span>
                  <span>
                    <i class="bi bi-tags"></i>
                    {details.detail.characteristics.body}
                  </span>
                </div>
              </div>
              <hr />
              <div className="links-cd">
                <span>Ver todas las características</span>
                <span id="space">|</span>
                <span>Ver galería de imágenes</span>
              </div>
            </>
          )}
        </div>
        <div className="container-cd">
          <h1 className="formTitle-cd">Ingresá tus datos</h1>
          <p className="formText-cd">
            Por favor completá el siguiente formulario para que uno de nuestros
            asesores se pueda conectar contigo.
          </p>
          <form onSubmit={handleSubmit} className="form-cd">
            <input
              className="input-cd"
              type="text"
              name="fullname"
              {...bindFullname}
              placeholder="nombre y apellido"
              required
            />
            <input
              className="input-cd"
              type="email"
              name="email"
              {...bindEmail}
              placeholder="correo electrónico"
              required
            />
            <input
              className="input-cd"
              type="number"
              name="phone"
              {...bindPhone}
              placeholder="teléfono"
              required
            />
            <button className="button-cd" type="submit">
              Enviarme la cotización por mail
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
