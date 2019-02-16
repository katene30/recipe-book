import React from "react";
import Wombat from "./Wombat";

class Wombats extends React.Component {
  render() {
    return (
      this.props.wombats.length > 0 && (
        <ul>
          {this.props.wombats.map((wombat, index) => {
            return <Wombat key={"wombat-${index}"} wombat={wombat} />;
          })}
        </ul>
      )
    );
  }
}

export default Wombats;
