import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Form, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API_GET, API_POST } from './api';

// ใช้สำหรับการ debug URL ว่าอยู่ใน path ไหนในปัจจุบัน
import { useLocation } from 'react-router-dom';

export default function ProductDetail() {
    const params = useParams();

    const location = useLocation();

    const [productName, setProductName] = useState(""); //ชื่อเกม
    const [GameType, setGameType] = useState([]); //แสดงประเภทเกม [ใช้เพื่อ map]
    const [gameID, setgameID] = useState(0);
    const [productTypeId, setProductTypeId] = useState(0); //แสดงประเภทเกม [ใช้เพื่อส่งต่อปรเภทเกมที่รับ]
    // const [price, setPrice] = useState(0);
    const [detail, setDetail] = useState(0); //รายละเอียดเกม
    const [validated, setValidated] = useState(false);

    { console.log("[Enter ProductDetail]") }

    useEffect(() => {
        console.log("222");
        async function fetchData() {
            const response = await fetch(
                "http://localhost:8080/api/typegame",
                {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        'Content-Type': 'application/json',
                        Authorization: "Bearer " + localStorage.getItem("access_token")
                    }
                }
            );
            const json = await response.json();
            // console.log("json: ", json);
            setGameType(json.data);
        }
        fetchData();
    }, []);
    
    useEffect(() => {
        async function fetchData(productId) {
            let json = await API_GET("gamedetail/" + productId);
            var data = json.data[0];
            console.log("test dataGet: " , data);
            setgameID(data.GameID)
            setProductName(data.Game_Name)
            setProductTypeId(data.GameType)
            setDetail(data.DetailGame)
        }
        
        if (params.productId != "add") {
            // console.log("2222222222222222222");
            fetchData([params.productId]);
        }
    }, [params.productId]);


    const doUpdateProduct = async () => {
        const json = await API_POST("product/update", {
            GameID: gameID,
            productName: productName, 
            product_type_id: productTypeId,
            detail: detail
        });
        if (json.result) {
            window.location = "/product";
        }
    }



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
        console.log("json: ", json);
        if (json.result) {
            window.location = "/product";
        }
    }


    return (
        <>
            {console.log("pasreams: ", params)}

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
                                        GameType.map(item => (
                                            <option
                                                key={item.GameType}
                                                value={item.GameType}>{item.GameTypeName}
                                            </option>
                                        ))
                                    }

                                </Form.Select>
                                <Form.Control.Feedback type="invalid">กรุณาเลือก ประเภทเกม</Form.Control.Feedback>
                            </Form.Group>
                        </Row>

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