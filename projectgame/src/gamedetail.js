// import React from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import AppHeader from './component/Header/AppHeader';

import './gamedetail.css'

export default function GameDetail() {
  const { gameDetail } = useParams();
  const [Game, setGameName] = useState("");
  const [product_id ,setproductId] = useState(0); 

  console.log("Params: ", gameDetail);
  const location = useLocation();

  { console.log('Current URL:', location.pathname) }


  useEffect(() => {
    async function fetchGamedata() {
      console.log("3456")
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
      console.log("Game: ", json.data[0])
      setGameName(json.data[0]);
    }

    fetchGamedata();
  }, [gameDetail]);

  if (!gameDetail) {
    // Handle the case when gameId is undefined
    return <div>No game details available.</div>;
  }



  return (
  <div className="game_detail">
  <div className="Header">
    <AppHeader />
  </div>  
  <div className='section'>
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
</div>

  );

}
