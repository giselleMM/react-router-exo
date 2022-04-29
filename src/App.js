import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from './RouterBasic';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu></Menu>
      </header>
    </div>
  );
}

export default App;
