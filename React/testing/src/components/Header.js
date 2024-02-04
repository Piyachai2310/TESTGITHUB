import './Header.css'
import { Link } from "react-router-dom";
function Header(){
    return(
        <div className='body'>
            <h1 id="topic">โปรแกรมคำนวณ BMI:</h1>
                <Link to="/" className="a">คำนวณ</Link> 
                <Link to="/about" className="a">ผู้จัดทำ</Link> 
                <Link to="/hobby" className="a">งานอดิเรก</Link>
                <Link to="/luckynumber" className="a">Lucky Number</Link>
        </div>
    );
}
export default Header;  