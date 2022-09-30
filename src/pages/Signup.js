import Base from "../components/Base";
import {
  Container,
  Card,
  CardHeader,
  CardBody,
 
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import Form from 'react-bootstrap/Form';
import { Button, Row, Col } from "reactstrap";
import { useEffect, useState } from "react";
import { signUp } from "../services/user-service";
// import {toast} from 'react-toastify';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  //submitting the form

  const handleChange = (e) => {
    data[e.target.name] = e.target.value;
  };
  const submitForm = (event) => {
    event.preventDefault();

    if(/[^a-zA-z]/.test(data.firstName) || data.firstName.length<4){
      toast.error("first name invalid", {
        position: "top-center",
      });
    }else
    if(/[^a-zA-z]/.test(data.lastName) || data.lastName.length<4){
      toast.error("last name invalid", {
        position: "top-center",
      });
    }else
    if(data.password.length<=3 ||  data.password.length>10){
      toast.error("password invalid", {
        position: "top-center",
      });
    }else
    if(data.mobile== null || data.mobile==undefined|| data.mobile.length!=10){
      toast.error("mobile number invalid", {
        position: "top-center",
      });
    } else if(/[^a-zA-z]/.test(data.city)){
      toast.error("city invalid", {
        position: "top-center",
      });
    }else{
    signUp(data)
      .then((resp) => {
        console.log(resp);
        console.log("success log");
        toast.success("user registered successfully !! user id =" + resp.id, {
          position: "top-center",
        });
        navigate({ pathname: "/login" });
      })
      .catch((error) => {
        console.log("error",error);
        toast.error(error.response.data.message, {
          position: "top-center",
        });
      });}
  };

  return (
    <div className="bg">
    <Base>
      <Container>
        <Row className="mt-2">
          <Col sm={{ size: 6, offset: 3 }}>
            <Card className="changecolor mt-3">
              <CardHeader className="bgchange">
                <h3>Fill Information to Register !</h3>
              </CardHeader>
              <CardBody>
                {/* creatig form */}
                <Form onSubmit={submitForm} >
                  {/* firstnamefield */}
                  <FormGroup>
                    <Label for="firstname">Enter First Name</Label>
                    <Input
                      type="text"
                      placeholder="enter here"
                      name="firstName"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      required  
                      value={data.firstName}
                    />
                  </FormGroup>

                  {/* lastnamefield */}
                  <FormGroup>
                    <Label for="lastname">Enter Last Name</Label>
                    <Input
                      type="text"
                      placeholder="enter here"
                      name="lastName"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      required
                      value={data.lastName}
                    />
                  </FormGroup>

                  {/* emailfield */}
                  <FormGroup>
                  <Form.Label>Email address</Form.Label>
                  <input
                      type="email"
                      placeholder="enter here"
                      name="email"
                      className="form-control"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      required
                      value={data.email}
                    />
                 
                    
                  
                  </FormGroup>

                  {/* password field */}
                  <FormGroup>
                    <Label for="password">Enter Password</Label>
                    <Input
                      type="password"
                      placeholder="enter here"
                      name="password"
                      onChange={(e) => {
                        handleChange(e);
                      }}  required
                      value={data.password}
                    />
                  </FormGroup>

                  {/* mobile field */}
                  <FormGroup>
                    <Label for="mobile">Enter Mobile No</Label>
                    <Input
                      type="number"
                      placeholder="enter here"
                      name="mobile"
                      onChange={(e) => {
                        handleChange(e);
                      }}  required
                      value={data.mobile}
                    />
                  </FormGroup>

                  {/* // City Field */}
                  <FormGroup>
                    <Label for="city">Enter City</Label>
                    <Input
                      type="text"
                      placeholder="enter here"
                      name="city"
                      style={{textTransform:"UpperCase"}}
                      onChange={(e) => {
                        handleChange(e);
                      }}  required
                     value={data.city}
                    />
                  </FormGroup>

                  {/* address field */}
                  <FormGroup>
                    <Label for="address">Enter Address</Label>
                    <Input
                      type="textarea"
                      placeholder="enter here"
                      name="address"
                      style={{ height: "150px" }}
                      onChange={(e) => {
                        handleChange(e);
                      }}  required
                      value={data.address}
                    />
                  </FormGroup>

                  {/* dob field */}
                  <FormGroup>
                    <Label for="dob">Enter Date Of Birth</Label>
                    <Input
                      type="date"
                      placeholder="enter here"
                      name="dob"
                      onChange={(e) => {
                        handleChange(e);
                      }}  required
                      value={data.dob}
                    />
                  </FormGroup>

                  {/* gender field */}
                  <FormGroup>
                    <Label for="gender">Enter Gender</Label>
                    <Input
                      type="text"
                      placeholder="enter here"
                      name="gender"
                      onChange={(e) => {
                        handleChange(e);
                      }}  required
                     value={data.gender}
                    />
                  </FormGroup>

                  <Container className="text-center">
                    <Button
                      outline
                      type="submit"
                      color="primary"
                      className="demo1"

                    >
                      Register
                    </Button>
                    <Button color="secondary" className="ms-2" type="reset">
                      Reset
                    </Button>
                  </Container>
                  <ToastContainer />
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
    </div>
  );
};

export default Signup;
