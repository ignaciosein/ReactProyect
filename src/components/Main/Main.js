import React, { Component } from "react";
import { Route,Switch } from "react-router";
import List from "../List/List";
import Home from "../Home";
import WeatherList from "../WeatherList";

import "./Main.scss";
export default class Main extends Component {
  render() {
    return (
      <main className="Main">
        <div className="wrapper">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/todo" component={List} />
            <Route path="/weather" component={WeatherList} />
          </Switch>
        </div>
      </main>
    );
  }
}
