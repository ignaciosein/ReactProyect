import React, { Component } from "react";
import "./Cards.scss"
export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: "No has añadido tarea", // array de objetos [{},{},{},{},]
    };
  }

  render() {
    return (
      <section className="Cards">
        <p>Tarea : {this.props.data.task||this.state.task}</p>
        <button onClick={this.props.remove}>Borrar tarea</button>
      </section>
    );
  }
}
