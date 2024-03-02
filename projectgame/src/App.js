import logo from './logo.svg';
import './App.css';
import AppHeader from './component/Header/AppHeader';
import Bar from './component/bar/bar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Gametotal from './content/contentimg';
import RecommendGame from './RecommendGame/RecommendGame';
import GameMoney from './GameMoney/GameMoney';
import { useState, useEffect } from "react";


function App() {
  const [gametype, setGameType] = useState(0);
  const [gameId, setGameId] = useState(0);
  const [game, setmygame] = useState();
  console.log("In function App.");
  useEffect(() => {
    console.log("222");
    async function fetchData() {
      const response = await fetch(
        "http://localhost:8080/api/typegame",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            'Content-Type': 'application/json',
          }
        }
      );
      const json = await response.json();
      console.log("json: ", json);
      setGameType(json.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "http://localhost:8080/api/game/type/" + gameId,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            'Content-Type': 'application/json',
            Authorization: "Bearer " + localStorage.getItem("access_token")
          }
        }
      );

      const json = await response.json();
      console.log("setmygame: ",json.data)
      setmygame(json.data);
    }

    fetchData();
  }, [gameId]);


  return (
    <div className="App">

      <div className="Header">
        <AppHeader />
      </div>

      <div className='Image'>
      
      </div>

      <div className="RecommendGame_slid">
        <RecommendGame />
      </div>

      <div className="GameMoney_Sild">
        <GameMoney />
      </div>

      <div className="container">
        {/* <Bar /> */}
        <select value={gameId} onChange={(e) => setGameId(e.target.value)}>
          <option value={0}>ทุกประเภทสินค้า</option>
          
          {gametype && gametype.map(item => {
            return (
              <option key={item.GameType} value={item.GameType}>
                {item.GameTypeName}
              </option>
            );
          })}
        </select>
        <Link to={"/product/add"} className="ms-3 btn btn-outline-primary me-3">เพิ่ม</Link> 
        {/* การทำงานคือ Link จะไปเชื่อมกับ index.js แล้ว ตัว index จะพาเราไปอีกไฟล์เอง */}
      </div>
      

      <div className='container'>
        {console.log("game: ", game)}
        {game && game.map(item => {
          return (
            <Gametotal key={item.GameID} className='' data={item} />
          );
        })}
      </div>

    </div>
  );
}

export default App;
