import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Form, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// ใช้สำหรับการ debug URL ว่าอยู่ใน path ไหนในปัจจุบัน
import { useLocation } from 'react-router-dom';

export default function ProductDetail() {
    const params = useParams();

    const location = useLocation();

    const [productName, setProductName] = useState("");
    const [productTypes, setProductTypes] = useState([]);
    const [productTypeId, setProductTypeId] = useState(0);
    // const [price, setPrice] = useState(0);
    const [detail, setDetail] = useState(0);
    const [validated, setValidated] = useState(false);

    {console.log("[Enter ProductDetail]")}

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                "http://localhost:8080/api/product_types",
                {
                    method: "GET",
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: "Bearer " + localStorage.getItem("access_token")
                    }
                }
            );

            const json = await response.json();
            console.log("json: " , json);
            setProductTypes(json.data);
        }
        fetchData();
    }, []);


    const onSave = (event) => {
        console.log("1111");
        console.log(event);

        const form = event.currentTarget;
        event.preventDefault();

        if (form.checkValidity() === false) {
            console.log("1 Error[ProductDetail]");
            event.stopPropagation();
        }
        else {
            console.log("1 Not Error[ProductDetail]");
            console.log("pasreams: " , params);
            if (params.productId == "add") {
                console.log("2 pass[ProductDetail]");
                doCreateProduct();
            }
            else {
                console.log("2 Not pass[ProductDetail]");
                doUpdateProduct();
            }
        }

        setValidated(true);
    }

    //จะเข้าฟังก์ชั่นนี้ จะต้องผ่าน Onsave ก่อน 
    const doCreateProduct = async () => {
        console.log("4444");
        const response = await fetch(
            "http://localhost:8080/api/product/add",
            {
                
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json',
                    Authorization: "Bearer " + localStorage.getItem("access_token")
                },
                body: JSON.stringify({
                    product_type_id: productTypeId,
                    product_name: productName,
                    detail: detail
                })
            }
        );
        let json = await response.json();
        console.log("json: " , json);
        if (json.result) {
            window.location = "/home";
        }
    }

    const doUpdateProduct = () => {

    }



    return (
        <>
            product detail ID: {params.productId}
            {console.log(params)}
            {console.log('Current URL:', location.pathname)}
            <>

                <div className='container m-auto'>
                    <Form noValidate validated={validated} onSubmit={onSave}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="validateProductName">
                                <Form.Label>ชื่อเกม</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    value={productName}
                                    placeholder="ชื่อเกม"
                                    onChange={(e) => setProductName(e.target.value)}
                                />
                                <Form.Control.Feedback type="invalid">กรุณากรอก ชื่อเกม</Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="validateProductType">
                                <Form.Label>ประเภทเกม</Form.Label>
                                <Form.Select
                                    value={productTypeId}
                                    onChange={(e) => setProductTypeId(e.target.value)}
                                    required
                                >

                                    <option value={0} label="กรุณาเลือกประเภทเกม"></option>
                                    <option label="กรุณาเลือกประเภทเกม"></option>
                                    {
                                        productTypes.map(item => (
                                            <option
                                                key={item.product_type_id}
                                                value={item.product_type_id}>{item.product_type_name}
                                            </option>
                                        ))
                                    }

                                </Form.Select>
                                <Form.Control.Feedback type="invalid">กรุณาเลือก ประเภทเกม</Form.Control.Feedback>
                            </Form.Group>
                        </Row>

{/* 
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="validateProductName">
                                <Form.Label>ราคาสินค้า</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    value={price}
                                    placeholder="ราคาสินค้า"
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                                <Form.Control.Feedback type="invalid">กรุณากรอก ราคาสินค้า</Form.Control.Feedback>
                            </Form.Group>
                        </Row> */}

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="validateProductName">
                                <Form.Label>รายละเอียดเกม</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    required
                                    type="text"
                                    value={detail}
                                    min={0}
                                    placeholder="รายละเอียดเกม"
                                    style={{ height: '200px' }}
                                    onChange={(e) => setDetail(e.target.value)}
                                />
                                <Form.Control.Feedback type="invalid">กรุณากรอก รายละเอียดเกม</Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                    

                        <Row className="mb-3">
                            <button variant="primary" as="input" type="submit" value="SAVE">SAVE</button>
                        </Row>
                    </Form>
                </div>


            </>
        </>
    );

}