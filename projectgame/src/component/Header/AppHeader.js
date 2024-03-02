import './AppHeader.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';




function AppHeader() {
  // const [Login, navigate]=useState("");
  let navigate = useNavigate();

  const doLogin = async () => {
    navigate("Login", { replace: false });
  }

  return (
    <header className="app-header">
      <div className="img" >
        <img className="app-header-logo" src="Logogame.jpg" alt="Logo" />
      </div>
      <div className="text">
        <h4>เกี่ยวกับ</h4>
        <h4>ติดต่อ</h4>
        <h4>ชุมชน</h4>
        <div className='Color'>
        </div>
        <div className='login'  onClick={doLogin}>
          login
        </div>
      </div>
    </header>

  );
}


export default AppHeader;
