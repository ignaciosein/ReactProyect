import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
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
    
    this.setState({ tasks: [...this.state.tasks, { task: newTasks, id: uuidv4()}] });
  };
  renderProduct = () => this.state.tasks.map((task) => 
     <Cards data={task} key={task.id} remove={() => this.removeTask(task.id)} />
  )

  removeTask = (i) => {
    let filteredArray = this.state.tasks.filter((item) => {
      console.log(i)
      console.log("item id", item.id)
      return i!==item.id
    });
    this.setState({ tasks: filteredArray })
    alert(`tarjeta ${i} pulsada`)
  }
  removeAllTasks = ()=> this.setState({tasks:[]})
  resetTasks = ()=> this.setState({tasks:data})

  
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
        <button onClick={this.removeAllTasks}>clear tasks</button>
        <button onClick={this.resetTasks}>reset tasks</button>
      </div>
    );
  }



}
