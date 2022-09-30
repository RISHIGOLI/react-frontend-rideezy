import React, { Component } from "react";
//import Carousel from 'react-elastic-carousel';
//import img1 from "../assets/images/img1.png";
//import "../../addedplace.css";
import { Container, Row, Col, Button, Tabs, Tab } from "react-bootstrap";
// import DashBoard from "./components/DashBoard";
import DashBoard from "./DashBoard";
import DriverAddedByYou from "./DriverAddedByYou";
// import Newplaces from "./Newplaces";
import Paginate from "./Paginate";
import Paginate2wheel from "./Paginate2wheel";
import VehicleAdded from "./VehicleAdded";


export default class HelpingHandPost extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Tabs
          defaultActiveKey="home"
          transition={false}
          id="noanim-tab-example"
          className="mb-3 category_title"
        >
          <Tab eventKey="home" title="My Account">
            <DashBoard/>
            {/* <div className="all_place">
              <h6>NEWLY ADDEDssss </h6>
              <Newplaces />
            </div>
            <div className="all_place">
              <h6>MOST POPULAR </h6>
              <Newplaces />
            </div>
            <div className="all_place">
              <h6>RECOMMANDED </h6>
              <Newplaces />
            </div> */}
          
          </Tab>
          <Tab eventKey="profile" title="Vehicles Added By You">
            {/* <Paginate city={this.props.city} /> */}
            <VehicleAdded/>
          </Tab>
          <Tab eventKey="helps" title="Drivers Added By You">
           <DriverAddedByYou />
          </Tab>
        
        </Tabs>
      </div>
    );
  }
}
