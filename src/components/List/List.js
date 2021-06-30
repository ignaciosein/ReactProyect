import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import data from "../../data.json";
import "./List.scss";
import Cards from "../Cards/Cards";
export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      /*  tasks: data,  */ // array de objetos [{},{},{},{},]
      input: "",
    };
  }
  componentWillMount() {
    this.setState({ tasks: data });
  }

  renderProduct = () =>
    this.state.tasks.map((task) => (
      <Cards
        data={task}
        key={task.id}
        remove={() => this.removeTask(task.id)}
      />
    ));

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };
  showButton = () =>
    this.state.input.length > 0 ? (
      this.state.input.length > 6 ? (
        <input type="submit" value="Enviar" />
      ) : (
        <p>"Tiene que tener 6 caracteres o más"</p>
      )
    ) : (
      <></> //React Fragment
    );

  captureTask = (event) => {
    event.preventDefault();

    let newTask = event.target.elements.newTask.value;
    /* newTask.length>=6?this.addTask(newTask):  */
    this.setState({ input: "" });
    event.target.elements.newTask.value = "";
  };

  addTask = (newTasks) => {
    this.setState({
      tasks: [...this.state.tasks, { task: newTasks, id: uuidv4() }],
    });
  };

  removeTask = (i) => {
    let filteredArray = this.state.tasks.filter((item) => {
      console.log(i);
      console.log("item id", item.id);
      return i !== item.id;
    });
    this.setState({ tasks: filteredArray });
    alert(`tarjeta ${i} pulsada`);
  };
  removeAllTasks = () => this.setState({ tasks: [] });
  resetTasks = () => this.setState({ tasks: data });

  render() {
    return (
      <div className="List">
        <form className="addTask" onSubmit={this.captureTask}>
          <label>Introduce nueva tarea</label>

          <input
            type="text"
            name="newTask"
            onChange={this.handleChange}
          ></input>

          {this.showButton()}
        </form>

        <div className="contenedor">{this.renderProduct()}</div>
        <div className="wrapperButtons">
          <button className="buttonSmallers" onClick={this.removeAllTasks}>
            clear tasks
          </button>
          <button className="buttonSmallers" onClick={this.resetTasks}>
            reset tasks
          </button>
        </div>
      </div>
    );
  }
}
