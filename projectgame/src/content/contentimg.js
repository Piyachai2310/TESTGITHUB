import './contentimg.css';
import { Link } from "react-router-dom";

function Gametotal(props) {

  //   const onDelete = async () =>{
  //     console.log("EnterOndelete")
  //     console.log("props: " ,props)
  //     props.onDelete(props.data);
  // }

  return (
    <div className='card border rounded shadow-sm mt-3'>
      <Link to={`/product/Detail/${props.data.Game_Name}`} className=" text-decoration-none d-flex flex-column" style={{ height: "300px" }}>
        <div style={{ flex: "1" }}> {/* Full-height column for responsiveness */}
          <img src={`http://localhost:8080/game_image/${props.data.image_url}`} className="card-img-top rounded" alt={props.data.Game_Name} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
        </div>
        <div className="mt-3">
          <h5 className="card-title text-primary mb-0">{props.data.Game_Name}</h5>
        </div>
        <div className="d-flex align-items-center justify-content-between mt-3">
        </div>
      </Link>
      <div>
        <Link to={`/product/${props.data.GameID}`} className="btn btn-outline-primary mx-1">แก้ไข</Link>
      <button type="button" className="btn btn-outline-danger mx-1" onClick={() => props.onDeleteGame(props.data)}>ลบ</button>
      </div>
    </div>



  );

}
export default Gametotal;