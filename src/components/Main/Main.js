import React, { Component } from 'react'
import List from '../List/List'  
import "./Main.scss"
export default class Main extends Component {
    render() {
        return (
            <main className="Main">

            <div className="wrapper">
                <List/>
                </div>
            </main>
        )
    }
}
