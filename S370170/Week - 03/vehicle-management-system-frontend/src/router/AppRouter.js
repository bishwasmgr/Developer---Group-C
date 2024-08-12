import React from "react";
import { Switch, Route } from "react-router-dom";
import NavigationBar from "./../components/common/NavigationBar";
import ViewAllVehiclesScreen from "./../pages/ViewAllVehiclesScreen";
import CreateVehicleScreen from "./../pages/CreateVehicleScreen";
import CreateCategoryScreen from "./../pages/CreateCategoryScreen";
import ViewAllCategoriesScreen from "./../pages/ViewAllCategoriesScreen";
import ViewVehiclesScreen from "./../pages/ViewVehiclesScreen";
import CalculateChargesScreen from "./../pages/CalculateChargesScreen";
import UpdatecategoryScreen from "./../pages/UpdateCategoryScreen";

const AppRouter = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={ViewAllVehiclesScreen} />
        <Route path="/create-vehicle" component={CreateVehicleScreen} />
        <Route path="/create-category" component={CreateCategoryScreen} />
        <Route path="/view-category" component={ViewAllCategoriesScreen} />
        <Route path="/category/:id" component={ViewVehiclesScreen} />
        <Route path="/calculate" component={CalculateChargesScreen} />
        <Route path="/update/:id" component={UpdatecategoryScreen} />
      </Switch>
    </React.Fragment>
  );
};

export default AppRouter;
