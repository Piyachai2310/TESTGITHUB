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



if (localStorage.getItem("access_token")) {
    return (
        <div className="contaimer">
            <select value={productTypeId} onChange={(e) => setProductTypeId(e.target.value)}>
                <option value={0}>ทุกประเภทสินค้า</option>
                {
                    productTypes.map(item => (
                        <option key={item.product_type_id} value={item.product_type_id}>
                            {item.product_type_name}
                        </option>
                    ))
                }
            </select>
            <div className="container mt-3">
                {
                    productTypeId.map(item => (
                        <ProductItem key={item.product_id} data={item} />
                    ))
                }
            </div>
        </div>
    );
}