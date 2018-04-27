import React from 'react'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink, Button
} from 'reactstrap';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {userLogout} from "../actions/auth.actions";
import {bindActionCreators} from "redux";

class Example extends React.Component {
    state = {
        isOpen: false
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const {userLogout} = this.props
        return (
            <div>
                <Navbar color="primary" dark expand="md">
                    <NavbarBrand href="/">ProfileHub</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                {!this.props.user.name ? <Link to="/" className="nav-link">Log in</Link> :
                                    <a href = "/" className="nav-link" onClick={() => userLogout()}>Log out</a>}
                            </NavItem>
                            <NavItem>
                                {this.props.user.name ? null : <Link to="/signup" className="nav-link">Signup</Link>}
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogout: bindActionCreators(userLogout, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Example)