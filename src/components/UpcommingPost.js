import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import img1 from "../assets/images/img1.png";
import "./addedplace.css";
import { Row, Col} from "react-bootstrap";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 2 }
  ];
export default class App extends Component {
  state = {
    items: [
      {id: 1, title: 'Tanishq',category:'Jewellery Shop', address:'Pune', mobileno:'9823345672', rating:'3.4'},
      {id: 2, title: 'Automobile',category:'automobile', address:'Pune', mobileno:'9823345672', rating:'3.4'},
      {id: 3, title: 'Shri Clinic',category:'Clinic', address:'Pune', mobileno:'9823345672', rating:'3.4'},
      {id: 4, title: 'Season Shop',category:'Business', address:'Pune', mobileno:'9823345672', rating:'3.4'},
      {id: 5, title: 'Shri Pharma',category:'Medical', address:'Pune', mobileno:'9823345672', rating:'3.4'},
    ]
  }

  render () {
    const { items } = this.state;
    return (
        <div>
      <Carousel breakPoints={breakPoints
    } showArrows={false}>
        {items.map(item => <div key={item.id} className="post_u">
            <Row>
               <Col md="10" className='need_help'>
                 <h5>{item.title}<span> | 10:20 pm</span></h5>
               </Col>
               <Col md="2" className="need_icon">
                  <i className='fa fa-heart-o'></i>
               </Col>
            </Row>
            <Row className='add_map'>
               <Col md="8" className='map_a'>
                  <p><i className='fa fa-map-marker'></i>
                  <span>c1 103, Hydrabad Road, Vidi 
                  Gharkul,pani Taki, Solapur-
                  413005</span></p>
                  <h6>No. Of. Peoples :<span>20 Members</span></h6>
               </Col>
               <Col md="4" className="n_help">
                  <img src={img1} alt="Needy Help"></img>
               </Col>
            </Row>
            <Row>
                <Col md="8" className="post_g">
                   <a href="#.">Is this post genuine ?</a>
                </Col>
                <Col md="" className="thumbs">
                   <a href="#."><i className='fa fa-thumbs-o-up'></i></a>
                   <a href="#."><i className='fa fa-thumbs-o-down'></i></a>
                </Col>
            </Row>
            
            </div>)}
      </Carousel>
      </div>
    )
  }
}