import React , { Component } from "react";
import "./navbar.css";

class Navbar extends Component{

    render() {
        return(
            <div className="container">
                <header className="header">
                    <div className="menu">
                        <nav class="navbar navbar-expand-lg navbar-light ">
                            <a class="navbar-brand" href="/home"><h3 className="header-brand">Event Forms</h3></a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon">
                                    <i class="fa fa-bars" style={{color:"#fff", fontSize:"35px"}}></i>
                                </span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <div className="mr-auto"></div>
                                <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/about">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/contact">Create</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/blogs">Blogs</a>
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