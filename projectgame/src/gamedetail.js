import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import AppHeader from './component/Header/AppHeader';

import './gamedetail.css';

export default function GameDetail() {
  const { gameDetail } = useParams();
  const [Game, setGameName] = useState("");
  const location = useLocation();

  useEffect(() => {
    async function fetchGameData() {
      const response = await fetch(
        "http://localhost:8080/api/specifig",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            GameName: gameDetail
          })
        }
      );

      const json = await response.json();
      setGameName(json.data[0]);
    }

    fetchGameData();
  }, [gameDetail]);

  if (!gameDetail || !Game) {
    return <div>No game details available.</div>;
  }

  // แสดง path ปัจจุบันโดยตัดตัวแรก (>)
  const formattedPath = location.pathname.split('/').slice(1).join(' > ');

  return (
    <div className="game_detail">
      <div className="Header">
        <AppHeader />
      </div>  
      <div className='section' >
        <div className="current-path" style={{ color: "#ffffff" }}>
          <p>{formattedPath}</p>
        </div>
        <div className='Display_game'>
          <div className="Imagegame">
            <img src={`http://localhost:8080/game_image/${Game.image_url}`} alt={Game.Game_Name} className="game-image" />
          </div>
          <div className="Namegame">
            <h1 className="game-title">{Game.Game_Name}</h1>
          </div>
        </div>
        <div className="detailgame">
          <p className="game-description">{Game.DetailGame}</p>
        </div>
      </div>
      <div className="current-path">
        <p>Current Path: {location.pathname}</p>
      </div>
    </div>
  );
}
