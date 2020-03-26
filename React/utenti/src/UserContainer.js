import React from 'react';
import ReactDOM from 'react-dom';

// OK ?
class UserContainer extends React.Component {	
	
	state = {
		id: null
	}

	aggiorna() {
		this.setState({id: 5});
	}

	render() {
		return (
			<div>
				<Left name="left" onClick={this.aggiorna} />
				<Right name="right" id={this.state.id}/>
			</div>
		);
	}
}

class Right extends React.Component {
	state = {
		user: {},
	}
	
	/*constructor(props) {
		super(props);
		console.log(this.props.value);
		this.setState({id: this.props.value})
	}*/
	
	
	
	componentWillMount() {
		if(this.props.id) {
			fetch('https://jsonplaceholder.typicode.com/users/' + this.props.id)
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
			<DettaglioUtente user={this.state.user} />
		);

	}
}
	

class DettaglioUtente extends React.Component {
	render() {
		return(
			<div>{this.props.user.name}</div>
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
				<UserItem key={index} id={item.id} name={item.name} aggiorna={this.props.aggiona} />
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
		console.log("Aggiorna: " + this.props.aggiorna);
	}
			
	mostraUser(event) {
		console.log("MostraUser: " + this.props.id);
	}
	
	render () {
		return(
			<div>
				<button type="button" id={this.props.id} onClick={this.props.aggiona}>Id: {this.props.id}, Name: {this.props.name}, prova: {this.props.id}</button>
			</div>
		);
	}
}


function getId(id) {
	return id;
}


export default UserContainer;