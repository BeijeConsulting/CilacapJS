import React from 'react';
import ReactDOM from 'react-dom';

//
class UserContainer extends React.Component {	

	state = {
		user: {},
		id: undefined
	}

	render() {
		return (
			<div>
				<Left name="left" newState={this.handleClick} />
				<Right name="right" value={this.state.id || "-1"} />
			</div>
		);
	}
}

// OK
class Left extends React.Component {
	state = {
		users: []
	}
	
	handleClick = buttonName => {
		this.props.clickHandler(buttonName);
	};
	
	componentWillMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(json => {
				this.setState({users: json });
				//console.log(json);
			});
	}
	
	render () {
		var items = this.state.users.map((item, index) => {
			return (
				<UserItem key={index} id={item.id} name={item.name} />
			);
		});
		
		console.log(items);
		
		return (
			<ul className="list-group"> {items} </ul>
		)
	}
}


class Right extends React.Component {
	
	render() {
		if(this.props.value === "-1") {
			return(
				<div className={this.props.name}>{this.props.value}</div>
			);
		} else {
			return(
				<div className={this.props.name}>div right</div>
			);
		}
	}
}
	

class DettaglioUtente extends React.Component {
	render() {
		return(
			<div>{this.props.user}</div>
		);
	}
}

class UserItem extends React.Component {
	
	constructor(props) {
		super(props);
		this.mostraUser = this.mostraUser.bind(this);
	}
	
	state = {
		user: {},
		id: ""
	}
	
	handleClick = idButton => {
		this.props.clickHandler(idButton);
		console.log(idButton);
	};
	
	componentWillMount() {
		fetch('https://jsonplaceholder.typicode.com/users/' + this.props.id)
			.then(response => response.json())
			.then(json => {
				this.setState({user: json });
				console.log("JSON: " + json);
				//console.log(this.state.users);
			});
	}
			
	mostraUser(event) {
		console.log("MostraUser: " + this.state.user.id);
	}
	
	render () {
		return(
			<div>
				<button type="button" id={this.props.id} onClick={this.mostraUser}>Id: {this.props.id}, Name: {this.props.name}</button>
			</div>
		);
	}
}

function show(obj, idButton) {
	console.log("OBJ: ");
	console.log("idButton: " + idButton);
	return {
      user: {},
      id: idButton
    };
}

export default UserContainer;