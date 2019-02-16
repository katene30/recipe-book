import React from "react";
import Wombats from "./Wombats";
import NewWombatForm from "./NewWombatForm";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wombats: ["sam", "tim"]
    };

    this.addWombat = this.addWombat.bind(this);
  }

  addWombat(wombat) {
    let newWombats = [...this.state.wombats];
    newWombats.push(wombat);

    this.setState({
      wombats: newWombats
    });
  }
  render() {
    return (
      <React.Fragment>
        <h1>HELLO</h1>
        <Wombats wombats={this.state.wombats} />
        <NewWombatForm addWombat={this.addWombat} />
      </React.Fragment>
    );
  }
}

export default App;
