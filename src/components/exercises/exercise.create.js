import React , { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class CreateExercise extends Component{
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username : "",
            description : "",
            duration : 0,
            date : new Date(),
            users : []

        }
    }
    componentDidMount() {
        this.setState({
            users : ['avisek' , 'avishek'],
            username : "avisek"
        })
    }

    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        const exercise = {
            username : this.state.username,
            description : this.state.description,
            duration : this.state.duration,
            date : this.state.date
        }
        console.log(exercise);
        window.location = "/create";
    }

    

    render() {
        return(
            <div className="container">
                <h1 className="text-center">Create Exercises</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <select name="username" 
                            required
                            className="form-control"
                            value = {this.state.username}
                            onChange = {this.onChange}
                        >
                            {
                                this.state.users.map((user)=> {
                                    return(
                                        <option key={user} value={user}>
                                            {user}
                                        </option>
                                    )
                                })
                            }

                        </select>
                    </div>
                   
                    <div className="form-group">
                        <input className="form-control" value = {this.state.description} name="description" onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" value = {this.state.duration} name="duration" onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <DatePicker 
                            selected={this.state.date}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-success" />
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default CreateExercise;