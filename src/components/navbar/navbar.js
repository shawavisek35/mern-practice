import React , { Component } from "react";
import "./navbar.css";

class Navbar extends Component{

    render() {
        return(
            <div className="container">
                <header className="header">
                    <div className="menu">
                        <nav className="navbar navbar-expand-lg navbar-light ">
                            <a className="navbar-brand" href="/home"><h3 className="header-brand">Exercise Tracker</h3></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon">
                                    <i className="fa fa-bars" style={{color:"#fff", fontSize:"35px"}}></i>
                                </span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <div className="mr-auto"></div>
                                <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/user">Create User</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/create">Create Exercise</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/listexercise">List Exercises</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/edit/:id">Edit Exercise</a>
                                </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>
        );
    }
}

export default Navbar;