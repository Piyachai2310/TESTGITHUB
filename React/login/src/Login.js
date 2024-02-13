// import { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

// import {Form,Row,Col,Button} from 'react-bootstrap';
// import { useNavigate } from "react-router-dom";

// export default function Login(){
//   const [validated, setValidated]=useState(false);
//   const [username, setUsername]=useState("");
//   const [password, setPassword]=useState("");
//   let navigate = useNavigate();
//   const onLogin = (event) => {
//     const form = event.currentTarget;
//     event.preventDefault();
//     if (form.checkValidity()===false){
//       event.stopPropagation();
//     } else {
//         doLogin();
//     }
//     setValidated(true);
//   }

//   const doLogin = async () => {
//     // ตรวจสอบว่า username และ password ถูกต้องหรือไม่
//     if (username === "admin" && password === "12345") {
//       // ถ้าถูกต้อง, เปลี่ยนหน้าไปที่ "home"
//       navigate("home", { replace: false });
//     } else {
//       // ถ้าไม่ถูกต้อง, แจ้งเตือน
//       alert("Invalid Username/Password")
//     }
//   }

//   return (
//     <div className="container m-auto">
//       <Form noValidate validated={validated} onSubmit={onLogin}>
//         <Row className="mb-3">
//           <Form.Group as={Col} controlId="validateUsername">
//             <Form.Label> Username</Form.Label>
//             <Form.Control
//               required
//               type="text"
//               placeholder="Enter Username"
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <Form.Control.Feedback type="invalid">
//               กรุณากรอก Username
//             </Form.Control.Feedback>
//           </Form.Group>
//         </Row>
//         <Row className="mb-3">
//           <Form.Group as={Col} controlId="validatePassword">
//             <Form.Label> Password</Form.Label>
//             <Form.Control
//               required
//               type="password"
//               placeholder="Password"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <Form.Control.Feedback type="invalid">
//               กรุณากรอก Password
//             </Form.Control.Feedback>
//           </Form.Group>
//         </Row>
//         <Row>
//           <Col md={3}>
//             <Button type="submit"> Login </Button>
//           </Col>
//         </Row>
//       </Form>
//     </div>
//   );
// }

import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Form, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

var md5 = require("md5");

export default function Login() {
  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const onLogin = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      doLogin();
    }
    setValidated(true);
  }

  const getAuthenToken = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/authen_request",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: username
          }),
          // mode: 'cors',
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error fetching authen token:", error);
      throw error;
    }
  };

  const getAccessToken = async (authToken) => {
    console.log(authToken);
    try {
      var baseString = username + "&" + md5(password);
      var authenSignature = baseString;
      console.log(baseString);
      const response = await fetch(
        "http://localhost:8080/api/access_request",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            auth_signature: authenSignature,
            auth_token: authToken
          })
        }
      );

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching access token:", error);
      throw error;
    }
  };


  const doLogin = async () => {
    console.log("000");
    console.log("000");
    try {
      const data1 = await getAuthenToken();
      console.log("1");
      const authToken = data1.data.auth_token;
      console.log("1.1");
      const data2 = await getAccessToken(authToken);
      console.log("2");
      // console.log(access_token);
      console.log(data1);
      console.log(data2);
      // localStorage.setItem("access_token", data2.data.access_token);
      localStorage.setItem("user_id", data2.data.account_info.user_id);
      localStorage.setItem("username", username);
      localStorage.setItem("first_name", data2.data.account_info.first_name);
      localStorage.setItem("last_name", data2.data.account_info.last_name);
      localStorage.setItem("email", data2.data.account_info.email);
      localStorage.setItem("role_id", data2.data.account_info.role_id);
      localStorage.setItem("role_name", data2.data.account_info.role_name);
      console.log("3");
      navigate("home", { replace: false });

    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid Username/Password");
    }
  }

  // const doLogin = async () => {
  //   const data1 = await getAuthenToken();
  //   // const authToken = data1.data.auth_token;
  //   const authToken = data1.data.auth_token;

  //   const data2 = await getAccessToken(authToken);

  //   localStorage.setItem("access_token", data2.data.access_token);
  //   localStorage.setItem("user_id", data2.data.account_info.user_id);
  //   localStorage.setItem("username", username);
  //   // localStorage.setItem("password", password);
  //   localStorage.setItem("first_name", data2.data.account_info.first_name);
  //   localStorage.setItem("last_name", data2.data.account_info.last_name);
  //   localStorage.setItem("email", data2.data.account_info.email);
  //   localStorage.setItem("role_id", data2.data.account_info.role_id);
  //   localStorage.setItem("role_name", data2.data.account_info.role_name);

  //   navigate("home", { replace: false});
  // }

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
