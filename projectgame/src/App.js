import logo from './logo.svg';
import './App.css';
import AppHeader from './component/Header/AppHeader';
import Bar from './component/bar/bar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Gametotal from './content/contentimg';
import Sild from './sildImg';


function App() {
  return (
      <div className="App">
        <div className="Header">
          <AppHeader />
        </div>

        <div className="Sild">
          <Sild />
        </div>

        <div className="bar">
          <Bar />
        </div>

        <div className='Game'>
          <Gametotal />
        </div>
      </div>
  );
}

export default App;
