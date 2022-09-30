import React from "react";

import "./allplaces.css";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  FormControl,
  Tab,
  Nav,
  Tabs,
} from "react-bootstrap";

import HelpingHandPost from "../../components/HelpingHandPost.jsx";
import Post from "../../components/Post.jsx";
import Caro from "../../components/Caro";
import Paginate from "../../components/Paginate";
import Paginate2wheel from "../../components/Paginate2wheel";
import Paginate3wheel from "../../components/Paginate3wheel";
import PaginateAv from "../../components/paginateAv";
import Card1 from "../../components/Card1";
import Card2 from "../../components/Card2";
import Card3 from "../../components/Card3";
import { useState } from "react";
import { useEffect } from "react";
import {GoSearch} from "react-icons/go"


// import Newplaces from "../../components/Newplaces";

export default function AllPlaces() {
  const { data } = JSON.parse(localStorage.getItem("data"));
  const [Search, setsearch] = useState(data.city);
  const [DiverSearch, setDiverSearch]=useState(data.city)
  const handlesearch = (e) => {
    setsearch(e.target.value);
  };
  const handleDiverSearch=(e)=>{
    setDiverSearch(e.target.value)
  }
  console.log(DiverSearch)
  return (
    <div>
      <div>
        {/* <Header /> */}
        <section>
          <Container>
            <div className="cetegory_top">
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col md="3 mt-3 ">
                    <div className="cetegory_left">
                      {/*sidemenu place*/}
                      <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                          <Nav.Link eventKey="first">
                            <i className="fa fa-map-marker"></i> VEHICLES FOR
                            YOU
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">
                            <i className="fa fa-tags"></i> DRIVERS FOR YOU
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Link eventKey="third">
                          <i className="fa fa-map-marker"></i> DASHBOARD{" "}
                        </Nav.Link>
                      </Nav>
                    </div>
                  </Col>
                  <Col md="9">
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row>
                          <div className="search_place mt-0">
                            <Row>
                              <Col md="8">
                                <Row>
                                  <Form>
                                    {/*Search bar*/}
                                    <InputGroup className="mb-3 mt-3">
                                      <InputGroup.Text id="basic-addon1">
                                        <i className="fa fa-search"></i>
                                      </InputGroup.Text>
                                      <FormControl
                                        className="searchbar"
                                        placeholder="Serach"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        onChange={handlesearch}
                                      />
                                      <Button className="search"><GoSearch/></Button>
                                    </InputGroup>
                                  </Form>
                                </Row>
                              </Col>
                              <Col md="4 mt-3">
                                {/*Add places*/}
                                <a
                                  href="/user/vfrom"
                                  className="add_place_div1"
                                >
                                  <i className="fa fa-plus"></i>+Add Vehicle
                                </a>
                              </Col>
                            </Row>
                          </div>
                        </Row>
                        <Tabs
                          defaultActiveKey="home"
                          transition={false}
                          id="noanim-tab-example"
                          className="mb-3 category_title"
                        >
                          {/*first show places*/}

                          <Tab eventKey="home" title="All">
                            <div className="all_place">
                              {/*link newplaces*/}
                              <h6>FOUR WHEELERS IN YOUR CITY</h6>
                              <Caro city={Search} />
                            </div>
                            {/*link newplaces*/}
                            <div className="all_place">
                              <h6>TWO WHEELERS IN YOUR CITY</h6>
                              <Card1 city={Search}/>
                            </div>
                            {/*link newplaces*/}
                            <div className="all_place">
                              <h6>THREE WHEELERS IN YOUR CITY</h6>
                              <Card2 city={Search}/>
                            </div>
                            <div className="all_place">
                              <h6>TRANSPORT VEHICLES IN YOUR CITY</h6>
                              <Card3 city={Search} />
                            </div>
                          </Tab>
                          {/*offers*/}
                          <Tab eventKey="profile" title="Four Wheelers">
                            <Paginate city={Search}/>
                          </Tab>
                          {/*categories*/}
                          <Tab eventKey="contact" title="Two Wheelers">
                            <Paginate2wheel city={Search} />
                          </Tab>
                          <Tab eventKey="2 wheeler" title="Three Wheelers">
                            <Paginate3wheel city={Search} />
                          </Tab>
                          <Tab eventKey="3 wheeler" title="Transport Vehicles">
                            <PaginateAv city={Search}/>
                          </Tab>
                        </Tabs>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row>
                          <div className="search_place mt-0">
                            <Row>
                              <Col md="8">
                                <Row>
                                  <Form>
                                    {/*post search bar*/}

                                    <InputGroup className="mb-3 mt-3 ">
                                      <InputGroup.Text id="basic-addon1">
                                        <i className="fa fa-search"></i>
                                      </InputGroup.Text>
                                      <FormControl
                                        className="searchbar"
                                        placeholder="Serach diver"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        onChange={handleDiverSearch}
                                        
                                      />
                                      <Button className="search"><GoSearch/></Button>
                                    </InputGroup>
                                  </Form>
                                </Row>
                              </Col>
                              <Col md="4 mt-3">
                                {/*Add post*/}
                                <a href="/driver" className="add_place_div1">
                                  <i className="fa fa-plus"></i>+Add Driver
                                </a>
                              </Col>
                            </Row>
                          </div>
                        </Row>
                        <Post city={DiverSearch} />
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          <div className="search_place mt-0">
                            <Row>
                              <Col md="8">
                                <Row>
                                  <Form>
                                    {/*Helping Hand post search bar*/}
                                    <InputGroup className="mb-3 mt-3">
                                      <InputGroup.Text id="basic-addon1">
                                        <i className="fa fa-search"></i>
                                      </InputGroup.Text>
                                      <FormControl
                                        className="searchbar"
                                        placeholder="Serach"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                      />
                                      <Button className="search"><GoSearch/></Button>
                                    </InputGroup>
                                  </Form>
                                </Row>
                              </Col>
                              <Col md="4 mt-3">
                                {/*Add post*/}
                                <Button className="add_place_div">
                                  <i className="fa fa-plus"></i> Search
                                </Button>
                              </Col>
                            </Row>
                          </div>
                        </Row>
                        <HelpingHandPost city={Search} />
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </Container>
        </section>
      </div>
    </div>
  );
}
