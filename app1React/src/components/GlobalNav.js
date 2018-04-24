import React, { Component } from 'react'
import { Link } from 'react-router'

const dark = 'hsl(200, 20%, 20%)'
const light = '#fff'
const styles = {}

styles.wrapper = {
    padding: '10px 20px',
    overflow: 'hidden',
    background: dark,
    color: light
}

styles.link = {
    padding: 11,
    color: light,
    fontWeight: 200
}

styles.activeLink = {
    ...styles.link,
    background: light,
    color: dark
}

class GlobalNav extends Component {

    render() {

        return (
            <div style={styles.wrapper}>
                <div style={{ float: 'left' }}>
                    <Link to="/react" style={styles.link}>Home</Link>{' '}
                    <Link to="/react/calendar" style={styles.link} activeStyle={styles.activeLink}>Calendar</Link>{' '}
                </div>
            </div>
        )
    }
}
export default GlobalNav