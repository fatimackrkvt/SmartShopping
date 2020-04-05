import React, { Component } from 'react';

class Temp extends Component {

    state = {  user: {} };

    constructor(props) {
        super(props);

        console.log(props.match.params.id);
      }

    componentWillMount() {
        this.fetchUser();
    }

    fetchUser = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users/'+ this.props.match.params.id);
        console.log(data);

        var userData =  await data.json();
        this.setState({user:userData });
        console.log(this.state.user);
    }

    render() {
        return (
            <div>
                Hello
                <h1>{this.state.user.name}</h1>
            </div>
        );
    }
}

export default Temp;