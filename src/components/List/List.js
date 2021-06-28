import React, { Component } from "react";
import data from "../../data.json"
export default class Main extends Component {
 
    constructor(props) {
        super(props);
    
        this.state = {
            task: data,  // array de objetos [{},{},{},{},]
        };
      }

      captureTask = (event)=>{

        event.preventDefault();

        let newTask = event.target.elements.newTask.value


        alert(newTask)

      }

  render() {
    return (
        <form onSubmit={this.captureTask}>
        <label>Introduce nueva tarea</label>
        <br></br>
        <input type="text" name="newTask"></input>
        <br></br>

        <input type="submit" value="Enviar" ></input>
      </form>
    );
  }
}
