import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

// layouts
import MainLayout from "./layouts/mainLayout";
// components
import Main from "./components/main";
import Cars from "./components/cars";
import CarDetails from "./components/carDetails";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <MainLayout>
              <Main />
            </MainLayout>
          )}
        />
        <Route
          path="/cars/:id"
          render={() => (
            <MainLayout>
              <CarDetails />
            </MainLayout>
          )}
        />
        <Route
          path="/cars"
          render={() => (
            <MainLayout>
              <Cars />
            </MainLayout>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
