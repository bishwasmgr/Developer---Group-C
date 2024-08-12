import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "./../../config/Config.json";

const ViewAllCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = async () => {
    axios.get(apiUrl + "category/").then((response) => {
      const values = response.data.data;
      setCategories(values);
    });
  };

  const deleteCategory = async (id) => {
    axios
      .delete(apiUrl + `category/delete/${id}`)
      .then((response) => {
        alert("Category Data successfully deleted");
        window.location = "/view-category";
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const navigateVehiclePage = (e, categoryId) => {
    window.location = `/category/${categoryId}`;
  };

  const navigateUpdatePage = (e, categoryId) => {
    window.location = `/update/${categoryId}`;
  };

  return (
    <div className="container">
      <h1>Categories</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Category</th>
            <th scope="col">Amount</th>
            <th scope="col">Vehicle</th>
            <th scope="col">Delete</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 &&
            categories.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.amount}</td>
                <td>
                  <button onClick={(e) => navigateVehiclePage(e, item._id)}>
                    Vehicles
                  </button>
                </td>
                <td>
                  <button onClick={() => deleteCategory(item._id)}>
                    Delete
                  </button>
                </td>
                <td>
                  <button onClick={(e) => navigateUpdatePage(e, item._id)}>
                    Update
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default ViewAllCategories;
