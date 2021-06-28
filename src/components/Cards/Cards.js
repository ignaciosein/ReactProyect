import React, { Component } from "react";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: "No has añadido tarea", // array de objetos [{},{},{},{},]
    };
  }

  render() {
    return (
      <section>
        <p>Tarea : {this.props.data.task}</p>
      </section>
    );
  }
}
