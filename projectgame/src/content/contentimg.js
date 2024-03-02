import './contentimg.css';
import { Link } from "react-router-dom";

function Gametotal(props) {


    return (
        <Link to={"/product/Detail"} className="row border rounded shadow-sm mt-3 p-2">
           <div className="col-3">
                <img src={`http://localhost:8080/game_image/${props.data.image_url}`} width={100} />
            </div>
            <div className="col-7">
                <h5 className="text-primary">{props.data.Game_Name}</h5>
            </div>
           
        </Link>
    );
    
}
export default Gametotal;