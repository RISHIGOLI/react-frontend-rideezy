
import React, { Component } from 'react';
//import Carousel from 'react-elastic-carousel';
//import img1 from "../assets/images/img1.png";
//import "../../addedplace.css";
import {Container, Row, Col, Button, Tabs, Tab} from "react-bootstrap";
import DriverLoc from './DriverLoc';
import DriverOut from './DriverOut';
import DriverPagiLoc from './DriverPagiLoc';
import DriverPagiOut from './DriverPagiOut';
import DriverPagiPer from './DriverPagiPer';
import DriverPagiTran from './DriverPagiTran';
import Driverper from './DriverPer';
import DriverTran from './DriverTran';
// import Newplaces from "./Newplaces";
import RecommandedPlaces from "./RecommandedPlaces";


export default class Post extends Component {
  constructor(props){
    super(props)
  }
  render () { 
    return (
        <div>
        <Tabs
        defaultActiveKey="home"
        transition={false}
        id="noanim-tab-example"
        className="mb-3 category_title"
        >
        <Tab eventKey="home" title="All">
            <div className='all_place'>
            <h6>PERMANENT DRIVERS IN YOUR CITY</h6>
            <Driverper city={this.props.city} />
                </div>
                <div className='all_place'>
                <h6>LOCAL DRIVERS IN YOUR CITY </h6>
            {/* <Newplaces /> */}
            <DriverLoc city={this.props.city}/>
            </div>
            <div className='all_place'>
                <h6>OUTSTATION DRIVERS IN YOUR CITY</h6>
            {/* <Newplaces /> */}
            <DriverOut city={this.props.city}/>
            </div>
            <div className='all_place'>
            <h6>TRANSPORT VEHICLES DRIVERS IN YOUR CITY</h6>
        {/* <Newplaces /> */}
        <DriverTran city={this.props.city}/>
        </div>
        </Tab>
       
        <Tab eventKey="categoriwise1" title="Permanent Drivers">
        <DriverPagiPer city={this.props.city}/>
      </Tab>
      <Tab eventKey="categoriwise2" title="Local Drivers">
        <DriverPagiLoc city={this.props.city}/>
      </Tab>
      <Tab eventKey="categoriwise3" title="Outstation Drivers">
        <DriverPagiOut city={this.props.city}/>
      </Tab>
      <Tab eventKey="categoriwise4" title="Transport Vehicle Drivers">
        <DriverPagiTran city={this.props.city}/>
      </Tab>
       
        </Tabs>
      </div>
    )
  }
}