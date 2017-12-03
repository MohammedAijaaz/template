import React, { Component } from "react";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import MyAppBar from "./MyAppBar.react";

export default class MyDrawer extends Component {
  constructor(context, props) {
    super(context);
    this.state = {
      openDrawer: false
    };
  }

  handleToggle = () => this.setState({ openDrawer: !this.state.openDrawer });

  handleClose = () => this.setState({ openDrawer: false });

  openHome = () => {
    this.handleClose();
    this.props.history.push("/home");
  };

  openAbout = () => {
    this.handleClose();
    this.props.history.push("/about");
  };

  render() {
    return (
      <div>
        <MyAppBar handleToggle={this.handleToggle} />
        <Drawer
          docked={false}
          width={250}
          open={this.state.openDrawer}
          onRequestChange={openDrawer => this.setState({ openDrawer })}
        >
          <MenuItem onClick={this.openHome}>Home</MenuItem>
          <MenuItem onClick={this.openAbout}>About</MenuItem>
        </Drawer>
      </div>
    );
  }
}
