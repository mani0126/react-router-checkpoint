import React from 'react'
import Login from './components/Login'
import TopNav from './components/TopNav'
import './App.css'
import {Route, BrowserRouter as Router} from "react-router-dom";
import Signup from "./components/Signup";
import UserProfile from "./components/UserProfile";
import {connect} from "react-redux";

export const App = (props) => {
    return (
        <Router>
            <div>
                <TopNav/>
                <Route path="/profile" render={props => <UserProfile {...props}/>}/>
                <Route exact path="/" render={props => <Login {...props}/>}/>
                <Route path="/signup" render={props => <Signup {...props}/>}/>
            </div>
        </Router>
    )
}

function mapStateToProps(state) {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps, null)(App)
