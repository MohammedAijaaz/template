import React, { Component } from "react";
import FlatButton from "material-ui/FlatButton";
import Dialog from "material-ui/Dialog";
import TextField from "material-ui/TextField";

export default class Login extends Component {
  static muiName = "FlatButton";
  constructor(context, props) {
    super(context);
    this.state = {
      openDialog: false
    };
  }

  handleOpen = () => {
    this.setState({ openDialog: true });
  };

  handleClose = () => {
    this.setState({ openDialog: false });
  };

  render() {
    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />,
      <FlatButton
        label="Login"
        primary={true}
        onClick={this.props.handlelogin}
      />
    ];
    return (
      <div>
        <FlatButton {...this.props} label="Login" onClick={this.handleOpen} />
        <Dialog
          title="Login"
          actions={actions}
          modal={true}
          open={this.state.openDialog}
        >
          <center>
            <TextField hintText="Username" floatingLabelText="Username" />
            <br />
            <TextField hintText="Password" floatingLabelText="Password" />
            <br />
          </center>
        </Dialog>
      </div>
    );
  }
}
