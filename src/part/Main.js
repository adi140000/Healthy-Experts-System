import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from './main/Home';
import Check from './main/Check';

class Main extends Component {
    state = {
        illnesses: [],
    }

    handleIllnesses = (arr) => {
        console.log(arr);
        const { illnesses } = this.state;
       
        this.setState({
            illnesses: arr,
        })
    }
    render() {
        const { illnesses } = this.state;
        return (
            < main >
                <Router>

                    <Route exact path="/" render={() => (<Home illnesses={this.handleIllnesses} />)} />


                </Router>
            </main>
        );
    }
}

export default Main;