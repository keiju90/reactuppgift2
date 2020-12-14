import React, { Component } from 'react';

/**
  * @desc class AddUserComponent -  Has a state with userinfo. 
  * Includes a form to add a user to state. State is sent to softhouse api. 
*/
export default class AddUserComponent extends Component {

    constructor(props) {
        super(props)
            this.state = {
                name: "", 
                username: "",
                email: "",
                address: {
                    street: "Lassievägen 10",
                    suite: "123",
                    city: "Calverton",
                    zipcode: "123 45",
                        geo: {
                            lat: 0,
                            lng: 0
            }
            }
        }
    }

/**
  * @desc changeHandler - checks which inputfield is written into by the e.target.name and sets it to e.target.value. 
  * sets state to the result.
*/
changeHandler = e => {
    this.setState({[e.target.name]: e.target.value})
}

/**
  * @desc submitHandler - 
  * Prevents the page from loading with e.preventDefault.
  * posts this.state to api softhouse users.
*/
submitHandler = e => {
e.preventDefault();

fetch('https://api.softhouse.rocks/users', {
    method: 'post',
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(this.state)
}).then(function (response) {
    //response.json() is resolving the promise. It waits for the body to load.
    return response.json(); 
}).then(function (responseData) {
    // refreshes the page after form is submitted
    function refreshPage() {
        window.location.reload(true);
    }
    refreshPage();
});
}
    render() {
        const {name, username, email} = this.state
        
        return (
            <div>
                <h2>Add a doggo</h2>

                <form onSubmit={this.submitHandler}>
                    <input  type="text" 
                            name="name"
                            value={name}
                            placeholder= "Write name here..."
                            onChange={this.changeHandler}>
                    </input>

                    <input 
                    type="text" 
                    name="username"
                    value={username} 
                    placeholder= "Write username here..." 
                    onChange={this.changeHandler}>
                    </input>

                    <input 
                    type="text" 
                    name="email"
                    value={email} 
                    placeholder= "Write email here..." 
                    onChange={this.changeHandler}>
                    </input>
                    
                    <button 
                    type='submit'>
                        Add a new user
                    </button>  
            </form>
            </div>
        )
    }
}  