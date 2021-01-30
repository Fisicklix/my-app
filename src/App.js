import './App.css';

import React from 'react';
import List from "./Components/List";
import { transformHoursToMinutes } from './utils.js';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    return (
        <div>
          <h1>Convertidor de horas a minutos</h1>
          <List items={this.state.items} />
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
}

export default App;

