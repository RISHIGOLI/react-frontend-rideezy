import React from "react";
import { Col, Container, FormCheck, Row, Form, Button } from "react-bootstrap";
import "./Login1.css";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { myAxios, privateAxios } from "../services/helpler";

function Login1() {
  const [inputdata, setinputdata] = useState({});
  const [load, setload] = useState(false);
  const [response, setresponse] = useState(false);
  const { data, token } = JSON.parse(localStorage.getItem("data"));

  useEffect(() => {
    myAxios({
      url: `/api/users/getUserById/${data.id}`,
      method: "GET",
    })
      .then((res) => {
        setinputdata(res.data.data);
        setload(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleinput = (e) => {
    inputdata[e.target.name] = e.target.value;
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    setload(false);
    privateAxios({
      url: `/api/users/${data.id}`,
      method: "PUT",

      data: {
        address: inputdata.address,
        city: inputdata.city,
        dob: inputdata.dob,
        email: inputdata.email,
        firstName: inputdata.firstName,
        gender: inputdata.gender,
        lastName: inputdata.lastName,
        mobile: inputdata.mobile,
        password: inputdata.Password,
      },
    })
      .then((res) => {
        setresponse(res.data);

        setload(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {load ? (
        <div className="login-section">
          <div>
            <Container>
              <div className="profile-image">
                <img src="https://banner2.cleanpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg" />
              </div>
              {response.status ? (
                <h4 className="response">{response.message}</h4>
              ) : null}
              <Form onSubmit={handlesubmit}>
                <Row>
                  <Col>
                    <div className="mb-3">
                      <Form.Label htmlFor="FirstName" className="form-label">
                        FirstName
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className="form-control"
                        placeholder="FirstName"
                        name="firstName"
                        defaultValue={inputdata.firstName}
                        onChange={handleinput}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3">
                      <Form.Label htmlFor="LastName" className="form-label">
                        LastName
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className="form-control"
                        placeholder="LastName"
                        name="lastName"
                        defaultValue={inputdata.lastName}
                        onChange={handleinput}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3">
                      <Form.Label htmlFor="Mobile_NO" className="form-label">
                        Mobile No
                      </Form.Label>
                      <Form.Control
                        type="number"
                        className="form-control"
                        placeholder="Mobile no"
                        name="mobile"
                        defaultValue={inputdata.mobile}
                        onChange={handleinput}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3">
                      <Form.Label htmlFor="Mobile_1" className="form-label">
                        Mobile_1
                      </Form.Label>
                      <Form.Control
                        type="number"
                        className="form-control"
                        placeholder="Mobile_1"
                        name="MobileNO1"
                        defaultValue={1234567}
                        disabled
                        onChange={handleinput}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3">
                      <Form.Label htmlFor="City" className="form-label">
                        City
                      </Form.Label>

                      <Form.Control
                        type="text"
                        className="form-control"
                        placeholder="city"
                        name="city"
                        defaultValue={inputdata.city}
                        onChange={handleinput}
                      />
                    </div>
                  </Col>

                  <Col md={6}>
                    <div className="mb-3">
                      <Form.Label htmlFor="gender" className="form-label">
                        Gender
                      </Form.Label>
                      <div style={{ marginTop: "4px" }}>
                        <FormCheck
                          type="radio"
                          inline
                          label="Male"
                          name="gender"
                          value="Male"
                          defaultChecked={inputdata.gender === "Male"}
                          onChange={handleinput}
                        />

                        <FormCheck
                          type="radio"
                          inline
                          label="Female"
                          name="gender"
                          value="Female"
                          defaultChecked={inputdata.gender === "Female"}
                          onChange={handleinput}
                        />
                      </div>
                    </div>
                  </Col>

                  <Col md={12}>
                    <div className="mb-3">
                      <Form.Label htmlFor="email" className="form-label">
                        Email address
                      </Form.Label>
                      <Form.Control
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="name@example.com"
                        disabled
                        defaultValue={inputdata.email}
                      />
                    </div>
                  </Col>

                  <Col md={6}>
                    <div className="mb-3">
                      <Form.Label htmlFor="dob" className="form-label">
                        Date of Birth
                      </Form.Label>
                      <Form.Control
                        type="date"
                        className="form-control"
                        placeholder="Date of birth"
                        name="dob"
                        defaultValue={inputdata.dob}
                        onChange={handleinput}
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className="mb-3">
                      <Form.Label htmlFor="password" className="form-label">
                        Enter New Password:
                      </Form.Label>
                      <Form.Control
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="Password"
                        onChange={handleinput}
                        required
                      />
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="mb-3">
                      <Form.Label htmlFor="address" className="form-label">
                        Address
                      </Form.Label>
                      <textarea
                        className="form-control"
                        rows="3"
                        name="address"
                        defaultValue={inputdata.address}
                        onChange={handleinput}
                      ></textarea>
                    </div>
                  </Col>
                </Row>
                <input type="submit" className="btn Update" value={"Update"} />
                <input type="reset" className="btn Cancel" value={"Cancel"} />
              </Form>
            </Container>
          </div>
        </div>
      ) : (
        <div className="load-section">
          <div class="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login1;
