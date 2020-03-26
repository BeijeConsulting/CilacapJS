import React from 'react';

export default class User extends React.Component{
    render() {
        return (
                <div id={this.props.id} className="User" onClick={getUser}>
                    <p> 
                    User {this.props.name}
                    </p>  
                </div>
        );
    };
}

function getUser(props) {

    fetch('https://jsonplaceholder.typicode.com/users/' + User.id)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let usersLength = Object.keys(data).length;
            for (var i = 0; i < usersLength; i++) {                   
        }
        console.log(data.name);  
        });

}