import logo from './logo.svg';
import './App.css';
import AppHeader from './component/Header/AppHeader';
import Bar from './component/bar/bar';
import Box from './TattoolItem';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function App() {
  return (
      <div className="App">
        <div className="Header">
          <AppHeader />
        </div>
        <div className="bar">
          <Bar />
        </div>
        <div className="box-grid"> {/*การใส่ path ภาพ จะไม่มี auto จะต้องใส่เองทั้งหมด */}
          <Box title="ภาพเท่ๆ" thumbnalUrl="/logo512.png" /> {/*การส่ง props ชื่อจะต้องตรงกับ props ที่เป็นตัวรับ */}
          <Box title="กล้อง" thumbnalUrl="/logo512.png" />
          <Box title="react" thumbnalUrl="/logo512.png" />
          <Box title="react" thumbnalUrl="/logo192.png" />
        </div>
      </div>
  );
}

export default App;
