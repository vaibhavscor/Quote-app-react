 // advice api  {using API IN REACT}
import React, { Component } from 'react'
import axios from 'axios';
import './assests/index.css';

export default class App extends Component {
  state = {advise: ""};

// function calling 
componentDidMount() {
  // console.log('compoenent did mount')
  this.fetchAdvice();
}
  
// fetching the advice 

// not using const bec. it is a fucntion belonging to class
fetchAdvice  = () => {
  axios.get('https://api.adviceslip.com/advice')
  // using .then() and .catch we can get the response in the way we like 
            .then((response) => {
              
                // console.log(response.data.slip.advice);
              // *if wirtten wrong name it will reurn undefined 
      
              // *destrucuring advice 
              // *note we write that value in {} that we want and rest address we assign it 
              const { advice } = response.data.slip;
              console.log(advice);
              this.setState({advise: advice});

              })
  
            .catch((error) => {
                console.log("kuch to gadbad hai daya");
            });
  // if api is corrent then this is executed else catch is executed 

}

  render() { 
    // console.log("HIIIIIIIIIIIIIIIII");
    // console.log(this.state);
    return (
        <div className="app">
          <dic className="card">
          <h1 className="heading">{this.state.advise}</h1>
          <button className="button" onClick={this.fetchAdvice}>Push me</button>
          </dic>
        </div>
    )
  }
}


// to call a fucntion from button use this.fetchAdvice


