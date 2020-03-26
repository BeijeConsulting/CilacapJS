import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

export default class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    
  };
  const Button = props => <button className={`btn btn--${props.name}`} >click</button>;
  render() {
	  const buttons = name.map(name => <Button key={name} name={name} />);

	  return (
	    <div>
	      {buttons}
	    </div>

//    return (
//      <div id="bottone">
//        <button onClick="show()">{this.props.name}</button>
//      </div>
//    );
  }
}
