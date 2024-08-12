import React from "react";
import ViewVehicles from "./../components/vehicles/ViewVehicles";

const ViewVehiclesScreen = ({ match }) => {
  return <>{<ViewVehicles match={match} />}</>;
};

export default ViewVehiclesScreen;
