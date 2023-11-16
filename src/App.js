import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <img src={logo} className="app__logo" alt="logo" />
        <div class="app__card">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
