import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: { firstName: "Emi", lastName: "Juarez" },
      nacionalidad: "Argentino",
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hola {this.state.name.firstName} {this.state.name.lastName}, soy{" "}
            {this.state.nacionalidad ?? "Argentino"}
          </p>
          <button
            onClick={() => {
              this.setState({
                name: { firstName: "Emilio" },
              });
            }}
          >
            Change name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
