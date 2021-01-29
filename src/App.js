import logo from './logo.svg';
import './App.css';


import React from 'react';
import ReactDOM from 'react-dom';
import {transformHoursToMinutes} from './utils.js';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h1>Convertidor de horas a minutos</h1>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            <h4>Ingrese la cantidad de Horas que desea convertir</h4>
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Añadir #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    if(isNaN(this.state.text)){
      alert("Ese no es un numero!")
      return;
    }
    const minutes = transformHoursToMinutes(this.state.text)
    const newItem = {
      text: minutes,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

export default App;

