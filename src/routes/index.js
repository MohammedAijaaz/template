import React from "react";
import { Route, Switch } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { deepPurple500, deepPurple700 } from "material-ui/styles/colors";
import Home from "../views/Home.react";
import About from "../views/About.react";
import Drawer from "../components/header/MyDrawer.react";
import ProductFull from "../components/ProductFull.react";

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepPurple500,
    primary2Color: deepPurple700
  }
});

export default Routes => (
  <div>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Route path="/" component={Drawer} />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/product/:id" component={ProductFull} />
      </Switch>
    </MuiThemeProvider>
  </div>
);
