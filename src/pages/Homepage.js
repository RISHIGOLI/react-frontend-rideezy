//import logo from './logo.svg';
import CustomNavbar from '../components/CustomNavbar';
import React, {useState} from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import "../assets/style.css";
import place from "../assets/images/place.png";
import place2 from "../assets/images/place2.png";
import rent from "../assets/images/rent.jpg";
import img3 from "../assets/images/img3.png";
import heart from "../assets/images/heart.png";
import AddedPlaces from "../components/AddedPlaces";
import RecommandedPlaces from "../components/RecommandedPlaces";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
import {Container, Row, Col, Button, Modal} from "react-bootstrap";

function Homepage() {
  const [fullscreen, setFullscreen] = useState(false);
  const [show, setShow] = useState(false);
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  function handleClose() {
    setFullscreen();
    setShow(false);
  }
  return (
    <div className="">
      {/* <Header /> */}
      <CustomNavbar/>
      <section>
      <div className="slider_img">
        <Container>
          <Row>
             <Col md="7">
                <div className='s_content'>
                   <h1>Best <span>Place</span><br /> For Your Search</h1>
                </div>
             </Col>
             <Col md="5"> 
              <div className='s_details'>     
                <a href="#.">         
                <Row>
                  <Col md="6">
                    <div className='s_img'>
                       <h6>Get Vehicles & Get Drivers</h6> 
                    </div>
                    <div className='s_img_b'>
                      <img src={place} alt="place"></img>
                    </div>
                  </Col>
                  <Col md="5">
                     <div className='search-place'>
                        <img src={place2} alt="Search" />
                     </div>
                     <div className='search_tag'>
                        <h4>Search Easily</h4>
                     </div>
                     <div className='search_p'>
                        <h6>Easily Connect with peoples</h6>
                     </div>
                  </Col>
                  </Row>
                  </a>
              </div>               
             </Col>
          </Row>
        </Container>
        </div>
        {/* <div className='search'>
          <Container>
          <div className='search_div'>
            <Row>
              <Col md="8">
                <div className=''>
                  <h1>Search your places nearby in your area</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing </p>
                </div>
              </Col>
              <Col md="4">
                 <div className='search_btn pull-right'>
                   <Button onClick={handleShow}><i className="fa fa-search" ></i>Search</Button>
                 </div>
              </Col>
            </Row>  
            </div>
          </Container>
        </div> */}
        <Modal show={show} fullscreen={fullscreen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </section>
      <section>
        <Container> 
           <div className='new_place'>
           <h1 >Vehicles Available For You... &#x21a6; 	</h1>
             <AddedPlaces />
           </div>
        </Container>
      </section>
      <section className='recommanded'>
      <Container> 
         <div className='recommanded_place'>
         <h1>Drivers For You &#x21a6;</h1>
           <RecommandedPlaces />
         </div>
      </Container>
    </section>
    <section className='b_post'>
      <Container> 
        <Row>
          <Col md="5">
            <div className='post_img big'  >
               <img src={rent} alt="Post image"></img>
            </div>
          </Col>
          <Col md="7">
             <div className='post'>
                <h2>Vehicles</h2>
                <div className='post_div'>
                <h1>Renting Vehicles</h1>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries.
                </p>
                <Button className='pull-right'>Get More Details</Button>
                </div>
             </div>
          </Col>
        </Row>
      </Container> 
    </section>
    <section>
      <Container>
        <div className='help'>
           <Row>
              <Col md="8">
                 <div className='hand'>
                    <img src={heart} alt="Heart"></img>
                    <h2>Drivers on Rent</h2>
                 </div>
              </Col>
              <Col md="4">
                <div className='help_btn'>
                  <a href="/HelpingHands">View More</a>
                </div>
              </Col>
           </Row>
        </div>
        <div className='thought'>
          <Row>
            <Col md="7">
              <div className='t_left'>
                 <h4>Find Drivers for your travelling here</h4>
                 <p>
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                 been the industry's standard dummy text ever since the 1500s, when an unknown printer took 
                 a galley of type and scrambled it to make a type specimen book. It has survived not only 
                 five centuries, but also the leap into electronic typesetting, remaining essentially 
                 unchanged. It was popularised in the 1960s
                 and scrambled it to make a type specimen book. It has survived not only 
                 five centuries, but also the leap into electronic typesetting, remaining essentially 
                 unchanged. It was popularised in the 1960s
                 </p>
                 <Button className='pull-left'>Get More Details</Button>
              </div>
            </Col>
            <Col md="5">
              <div className='t_right'>
                 <img src={img3} alt="Thought"></img>
              </div>

            </Col>
          </Row>
        </div>
      </Container>
    </section>
    {/* <Footer /> */}
    </div>
  );
}

export default Homepage;
