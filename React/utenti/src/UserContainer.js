import React from 'react';
import ReactDOM from 'react-dom';

// OK ?
class UserContainer extends React.Component {	

	state = {
		user: {},
		id: undefined
	}

	render() {
		return (
			<div>
				<Left name="left" />
				<Right name="right" value={this.state.id || "1"} />
			</div>
		);
	}
}

class Right extends React.Component {
	
	state = {
		user: {},
		id: null
	}
	

	componentWillMount() {
		if(this.state.id) {
			fetch('https://jsonplaceholder.typicode.com/users/' + this.state.id)
				.then(response => response.json())
				.then(json => {
					this.setState({user: json });
					console.log("JSON: " + json);
					this.setState({user: json});
				});
		}
	}
	
		
	render() {
		return(
			<div>Id: {this.state.user.id} - Nome: {this.state.user.name}</div>
		);

	}
}
	

class DettaglioUtente extends React.Component {
	render() {
		return(
			<div>{this.props.user}</div>
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


// OK
class UserItem extends React.Component {
	
	constructor(props) {
		super(props);
		this.mostraUser = this.mostraUser.bind(this);
	}
			
	mostraUser(event) {
		console.log("MostraUser: " + this.props.id);
	}
	
	render () {
		return(
			<div>
				<button type="button" id={this.props.id} onClick={this.mostraUser}>Id: {this.props.id}, Name: {this.props.name}, prova: {this.props.id}</button>
			</div>
		);
	}
}


export default UserContainer;