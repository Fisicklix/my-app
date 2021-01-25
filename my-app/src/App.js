import logo from './logo.svg';
import './App.css';

function App() {

    const handleSubmit = event => {
     event.preventDefault();
     alert('Hola'+name)
   }
  return (
    <div className="wrapper">
      <h1>Ingrese su nombre!</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input name="name" />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
