import React from "react";
import Wombat from "./Wombat";

class NewWombatForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wombat: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addWombat(this.state.wombat);
    this.setState({ wombat: "" });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="wombat"
            value={this.state.wombat}
            onChange={this.handleChange}
          />
          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default NewWombatForm;
