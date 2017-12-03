import React, { Component } from "react";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import MyAppBar from "./MyAppBar.react";
import Divider from "material-ui/Divider";
import Avatar from "material-ui/Avatar";

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
          <div style={{ padding: "1em" }}>
            <Avatar style={{ margin: "0.5em" }}>PS</Avatar>
            <b>Products Search</b>
          </div>
          <Divider />
          <MenuItem onClick={this.openHome}>Home</MenuItem>
          <MenuItem onClick={this.openAbout}>About</MenuItem>
        </Drawer>
      </div>
    );
  }
}
