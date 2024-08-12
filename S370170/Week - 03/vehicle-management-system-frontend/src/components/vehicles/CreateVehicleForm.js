import { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import { apiUrl } from "./../../config/Config.json";

const CreateVehicleForm = () => {
  const [model, setModel] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = async () => {
    axios.get(apiUrl + "category/").then((response) => {
      const values = response.data.data;
      let data = [];
      values.map((item, index) => {
        let category = {
          value: item._id,
          label: item.name,
        };
        data.push(category);
        return data;
      });
      setOptions(data);
    });
  };

  const onCategorySelect = (e) => {
    setSelectedCategories(e ? e.map((item) => item.value) : []);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let vehicle = {
      name: name,
      code: code,
      model: model,
      type: type,
      categories: selectedCategories,
    };
    axios
      .post(apiUrl + "vehicle/create", vehicle)
      .then((response) => {
        alert("Vehicle Data successfully inserted");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <div className="container">
        <h1>Create Vehicle</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Vehicle Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="code" className="form-label">
              Code
            </label>
            <input
              type="text"
              className="form-control"
              id="code"
              name="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="model" className="form-label">
              Model
            </label>
            <input
              type="text"
              className="form-control"
              id="model"
              name="model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="subjectAmount" className="form-label">
              Type
            </label>
            <input
              type="text"
              className="form-control"
              id="type"
              name="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>
          <Select
            options={options}
            onChange={(e) => onCategorySelect(e)}
            className="basic-multi-select"
            isMulti
          />
          <br />
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateVehicleForm;
