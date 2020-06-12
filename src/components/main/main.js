import React ,{ Component } from "react";
import { Switch , Route , Redirect } from "react-router-dom";
import Home from "../home/home.js";
import Navbar from "../navbar/navbar.js";
import CreateExercise from "../exercises/exercise.create.js";
import ListExercise from "../exercises/exercise_list.js";
import UpdateExercise from "../exercises/exercise_update.js";
import CreateUser from "../user/create_user.js";

class Main extends Component{
    render() {
        return(
            <div className="container">
                <Navbar />
                <Switch>
                    <Route path="/home" component={() => <Home />} />
                    <Route path="/create" component={() => <CreateExercise />} />
                    <Route path="/user" component={() => <CreateUser />} />
                    <Route path="/edit/:id" component={() => <UpdateExercise />} />
                    <Route path="/listexercise" component={() => <ListExercise />} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        );
    }
}

export default Main;