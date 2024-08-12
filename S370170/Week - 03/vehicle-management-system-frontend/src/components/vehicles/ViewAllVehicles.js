import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "./../../config/Config.json";

const ViewAllVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    getAllVehicles();
  }, []);

  const getAllVehicles = async () => {
    axios.get(apiUrl + "vehicle/").then((response) => {
      const values = response.data.data;
      setVehicles(values);
    });
  };

  return (
    <div className="container">
      <h1>Vehicles</h1>
      {vehicles.length > 0 &&
        vehicles.map((item, index) => (
          <div key={index} className="card mb-3">
            <h4>Vehicle Name: {item.name}</h4>
            <h5>Type: {item.type}</h5>
            <h5>Code: {item.code}</h5>
            <h6>Model: {item.model}</h6>
            <h6>Categories:</h6>
            <h4>
              {item.categories.length > 0 &&
                item.categories.map((c, index) => (
                  <h4 key={index}>
                    {c.name} - {c.amount}
                  </h4>
                ))}
            </h4>
          </div>
        ))}
    </div>
  );
};

export default ViewAllVehicles;
