import { useState } from "react";
import axios from "axios";
import { apiUrl } from "./../../config/Config.json";

const CreateCategoryForm = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let category = {
      name: name,
      amount: amount,
    };
    axios
      .post(apiUrl + "category/create", category)
      .then((response) => {
        alert("Category Data successfully inserted");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="container">
      <h1>Create Category</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Category Name
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
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default CreateCategoryForm;
