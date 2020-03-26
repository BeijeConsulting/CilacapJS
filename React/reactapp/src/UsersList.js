import React from 'react';
import ReactDOM from 'react-dom';
import User from './User.js';

export default class UsersList extends React.Component {

    render() {

        return (
            <div id="UsersList" className="component-users-list">
                    {getUsers()}
            </div>
        );
    }
}

function getUsers() {
        let names = []; 

        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let usersLength = Object.keys(data).length;
                for (var i = 0; i < usersLength; i++) {
                    names.push(data[i]);               
            }
            let namesList = names.map(name => (
                <User key={name.name} id={name.id} name={name.name}></User>
              ));
              
            ReactDOM.render(namesList, document.getElementById('UsersList'));
    })
}