import './App.css';
import AboutUsPage from './pages/AboutUsPage';
import BmiCalPage from './pages/BmiCalPage';
import MyHobbyPage from './pages/MyHobbyPage';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import LuckyNumberPage from './pages/LuckyNumberPage';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="about" element={
          <AboutUsPage />
        } />
      
        <Route path="/" element={
          <BmiCalPage />
        } />

        <Route path='hobby' element={
          <MyHobbyPage />
        } />

        <Route path='luckynumber' element={
          <LuckyNumberPage />
        } />
        
      </Routes>
    </div>
  );
}

export default App;
