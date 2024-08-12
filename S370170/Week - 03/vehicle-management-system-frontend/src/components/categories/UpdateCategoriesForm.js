import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "./../../config/Config.json";

const UpdateCategoryForm = ({ match }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    // getCategory();
  });

  // const getCategory = async () => {
  //   axios.get(apiUrl + `category/get/${match.params.id}`).then((response) => {
  //     const values = response.data.data;
  //     setName(values.name);
  //     setAmount(values.amount);
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let category = {
      name: name,
      amount: amount,
    };
    axios
      .patch(apiUrl + `category/update/${match.params.id}`, category)
      .then((response) => {
        alert("Category Data successfully updated");
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

export default UpdateCategoryForm;
