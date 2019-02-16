import React from "react";

class Wombat extends React.Component {
  render() {
    return (
      <React.Fragment>
        <li>{this.props.wombat}</li>
      </React.Fragment>
    );
  }
}

export default Wombat;
