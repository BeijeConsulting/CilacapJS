import React from 'react';
import './App.css';


export default class App extends React.Component{
  constructor(){
    super();
    this.state={
       data:null,
    }
    this.getdata();
    }
    
      getdata(){
        let data=fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {this.setState({data:json});})
      }

      
      myFunction(item){
        console.log(item);
      };


render(){
  return(
    <div>
    <div class= "header">
    Elenco ivo
    </div>
    <section class="utenti">
    {
    this.state.data?
     this.state.data.map((item)=>
     
     <button onClick={this.myFunction(item)}><h2>{item.name}</h2></button>
  )
     : 
     <h3>Attendi i dati...</h3>
  
     }
    </section>
    <section class="visualizza"> 
    </section>
    </div>
  );
}
}
