import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import Login from "../Login.react";

class Logged extends Component {
  static muiName = "IconMenu";
  constructor(context, props) {
    super(context);
  }

  render() {
    return (
      <IconMenu
        {...this.props}
        iconButtonElement={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        targetOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
      >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem
          primaryText="Sign out"
          onClick={() => this.props.handlelogin()}
        />
      </IconMenu>
    );
  }
}

export default class Home extends Component {
  constructor(context, props) {
    super(context);
    this.state = {
      logged: false
    };
  }

  handlelogin = () => {
    this.setState({
      logged: !this.state.logged
    });
  };

  render() {
    return (
      <div>
        <AppBar
          title="Title"
          onLeftIconButtonTouchTap={this.props.handleToggle}
          iconElementRight={
            this.state.logged ? (
              <Logged handlelogin={this.handlelogin} />
            ) : (
              <Login handlelogin={this.handlelogin} />
            )
          }
        />
      </div>
    );
  }
}
