import logo from './logo.svg';
import './App.css';


import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { username: '' };
    this.count=0;
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
    this.count=this.count+1
  }
  render() {
    return (
      <div>
      <form>
      <h1>Hello {this.state.username}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      
      </form>
      <p>Tu nombre tiene {this.count} caracteres</p>
      </div>
 
    );
  }
}

export default App;
