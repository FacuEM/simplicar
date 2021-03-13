import React, { useState, useEffect } from "react";
import axios from "axios";
import Banner from "../banner";
import Card from "../card";
import "./cars.css";

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(async () => {
    const headers = {
      Authorization: "Bearer qwertyuiopasdfghjklzxcvbnm123456",
    };
    const response = await axios.get(
      "https://4my1q6hsyo.api.quickmocker.com/product",
      headers
    );
    const data = await response.data.results;
    console.log(data);
    setCars(data);
  }, []);

  if (cars.length === 0) return null;

  return (
    <div className="cars">
      <Banner />
      <div className="container-cars">
        <p className="quantity-cars">{cars.length} Vehículos</p>

        <div className="dropdowns-cars">
          <div className="leftDropdowns-cars">
            <select className="select-cars" name="carroceria">
              <option value="" hidden>
                CARROCERÍA
              </option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="camioneta">Camioneta</option>
            </select>
            <select className="select-cars" name="modelo">
              <option value="" hidden>
                MODELO
              </option>
              <option value="march">March</option>
              <option value="versa">Versa</option>
              <option value="frontier">Frontier</option>
            </select>
            <select className="select-cars" name="precio">
              <option value="" hidden>
                PRECIO
              </option>
              <option value="below20">Menor a 20.000</option>
              <option value="above20">Mayor a 20.000</option>
              <option value="above25">Mayor a 25.000</option>
            </select>
          </div>
          <div>
            <label className="label-cars">Ordernar: </label>
            <select className="select-cars" id="orderSelect-cars" name="order">
              <option value="low">Precio más bajo</option>
              <option value="high">Precio más alto</option>
            </select>
          </div>
        </div>

        <div className="cards-cars">
          {cars &&
            cars.map((car, i) => {
              const { gallery, model, amount, id } = car;
              if (!model || !amount || !id || gallery.length === 0) return null;
              const configCard = { ...car };
              return <Card className="card-cars" key={i} {...configCard} />;
            })}
        </div>
        <p className="disclaimer-cars">
          *It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy.
        </p>
      </div>
    </div>
  );
};

export default Cars;
