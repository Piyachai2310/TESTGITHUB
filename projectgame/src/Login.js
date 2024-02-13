import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import {Form,Row,Col,Button} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

export default function Login(){
  const [validated, setValidated]=useState(false);
  const [username, setUsername]=useState("");
  const [password, setPassword]=useState("");
  let navigate = useNavigate();
  const onLogin = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity()===false){
      event.stopPropagation();
    } else {
        doLogin();
    }
    setValidated(true);
  }

  const doLogin = async () => {
    // ตรวจสอบว่า username และ password ถูกต้องหรือไม่
    if (username === "admin" && password === "12345") {
      // ถ้าถูกต้อง, เปลี่ยนหน้าไปที่ "home"
      navigate("App", { replace: false });
    } else {
      // ถ้าไม่ถูกต้อง, แจ้งเตือน
      alert("Invalid Username/Password")
    }
  }

  return (
    <div className="container m-auto">
      <Form noValidate validated={validated} onSubmit={onLogin}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="validateUsername">
            <Form.Label> Username</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              กรุณากรอก Username
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="validatePassword">
            <Form.Label> Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              กรุณากรอก Password
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row>
          <Col md={3}>
            <Button type="submit"> Login </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}