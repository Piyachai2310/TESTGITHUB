import logo from './logo.svg';
import './App.css';
import Profile from './component/Profile';
import Product from './component/Product';
import { useState } from 'react';

const user ={
  firstName: 'Piyachai',
  lastNmae: 'Narongsab',
  imageurl: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww'
}

function App() {
  const [count, setCount] = useState(0);

  function incstate(){
    setCount(count+1)
  }

  function decstate(){
    setCount(count-1)
  }


  return (
    <div className="App">
      <button onClick={incstate} >เพิ่มตัวเลข  </button>
      <button onClick={decstate} >ลดตัวเลข  </button>
      <h1>Count is {count}</h1>
      <h1>Prince of Songkla University</h1>
      <Profile data={user}/>
      <Product />
    </div>
  );
}

export default App;
