import React from "react";
import { Route, Switch } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Home from "../views/Home.react";
import About from "../views/About.react";
import Drawer from "../components/header/MyDrawer.react";

export default Routes => (
  <div>
    <MuiThemeProvider>
      <Route path="/" component={Drawer} />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </MuiThemeProvider>
  </div>
);
