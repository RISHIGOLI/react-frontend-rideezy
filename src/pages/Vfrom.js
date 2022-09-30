import React from "react";
import "./Login.css";
// import { useState } from 'react'
import {
  Row,
  Col,
  Container,
  Card,
  CardBody,
  CardHeader,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import Base from "../components/Base";
import god from "../assets/images/god.pdf";
// import img1 from "../assets/images/img1.png";
import { loadAllCategories } from "../services/Category-service";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createPost as doCreatePost,
  uploadPostImage,
  uploadPostImageRc,
  uploadVehiclePUCImage,
  uploadVehicleInsuranceImage,
  uploadVehicleAgreementImage,
} from "../services/Post-service";
import { getCurrentUserDetail } from "../auth";
// import { toast } from 'react-toastify';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Vfrom = () => {
  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState(undefined);
  const navigate = useNavigate();
  const [post, setPost] = useState({
    model: "",
    number: "",
    categoryId: "",
    fuelType: "",
    seatingCapacity: "",
    luggageCapacity: "",
    transmission: "",
    airCondition: "",
    mileage: "",
    city: "",
  });

  const [image, setImage] = useState(null);
  const [imageRc, setImageRc] = useState(null);
  const [imagePuc, setImagePuc] = useState(null);
  const [imageInsurance, setImageInsurance] = useState(null);
  const [imageAgreement, setImageAgreement] = useState(null);
  useEffect(() => {
    setUser(getCurrentUserDetail());
    loadAllCategories()
      .then((data) => {
        console.log(data);
        setCategories(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // field change function

  const fieldChanged = (event) => {
    // console.log(event);
    // if (event.target.name === "city") {
    //   if (/[a-zA-Z]/.test(event.target.value)) {
    //     setPost({ ...post, [event.target.name]: event.target.value });
    //   } else {
    //     console.log("error");
    //   }
    // } else {
    setPost({ ...post, [event.target.name]: event.target.value });
    //}
    // console.log(event.target.value);
  };

  const createPost = (event) => {
    event.preventDefault();
    // console.log(post);
    if (post.model.trim() === "") {
      toast.error("Vehicle model is required !!", {
        position: "top-center",
      });
      return;
    }
    if (post.number.trim() === "") {
      toast.error("Vehicle number is required !!", {
        position: "top-center",
      });
      return;
    }
    if (post.categoryId.trim() === "") {
      toast.error("Vehicle Category is required !!", {
        position: "top-center",
      });
    }
    if (post.fuelType.trim() === "") {
      toast.error("Vehicle fuelType is required !!", {
        position: "top-center",
      });
      return;
    }
    if (post.seatingCapacity.trim() === "") {
      toast.error("Vehicle seatingCapacity is required !!", {
        position: "top-center",
      });
      return;
    }
    if (post.luggageCapacity.trim() === "") {
      toast.error("Vehicle luggageCapacity is required !!", {
        position: "top-center",
      });
      return;
    }
    if (post.transmission.trim() === "") {
      toast.error("Vehicle transmission is required !!", {
        position: "top-center",
      });
      return;
    }
    if (post.airCondition.trim() === "") {
      toast.error("Vehicle airCondition is required !!", {
        position: "top-center",
      });
      return;
    }
    if (post.mileage.trim() === "") {
      toast.error("Vehicle mileage is required !!", {
        position: "top-center",
      });
      return;
    }
    if (post.city.trim() === "") {
      toast.error("Vehicle city is required !!", {
        position: "top-center",
      });
      return;
    }
    // if (post.image.trim() === "") {
    //   toast.error("Vehicle image is required !!", {
    //     position: "top-center",
    //   });
    //   return;
    // }
    // if (post.rcImage.trim() === "") {
    //   toast.error("Vehicle rcImage is required !!", {
    //     position: "top-center",
    //   });
    //   return;
    // }

    //submit the form on server
    // post['userId']=user.id
    post["userId"] = user.id;
    doCreatePost(post)
      .then((data) => {
        uploadPostImage(image, data.id)
          .then((response) => {
            toast.success("Uploaded Vehicle Image", {
              position: "top-center",
            });

            uploadPostImageRc(imageRc, data.id).then((responses) => {
              toast.success("Uploaded Vehicle RC Image", {
                position: "top-center",
              });

              uploadVehiclePUCImage(imagePuc, data.id).then((responseess) => {
                toast.success("Uploaded Vehicle PUC Image", {
                  position: "top-center",
                });
                uploadVehicleInsuranceImage(imageInsurance, data.id).then((responseForInsuranceImage)=>{
                  toast.success("uploaded Vehicle Insurance Image",{
                    position:"top-right",
                  });

                  uploadVehicleAgreementImage(imageAgreement, data.id).then((responseForAgreementImage)=>{
                    toast.success("uploaded Vehicle Agreement Image",{
                      position:"top-right",
                    });

                    navigate({ pathname: "/user/dashboard" });
                  });
                });
               });
            });
          })
          .catch((error) => {
            toast.error("Images could not be uploaded !", {
              position: "top-center",
            });
            console.log(error);
          });
        toast.success("Vehicle Successfully Added..!", {
          position: "top-center",
        });
        // console.log(post);
        setPost({
          model: "",
          number: "",
          categoryId: "",
          fuelType: "",
          seatingCapacity: "",
          luggageCapacity: "",
          transmission: "",
          airCondition: "",
          mileage: "",
          city: "",
        });
      })
      .catch((error) => {
        toast.error("Post not create due to some error", {
          position: "top-center",
        });
        // console.log(error);
      });
  };

  // handle File change event
  const handleFileChange = (event) => {
    console.log(event.target.files[0]);
    setImage(event.target.files[0]);
  };

  const handleFileChangeforRc = (event) => {
    console.log(event.target.files);
    setImageRc(event.target.files[0]);
  };

  const handleFileChangeForPuc = (event) => {
    console.log(event.target.files);
    setImagePuc(event.target.files[0]);
  };

  const handleFileChangeForInsurance = (event) => {
    console.log(event.target.files[0]);
    setImageInsurance(event.target.files[0]);
  };

  const handleFileChangeForAgreement=(event) => {
    console.log(event.target.files[0]);
    setImageAgreement(event.target.files[0]);
  }

  return (
    <div className="bg">
      <Base>
        <Container className="mt-3">
          <Row className="mt-4">
            <Col sm={{ size: 12 }}>
              {/* {JSON.stringify(post)} */}
              {/* <Card color='dark' inverse> inverse lil tar font color white hoto karan bg dark aahe */}
              <Card className="changecolor ">
                {" "}
                {/*inverse lil tar font color white hoto karan bg dark aahe*/}
                <CardHeader className="bgchange">
                  <h3>Fill information to Registration</h3>
                </CardHeader>
                <CardBody >
                  <Form onSubmit={createPost} >
                    <Row>
                      <Col sm={{ size: 6 }}>
                        <FormGroup>
                          <Label for="vmodel">Vehicle Model</Label>
                          <Input 
                          required
                            type="text"
                            placeholder="Vehicle Model Name"
                            id="vmodel"
                            name="model"
                            onChange={fieldChanged}
                          />
                        </FormGroup>
                      </Col>
                      <Col sm={{ size: 6 }}>
                        <FormGroup>
                          <Label for="vnumber">Vehicle Number</Label>
                          <Input required
                            type="text"
                            placeholder="Vehicle Number"
                            id="vnumber"
                            name="number"
                            onChange={fieldChanged}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm={{ size: 6 }}>
                        <FormGroup>
                          <Label for="vmodel">Vehicle Category: </Label>
                          <Input required
                            type="select"
                            id="vmodel"
                            name="categoryId"
                            onChange={fieldChanged}
                            defaultValue={0}
                          >
                            <option disabled value={0}>
                              --Select Category--
                            </option>
                            {/* <option value="1">4 wheeler</option> */}
                            {/* {
                                                            categories.map((category)=>(
                                                                <option  value={category.categoryId} key={category.categoryId}>
                                                                    {category.categoryTitle}
                                                                </option>
                                                            ))
                                                        } */}

                            {/* <select name="languages" id="vaircon" className='ms-2 p-2 rounded'> */}
                            {/* <option desabled value={0}>--Select Category--</option> */}

                            <option value="4">Four wheeler</option>
                            <option value="5">Two wheeler</option>
                            <option value="6">Three wheeler</option>
                            <option value="7">Transport vehicle</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col sm={{ size: 6 }}>
                        <FormGroup>
                          <Label for="vmodel">Fuel: </Label>
                          <Input required
                            type="select"
                            id="vmodel"
                            name="fuelType"
                            onChange={fieldChanged}
                            defaultValue={0}
                          >
                            <option disabled value={0}>
                              --Select Fuel --
                            </option>
                            {/* <option value="1">4 wheeler</option> */}
                            {/* {
                                                            categories.map((category)=>(
                                                                <option  value={category.categoryId} key={category.categoryId}>
                                                                    {category.categoryTitle}
                                                                </option>
                                                            ))
                                                        } */}

                            {/* <select name="languages" id="vaircon" className='ms-2 p-2 rounded'> */}
                            {/* <option desabled value={0}>--Select Category--</option> */}

                            <option value="Petrol">Petrol</option>
                            <option value="Diesel">Diesel</option>
                            <option value="Diesel">CNG</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm={{ size: 6 }}>
                        <FormGroup>
                          <Label for="vmodel">Vehicle Seating Capacity</Label>
                          <Input required
                            type="number"
                            placeholder="How much of seats"
                            id="vmodel"
                            name="seatingCapacity"
                            onChange={fieldChanged}
                          />
                        </FormGroup>
                      </Col>
                      <Col sm={{ size: 6 }}>
                        <FormGroup>
                          <Label for="vlugguge">Vehicle Lugguge</Label>
                          <Input required
                            type="number"
                            placeholder="How much of lugguge"
                            id="vlugguge"
                            name="luggageCapacity"
                            onChange={fieldChanged}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm={{ size: 6 }}>
                        <FormGroup>
                          <Label for="vtransmission">
                            Vehicle Transmission:{" "}
                          </Label>
                          <Input required
                            type="select"
                            id="vtransmission"
                            name="transmission"
                            onChange={fieldChanged}
                            defaultValue={0}
                          >
                            {/* <select name="languages" id="vaircon" className='ms-2 p-2 rounded'> */}
                            <option disabled value={0}>
                              --Select Transmission--
                            </option>

                            <option value="Automatic">Automatic</option>
                            <option value="Manual">Manual</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col sm={{ size: 6 }}>
                        <FormGroup>
                          <Label for="vaircon">Vehicle Air Condition :</Label>
                          <Input required
                            type="select"
                            id="vaircon"
                            name="airCondition"
                            onChange={fieldChanged}
                            defaultValue={0}
                          >
                            {/* <select name="languages" id="vaircon" className='ms-2 p-2 rounded'> */}
                            <option disabled value={0}>
                              --Select Air Condition--
                            </option>

                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm={{ size: 6 }}>
                        <FormGroup>
                          <Label for="vmodel">Vehicle Milege</Label>
                          <Input required
                            type="number"
                            placeholder="Vehicle Milege"
                            id="vmodel"
                            name="mileage"
                            onChange={fieldChanged}
                          />
                        </FormGroup>
                      </Col>
                      <Col sm={{ size: 6 }}>
                        <FormGroup>
                          <Label for="vlugguge">Vehicle City</Label>
                          <Input required
                            type="text"
                            id="vlugguge"
                            name="city"
                            style={{ textTransform: "uppercase" }}
                            onChange={fieldChanged}
                          >
                            {/* <select name="languages" id="vaircon" className='ms-2 p-2 rounded'> */}
                            <option disabled value={0}>
                              --Select City--
                            </option>

                            <option value="javascript">Solapur</option>
                            <option value="php">Pune</option>
                            <option value="java">Kolhapur                            </option>
                            <option value="golang">Satara</option>
                            <option value="python">Nashik</option>
                            <option value="c#">Ahmednagar</option>
                            <option value="C++">Latur</option>
                            <option value="erlang">Amravati</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    {/* File upload Field */}
                    <Row>
                      <Col sm={{ size: 6 }}>
                        <FormGroup>
                          <Label for="img">Vehicle Image</Label>
                          <Input required
                            type="file"
                            id="img"
                            name="image"
                            onChange={handleFileChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col sm={{ size: 6 }}>
                        <FormGroup>
                          <Label for="rc">Vehicle RC Image</Label>

                          <Input required
                            type="file"
                            id="rc"
                            name="rcImage"
                            onChange={handleFileChangeforRc}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm={{ size: 6 }}>
                        <FormGroup>
                          <Label for="puc">Vehicle PUC</Label>
                          <Input required
                            type="file"
                            id="puc"
                            name="pucImage"
                            onChange={handleFileChangeForPuc}
                          />
                        </FormGroup>
                      </Col>
                      <Col sm={{ size: 6 }}>
                        <FormGroup>
                          <Label for="insurance">Vehicle Insurance Image</Label>
                          <Input required type="file" id="insurance" onChange={handleFileChangeForInsurance}/>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm={{ size: 6 }}>
                        <FormGroup>
                          <Label for="vmodel">Vehicle Agreement Upload</Label>
                          <Input required
                            type="file"
                            placeholder="How much of seats"
                            id="vmodel"
                            onChange={handleFileChangeForAgreement}
                          />
                        </FormGroup>
                      </Col>
                      <Col sm={{ size: 6 }}>
                        <FormGroup>
                          <Label for="agreement">
                            Vehicle Agreement Image Download
                          </Label>
                          <br />
                          {/* <iframe src={god} width="150px" height="50px">
                                                    </iframe> */}

                          {/* <a href={god} download>
                                                    <embed src={god} />
                                                    </a> */}
                          <a href={god}>Download Agreement Page</a>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                    <Col className="text-center">
                                            <FormGroup>
                                            <Input required type='checkbox'  id='check'/>{" "}
                                          <Label for="check" >I agree to the terms & condition</Label><br />
                                      </FormGroup>
                                          </Col>
                    </Row>

                    <Container className="text-center">
                      <Button
                        outline
                        color="dark"
                         type="submit"
                        className="demo1"
                      >
                        Add Vehicle
                      </Button>
                      <Button color="secondary" type="reset" className="ms-2">
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

export default Vfrom;
