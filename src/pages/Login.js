import Base from "../components/Base";
import { Container,Row,Col,Card,CardHeader,CardBody,Form,FormGroup,Label,Input,Button } from "reactstrap";
import { useState } from "react";
// import { toast } from "react-toastify";
import { loginUser } from "../services/user-service";
import { doLogIn } from "../auth";
import { useNavigate } from "react-router-dom";
import './Login.css'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';




const Login = () =>{
  

    const navigate = useNavigate()

    const [loginDetail, setLoginDetail]= useState({
        username:'',
        password:''
    })

    const handleChange=(event,field)=>{
        let actualValue=event.target.value
        setLoginDetail({
            ...loginDetail,
            [field]:actualValue
        })
    };

    const handleFormSubmit=(event)=>{
        event.preventDefault();
       // console.log(loginDetail);
        //validation
        if(loginDetail.username==''){
            toast.error("Username required !!",{
                position:"top-center"});
            return;
        }

        //submit the data to server to generate token
 
        loginUser(loginDetail).then((data)=>{
            console.log(data)
        //   alert(" Login Successfull !!",{
        //         position:"top-center"});
                
            //save the data to localstorage
            doLogIn(data,()=>{
                toast.success("login details is save to localhost !!",{
                    position:"top-center"});
                //redirect to user dashboard page
                navigate("/user/dashboard")
            })
            
        
            
        }).catch(error=>{
          
            console.log(error)
            if(error.status==404){
                toast.error(error.response.data.message)
            }else{
                toast.error("Invalid Username or Password !",{
                    position:"top-center"});
                    return;

            }
        })
    };

    const handleReset=()=>{
        setLoginDetail({
            username:'',
            password:''
        })
    };

    return (
<div className="loginBg" >
<Base>
    <Container>
        <Row >
            <Col sm={
                {
                    size:6,
                    offset:3
                }
            }>
                <Card outline className="bord mt-5 bgchange">
                    <CardHeader className="bgchange">
                        <h3 >Login Here !</h3>
                    </CardHeader>
                    <CardBody>
                        <Form onSubmit={handleFormSubmit}>
                            {/* Email Field */}
                            <FormGroup>
                                <Label for="email">Enter Email</Label>
                                <Input type="text" id="email"
                                value={loginDetail.username}
                                onChange={(e)=> handleChange(e,'username')}
                                />
                                
                                
                            </FormGroup>

                            {/* Password Field */}
                            <FormGroup>
                                <Label for="password">Enter Password</Label>
                                <Input type="password" id="password"
                                value={loginDetail.password}
                                onChange={(e)=> handleChange(e,'password')}
                                />
                                
                            </FormGroup>

                            <Container className="text-center">
                                <Button outline color="primary" className="demo1" onClick={handleFormSubmit}>Login</Button>
                                <Button className="ms-2" color="secondary" onClick={handleReset}>Reset</Button>
                                
                                
                                
                                </Container>
                                <ToastContainer/>
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

export default Login;