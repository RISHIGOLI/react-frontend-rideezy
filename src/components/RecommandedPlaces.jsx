
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import "./addedplace.css";
import Carousel from "react-elastic-carousel";
import{FaStar} from "react-icons/fa"
import { useNavigate } from 'react-router-dom';
import { getCurrentUserDetail } from "../auth";

import { myAxios } from "../services/helpler";
// import  "./CustomNavbar.css";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 4 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4},
  ];

const RecommandedPlaces = () => {

  const navigate=useNavigate();
  const handleChange=()=>{
    
    // navigate({pathname:`/login`})
    setUser(getCurrentUserDetail());
    if(!user){
      navigate({pathname:`/login`})
    }
    
    navigate("/user/dashboard")
  }

    const [news, setNews] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(undefined);
    // const [ratingno, setRatingNo] = useState(undefined);
    useEffect(() => {
        axios.get("http://192.168.29.130:5000/api/drivers/getAllDrivers")
            .then((response) => {
                setNews(response.data.dataList);
                console.log(response.data.dataList);
                setLoading(true)
            }).catch((error) => {
                setError(error.message);
                setLoading(true);

            })
        
        
        
    }, [])

    if(error){
        return <div>Error:{error.message}</div>;
    }else if(!loading){
        return <div>Loading....</div>;
    }else{

    

    return (
        <>
           

<div className="container-fluid">
          <div className="row">
            <Carousel breakPoints={breakPoints} showArrows={true}>
              {news.map((item, id) => {
                return (
                  <div className="col-12" key={item.id}>
                    <div
                      className="card text-center Hover "
                      style={{ width: "190px", height: "20rem" }}
                    >
                      <img
                        src={`http://192.168.29.130:5000/api/vehicles/vehicle/image/${item.driverImage}`}
                        style={{ width: "164px", height: "100px" }}
                        className="card-img-top mt-1 setsize"
                        alt="..."
                        showArrows={true}
                      />
                      <div className="card-body">
                        <h5 className="card-title h6">
                          <b>{item.d_firstName} {item.d_lastName}</b> {" "}
                          <span>
                        <p className="card-text text-danger"><b>{item.d_city}</b></p>
                          </span>
                          </h5>
                          <h6 className="text-success">{item.driverCategory.d_categoryTitle}</h6>
                            <p className="text">{item.d_altMobNo}</p>
                        <p className="card-text"><b>Exp.:</b>{item.d_ridingExperience}(Yrs.)</p>
                        <div style={{display: "flex",marginLeft:"5px", padding:"0px", justifyContent: "space-between"}}>
                        <p className="card-text text-success">
                        <b className='me-2'><FaStar className="me-2 mb-2" style={{color:"orange"}}/>
                        {item.d_ratings}</b> ({item.d_noOfRatings})</p>
                        <button className='btn btn-primary' onClick={handleChange}>View</button>
                        </div>

                        {/* <button
                          onClick={() => {
                            handleGetMore(id);
                          }}
                          className="btn btn-primary mb-2 mar1 "
                        >
                          Get More
                        </button> */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
        </>
    )
                }
}
export default RecommandedPlaces;