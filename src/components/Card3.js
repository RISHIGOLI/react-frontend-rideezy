import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-elastic-carousel";
import {FaStar} from 'react-icons/fa'
import petrol from '../assets/images/petrol.png'

import error from "../assets/images/error.png";
// import img1 from "../assets/images/img1.png";
// import car from "../assets/images/car.jpg";
import { useNavigate } from "react-router-dom";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Card3 = ({city}) => {
  const [news, setNews] = useState([]);
  // const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ usercity,setCity]= useState(JSON.parse(localStorage.getItem("data")));
  // const { data } = JSON.parse(localStorage.getItem("data"));
  //const prarams = useParams();
  const navigate = useNavigate();
  const handleGetMore = (id) => {
    navigate({ pathname: `/show/${id}` });
  };
  useEffect(() => {
    axios
      .get(
        // "https://newsapi.org/v2/top-headlines?country=us&apiKey=4a9fe6d755b04c429b306f712f19ca58"
        `http://192.168.29.130:5000/api/vehicles/getVehiclesByCityandCategory/city/${city.length==1 ? usercity.data.city : city}/category/7`
      )
      .then((response) => {
        setNews(response.data);
        setLoading(true);
      })
      .catch((error) => {
        // setError(error.message);
        // setLoading(true);
        console.log(error);
      });
  }, [city]);

return(
      <>
      {loading ? (
        <div className="container-fluid">
          <div className="row">
          {news.data.length >= 1 ? (
            <Carousel breakPoints={breakPoints} showArrows={true}>
              {news.data.map((item, id) => {
                return (
                  <div className="col-12" key={item.id}>
                  <div
                  className="card text-center Hover"
                  style={{ width: "13rem", height: "22rem" }}
                >
                      <img
                        src={`http://192.168.29.130:5000/api/vehicles/vehicle/image/${item.vehicleImage}`}
                        style={{ width: "190px", height: "8rem" }}
                        className="card-img-top ms-2 mt-2"
                        alt="..."
                        showArrows={true}
                      />
                      <div className="card-body">
                       
                        <p className="card-title h6"><b>{item.model}</b></p>
                        <span>
                        <p className="card-text text-danger"><b>{item.city}</b></p>
                          </span>
                        <p className="card-text"><b>Mileage:</b>{item.mileage} km</p>
                        <div style={{display: "flex", padding:"0px", justifyContent: "space-between",}} > 
                        <p className=" h5"> <img src={petrol} alt="" style={{width:"50px", marginLeft:"20px"}} />{item.fuelType}  </p>
                        </div>
                        <div style={{display: "flex",marginLeft:"-5px", padding:"0px", justifyContent: "space-between",marginTop:"20px"}}>
                        <p className="card-text text-success "><b><FaStar className="me-2 mb-2" style={{color:"orange"}}/>{item.v_ratings}</b> ({item.v_noOfRatings})</p>

                        <button
                          onClick={() => {
                            handleGetMore(item.id);
                          }}
                          className="btn btn-primary mb-2 
                           "
                        >
                          View
                        </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel>
            ) : (
              <div className="text-center error" >
              <img src={error} alt="Error" />
              <h1 className="textblink text-danger ">SORRY ! No Transport vehicles Are Available In Your {city}</h1>
              </div>
            )}
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
      </>
    );
  
};
export default Card3;
