import logo from './logo.svg';
import './App.css';
import AppHeader from './component/Header/AppHeader';
import Bar from './component/bar/bar';


function App() {
  return (
    <div className="App">
      <div className="Header">
        <AppHeader />
      </div>
      <div className="bar">
        <Bar />
      </div>

    </div>
  );
}

export default App;
