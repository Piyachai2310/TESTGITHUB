import './App.css';
import AboutUsPage from './pages/AboutUsPage';
import BMICalPage from './pages/BMICalPage';
import Header from './components/Header';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="about" element={
          <AboutUsPage />
        } />
          <Route path='/'element={
          <BMICalPage />
        } />
      </Routes>
    </div>
  );
}

export default App;
