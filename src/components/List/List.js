import React, { Component } from "react";
import data from "../../data.json";
 import Cards from "../Cards/Cards";
export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: data, // array de objetos [{},{},{},{},]
    };
  }
  captureTask = (event) => {
    event.preventDefault();

    let newTask = event.target.elements.newTask.value;

    this.addTask(newTask);
  };

  addTask = (newTasks) => {
    this.setState({ tasks: [...this.state.tasks, { task: newTasks }] });
  };
  renderProduct = () =>this.state.tasks.map((task)=>   <Cards data={task}  />     )
  

  render() {
    return (
      <div>
      <form onSubmit={this.captureTask}>
        <label>Introduce nueva tarea</label>
        <br></br>
        <input type="text" name="newTask"></input>
        <br></br>
        <input type="submit" value="Enviar"></input>
      </form>
      
      {this.renderProduct()}
      </div>
    );
  }


  
}
