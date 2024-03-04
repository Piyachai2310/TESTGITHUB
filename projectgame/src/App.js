import logo from './logo.svg';
import './App.css';
import AppHeader from './component/Header/AppHeader';
import Bar from './component/bar/bar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Gametotal from './content/contentimg';
import RecommendGame from './RecommendGame/RecommendGame';
import GameMoney from './GameMoney/GameMoney';
import { useState, useEffect } from "react";
import { API_GET, API_POST, API_DELETE } from './api';

function App() {
  const [gametype, setGameType] = useState([]); // ประเภทเกมส์
  const [gameId, setGameId] = useState(0); //  ID เกมส์
  const [game, setMyGame] = useState([]); // ตัวเกมส์

  useEffect(() => {
    async function fetchGameTypes() {
      try {
        const response = await fetch(
          "http://localhost:8080/api/typegame",
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
        console.log("json: ", json);
        setGameType(json.data);
      } catch (error) {
        console.error("Error fetching game types:", error);
      }
    }

    fetchGameTypes();
  }, []);

  useEffect(() => {
    async function fetchGamesByType() {
      try {
        const response = await fetch(
          `http://localhost:8080/api/game/type/${gameId}`,
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
        console.log("setMyGame: ", json.data)
        setMyGame(json.data);
      } catch (error) {
        console.error("Error fetching games by type:", error);
      }
    }

    fetchGamesByType();
  }, [gameId]);

  const fetchProducts = async () => {
    let json = await API_GET("game/type/" + gameId);
    setMyGame(json.data)
  }

  const onDelete = async (data) => {
    console.log("EnterOndelete App")
    console.log("data: ", data)
    try {
      const json = await API_DELETE("product/delete", {
        gameId: data.GameID
      });

      if (json.result) {
        // Assuming you want to fetch updated data after deletion
        console.log("Deleted successfully!");
        fetchProducts();
      }
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };


  return (
    <div className="App">
      <div className="Header">
        <AppHeader />
      </div>

      <div className='Image'>
        {/* Your Image Component */}
      </div>

      <div className="RecommendGame_slid">
        <RecommendGame />
      </div>

      {/* <div className="GameMoney_Sild">
        <GameMoney />
      </div> */}

      <div className="container">
        <div className="d-flex align-items-center">
          <select
            value={gameId}
            onChange={(e) => setGameId(e.target.value)}
            className="form-select me-5 rounded"
          >
            <option value={0}>ทุกประเภทสินค้า</option>
            {gametype.map(item => (
              <option key={item.GameType} value={item.GameType}>
                {item.GameTypeName}
              </option>
            ))}
          </select>
          <Link to="/product/add" className="btn btn-outline-primary rounded">เพิ่ม</Link>

        </div>

      </div>

      <div className="container mt-3" style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(350px, 1fr))", gap: "16px", maxHeight: "1600px", width: "1200px", alignItems: "center", justifyContent: "center" }}>
        {console.log("game: ", game)}
        {game.map(item => (
          <Gametotal key={item.GameID} data={item} onDeleteGame={onDelete} />
        ))}
      </div>

      <div className='footer' style={{ height: "500px" }}>

      </div>
      {/* 
      <div className="container mt-3">
        {game.map(item => (
          <Gametotal
            key={item.GameID}
            data={item}
            onDelete={onDelete}
          />
        ))}
      </div> */}
    </div>
  );
}

export default App;
