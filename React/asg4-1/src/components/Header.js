import { Link } from "react-router-dom";

function Header() {
    return(
        <div align="left">
            โปรแกรมคำนวณ BMI: &nbsp; &nbsp; &nbsp;
            <Link to="/">คำนวณ</Link>
            &nbsp; &nbsp; &nbsp;
            <Link to="/about">ผู้จัดทำ</Link>
            <hr/>
        </div>
    );
}

export default Header;