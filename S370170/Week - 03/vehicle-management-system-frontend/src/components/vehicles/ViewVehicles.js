import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "./../../config/Config.json";

const ViewVehicles = ({ match }) => {
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    getVehicles();
  });

  const getVehicles = async () => {
    axios
      .get(apiUrl + `vehicle/${match.params.id}`)
      .then((response) => {
        const values = response.data.vehicles;
        setVehicles(values);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="container">
      <h1>Category Vehicles</h1>
      {vehicles.length > 0 &&
        vehicles.map((item, index) => (
          <div key={index} className="card mb-3">
            <div className="p-3">
              <h4>Vehicle Name: {item.name}</h4>
              <h5>Code: {item.code}</h5>
              <h5>Type: {item.type}</h5>
              <h5>Model: {item.model}</h5>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ViewVehicles;
