import React, { Component } from "react";

class MyComponent extends Component {

    // 1. Constructor (initialization)
    constructor(props) {
        super(props);

        this.state = {
            message: "Hello React Class Component"
        };
    }

    // 2. componentDidMount (called after component loads)
    componentDidMount() {
        console.log("Component Mounted");
    }

    // 3. shouldComponentUpdate (controls re-rendering)
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    // 4. componentDidUpdate (after update)
    componentDidUpdate(prevProps, prevState) {
        console.log("Component Updated");
    }

    // 5. componentWillUnmount (cleanup)
    componentWillUnmount() {
        console.log("Component Unmounted");
    }

    // Custom Method
    changeMessage = () => {
        this.setState({ message: "State Updated!" });
    };

    // 6. Render Method (MANDATORY)
    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={this.changeMessage}>Update</button>
            </div>
        );
    }
}

export default MyComponent;