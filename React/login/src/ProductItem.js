import { Link } from "react-router-dom";

export default function ProductItem(props) {
    return (
        <div className="row border rounded shadow-sm mt-3">
            <div className="col-3">
                <img src={`http://localhost:8080/images/${props.data.image_url}`} width={100} />
            </div>
            <div className="col-7">
                <h5 className="text-primary">{props.data.product_name}</h5>
                <Link to={`/product/${props.data.product_id}`} className="btn btn-outline-primary me-3">แก้ไข</Link>
                <button type="button" className="btn btn-outline-danger">ลบ</button>
            </div>
            <div className="col-2">
                <span className="text-danger fs-4">{props.data.price}</span>
            </div>
        </div>
    );
}

