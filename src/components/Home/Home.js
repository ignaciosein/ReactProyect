import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div>
        <h1>Esta es la pagina de bienvenida</h1>

        <a  href="/todo"><button>Lista de tareas</button></a>
      
      </div>
    );
  }
}

export default Home;