import { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import { apiUrl } from "./../../config/Config.json";

const CalculateChargesForm = () => {
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicles, setSelectedVehicles] = useState();
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState();
  const [duration, setDuration] = useState("");
  const [isClearable] = useState(true);
  const [amount, setAmount] = useState();

  useEffect(() => {
    getAllVehicles();
  }, []);

  const getAllVehicles = async () => {
    axios.get(apiUrl + "vehicle/").then((response) => {
      const values = response.data.data;
      let data = [];
      values.map((item, index) => {
        let vehicle = {
          value: item._id,
          label: item.name,
        };
        data.push(vehicle);
        return data;
      });
      setVehicles(data);
    });
  };

  const filterCategories = (e) => {
    setSelectedCategories(e ? e.value : []);
  };

  const filterVehicles = async (e) => {
    setSelectedVehicles(e ? e.value : vehicles);
    const data = {
      id: e ? e.value : [],
    };
    axios.post(apiUrl + "vehicle/categories", data).then((response) => {
      const values = response.data.data.categories;
      let data = [];
      values.map((item, index) => {
        let category = {
          value: item._id,
          label: item.name,
        };
        data.push(category);
        return data;
      });
      setCategories(data);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      id: selectedVehicles,
      type: selectedCategories,
      duration: duration,
    };
    axios
      .post(apiUrl + "vehicle/amount", data)
      .then((response) => {
        alert("Caluculating charge successfully done");
        setAmount(response.data.totalAmount);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <div className="container">
        <h1>Calculate Charges</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="vehicle" className="form-label">
              Vehicle
            </label>
            <Select
              options={vehicles}
              onChange={(e) => filterVehicles(e)}
              className="basic-single"
              isClearable={isClearable}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="code" className="form-label">
              Category
            </label>
            <Select
              options={categories}
              onChange={(e) => filterCategories(e)}
              className="basic-single"
              isClearable={isClearable}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="model" className="form-label">
              Duration
            </label>
            <input
              type="number"
              className="form-control"
              id="duration"
              name="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
        <br />
        {amount && <div>Total Charge: {amount}</div>}
      </div>
    </>
  );
};

export default CalculateChargesForm;
