import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './main/Home';
import Done from './main/Done';
import Error from './main/Error';


class Main extends Component {
    state = {
        illnesses: [],
        done: false,
    }



    handleIllnesses = (arr) => {
        console.log(arr);
        this.setState({
            illnesses: arr,
        })

    }
    render() {
        const { done, illnesses } = this.state;
        return (
            < main >

                <Router illnesses={illnesses}>
                    <Route exact path="/" render={() => (<Home handleIllnesses={this.handleIllnesses} />)} />
                    <Route path='/done' render={() => (done ? <Done illnesses={illnesses} /> : <Error />)} />

                </Router>

            </main>
        );
    }
}

export default Main;