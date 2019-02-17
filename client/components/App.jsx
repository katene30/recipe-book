import React from "react";
import { connect } from "react-redux";

import Wombats from "./Wombats";
import NewWombatForm from "./NewWombatForm";

import { addWombat } from "../actions";

const App = props => {
  return (
    <React.Fragment>
      <h1>HELLO</h1>
      <Wombats wombats={this.props.wombats} />
      <NewWombatForm
        addWombat={wombat => this.props.dispatch(addWombat(wombat))}
      />
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    wombats: state.wombats
  };
}
export default connect(mapStateToProps)(App);
