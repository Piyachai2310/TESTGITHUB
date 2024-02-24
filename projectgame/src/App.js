import logo from './logo.svg';
import './App.css';
import AppHeader from './component/Header/AppHeader';
import Bar from './component/bar/bar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Gametotal from './content/contentimg';
import RecommendGame from './RecommendGame/RecommendGame';
import GameMoney from './GameMoney/GameMoney';
import { useState,useEffect } from "react";


function App() {
  const[game , setmygame] = useState();
  console.log("In function App.");
  useEffect(() => {
    async function fetchData(){
      const response = await fetch(
        "http://localhost:8080/api/game",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            'Content-Type': 'application/json',
          }
        }
      );
      const json = await response.json();
      console.log("json: ",json);
      // setmygame(json.data);
      setmygame(json.data, () => {
        console.log("game: ", game);
      });
    }
    fetchData();
  },[]);

  // useEffect(() => {
  //   console.log("game: ", game);
  // }, [game]);

  return (
      <div className="App">
        
        <div className="Header">
          <AppHeader />
        </div>

        <div className='Image'>
          
        </div>
        
        <div className="Sild">
          <RecommendGame />
        </div>
        
        <div className="Sild">
          <GameMoney />
        </div>

        <div className="bar">
          <Bar  />
         { console.log("1")}
        </div>
        
        <div className='Game'>
        { console.log("2")}
          {/* <Gametotal /> */}
          <div className="container mt-3">
          { console.log("3")}
          {/* { console.log("game: " , game)} */}

          {game.map(item => {
            console.log("4");
            // console.log("game: " , item);
            <div className="row border rounded shadow-sm mt-3">
            <div className="col-3">
                <img src={`http://localhost:8080/game_image/${item.data.image_url}`} width={100} />
                {/* {console.log(img)} */}
            </div>
            <div className="col-7">
                <h5 className="text-primary">{item.data.Game_Name}</h5>
                {/* <Link to={`/game/${item.data.GameID}`} className="btn btn-outline-primary me-3">แก้ไข</Link> */}
                {/* <button type="button" className="btn btn-outline-danger">ลบ</button> */}
            </div>
        </div>
          })}
        </div>
        </div>
      </div>
  );
}

export default App;
