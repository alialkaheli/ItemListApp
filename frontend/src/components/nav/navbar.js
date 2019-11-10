import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    getLinks() {
        if (this.props.loggedIn) {
            return (
                <header className="sub-header-div > sub2">
                    <Link className="header-link > header-link2" to={'/items'}>All Items</Link>
                    <Link className="header-link > header-link2" to={'items/create'}>Create Item</Link>
                    <button className="header-link > header-link2" onClick={this.logoutUser}>Logout</button>
                </header>
            );
        } else {
            return (
                <header className="sub-header-div">
                    <Link  className="header-link" to={'/signup'}>Signup</Link>
                    <Link className="header-link" to={'/login'}>Login</Link>
                </header>
            );
        }
    }

    render() {
        return (
            <header className="main-header">
                <h1>Your Item List App</h1>
                {this.getLinks()}
            </header>
        );
    }
}

export default NavBar;