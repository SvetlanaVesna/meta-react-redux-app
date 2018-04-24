import React, { Component } from 'react'
import GlobalNav from './GlobalNav'

class App extends Component {
    render() {
        return (
            <div>
                <GlobalNav />
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

module.exports = App