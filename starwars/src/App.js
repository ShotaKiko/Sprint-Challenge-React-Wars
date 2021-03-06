import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
      
    };
  }
  
  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }
  
  
  // handleInputChange = event => {
  //     this.setState({ starwarsChars: this.state.map(char =>{char.name}) });
  //   };
  
    getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

 

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <h2>Character List</h2>
        <div className="container"> {this.state.starwarsChars.map(item => (
            <div className="characterContainer" key={item.name}>
              <p><strong>Name:</strong> {item.name}</p> 
              <p><strong>Gender:</strong> {item.gender}</p> 
              <p><strong>Mass:</strong> {item.mass} </p>
              <a href ={item.homeworld} target="_blank"> Visit Home World</a>
            </div>
          ))}</div>
      
      </div>
    );
  }
}

export default App;
