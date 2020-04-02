import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <div style={navStyle}>
                Tree Navigation will come here 
            </div>
        );
    }
}

const navStyle = {
    backgroundColor: 'lightgrey',
    height:'100%',
    body:'100%'
}

export default Navigation;