import React from 'react';
import ReactDOM from 'react-dom';
import './UsersList.css';


export default class UsersList extends React.Component {

    render() {

        return (
            <div id="UsersList"> 
                    {getAllUsers()}
            </div>
            
        );
    }
}

function getAllUsers() {
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
                    <div  className="User"
                        key={name.name} 
                        id={name.id} 
                        name={name.name}
                        onClick={ () => getUser(name) }
                    >
                    User {name.name}
                    </div>
                ));
                let namesList2 = (
                <div>
                    <div className="UsersList">
                        {namesList}
                    </div>
                    <div id="VisualUsers" className="VisualUsers">

                    </div>
                </div>);
                
              
            ReactDOM.render(namesList2, document.getElementById('UsersList'));
    })
}

function getUser(name) {
    console.log(name.address);
    console.log(name.name);

    let UserInfo = (
    <div>
        <p>Name: {name.name}</p>
        <p>Username: {name.username}</p>
        <p>Email: {name.email}</p>
        <p>Phone: {name.phone}</p>
        <div>Address: </div>
            <p> &emsp; Street: {name.address.street}</p>
            <p> &emsp; Suite:  {name.address.suite}</p>
            <p> &emsp; City:  {name.address.city}</p>
            <p> &emsp; Zipcode:  {name.address.zipcode}</p>
        <div>Company: </div>
            <p> &emsp; Name: {name.company.name}</p>
            <p> &emsp; CatchPhrase: {name.company.catchPhrase}</p>
    </div>
        );
        ReactDOM.render(UserInfo, document.getElementById('VisualUsers'));
    }