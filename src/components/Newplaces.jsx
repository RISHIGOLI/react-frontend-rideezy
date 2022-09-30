import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import car from "../assets/images/car.png";
import "./addedplace.css";
import { Row, Col} from "react-bootstrap";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 }
  ];
export default class NewPlaces extends Component {
  state = {
    items: [
      {id: 1, title: 'Tata Nexon',category:'Four Wheeler', address:'Pune', mobileno:'9823345672', rating:'3.4'},
      {id: 2, title: 'Tata Nexon',category:'Four Wheeler', address:'Pune', mobileno:'9823345672', rating:'3.4'},
      {id: 3, title: ' Tata Nexon',category:'Four Wheeler', address:'Pune', mobileno:'9823345672', rating:'3.4'},
      {id: 4, title: 'Tata Nexon ',category:'Four Wheeler', address:'Pune', mobileno:'9823345672', rating:'3.4'},
      {id: 5, title: ' Tata Nexon',category:'Four Wheeler', address:'Pune', mobileno:'9823345672', rating:'3.4'},
      {id: 6, title: 'Tata Nexon',category:'Four Wheeler ', address:'Pune', mobileno:'9823345672', rating:'3.4'},
    ]
  }

  render () {
    const { items } = this.state;
    return (
        <div>
        {/*slider */}
      <Carousel breakPoints={breakPoints} showArrows={false}>
        {items.map(item => <div key={item.id} className="post_u">
        
            <Row className='add_map' style={{borderBottom:"none"}}>
            <Col md="5" className="n_help">
            <img src={car}  alt="Needy Help"></img>
         </Col>
               <Col md="7" className='map_a mb-0' >
               <div className='n_place'>
               <h6>{item.title}</h6>
               <p>{item.address}</p>
               <p>{item.category}</p>
               <h4><i className='fa fa-star'></i> 3.5</h4>
               {/*<p>Jewellery Shop</p>*/}
              </div>
               </Col>             
            </Row>                      
            </div>)}
      </Carousel>
      </div>
    )
  }
}


// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import Carousel from "react-elastic-carousel";

// const breakPoints = [
//     { width: 1, itemsToShow: 1 },
//     { width: 550, itemsToShow: 2 },
//     { width: 768, itemsToShow: 3 },
//     { width: 1200, itemsToShow: 4 },
//   ];

// const NewPlaces = () => {
//     const [news, setNews] = useState([]);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=4a9fe6d755b04c429b306f712f19ca58")
//             .then((response) => {
//                 setNews(response.data.articles);
//                 setLoading(true)
//             }).catch((error) => {
//                 setError(error.message);
//                 setLoading(true);

//             })
//     }, [])

//     if(error){
//         return <div>Error:{error.message}</div>;
//     }else if(!loading){
//         return <div>Loading....</div>;
//     }else{

    

//     return (
//         <>
//             <div className="container">
//                 <div className="row">
//                 <Carousel  breakPoints={breakPoints}>
//                     {
//                         news.map((item, id) => {
//                             return (
                               
//                                 <div className="col-4" key={item.id}>
//                                 <div className="card" style={{width: "18rem"}}>
//                                         <img src={item.urlToImage } className="card-img-top" alt="..." />
//                                         <div className="card-body">
//                                             <h5 className="card-title">{item.title }</h5>
//                                             <p className="card-text">{item.description }</p>
//                                             <a href="#" className="btn btn-primary">Go somewhere</a>
//                                         </div>
//                                     </div>
//                                 </div>
                                    
                               
//                             )
//                         })
//                     }
//                     </Carousel>
//                 </div>
//             </div>
//         </>
//     )
//                 }
// }
// export default NewPlaces;