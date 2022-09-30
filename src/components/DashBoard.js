import React, { useState, useEffect } from 'react'
import { getCurrentUserDetail } from "../auth";
import carpng from "../assets/images/carpng.png"
import driver from "../assets/images/driver.png"
import "./DashBoard.css"
import {Nav,NavItem}from 'reactstrap';
import {  NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';
import CustomNavbar from './CustomNavbar';
const DashBoard = () => {
    const navigate = useNavigate()

    const [news, setNews] = useState([])
    const [error, setError] = useState(null)
    const [user, setUser] = useState(undefined);
    const [isloading, setIsLoading] = useState(false)
    const { data } = JSON.parse(localStorage.getItem("data"));
    const [drivers,setDrivers] = useState([]);

    const handleChange=()=>{
        
        navigate("/vehicleadded")
    }
    useEffect(() => {
        setUser(getCurrentUserDetail());
        axios.get(`
        http://192.168.29.130:5000/api/vehicles/getNoOfVehiclesAddedByUser/${data.id}
        `)
            .then((response) => {
                console.log(response.data.data)
                 setNews(response.data.data);
                setIsLoading(true)
            })
            .catch((error) => {
                setError(error.message);
                setIsLoading(true)
            });
        
        axios.get(`http://192.168.29.130:5000/api/drivers/getNoOfDriversAddedByUser/${data.id}`)
        .then((responseForDrivers)=>{
            console.log(responseForDrivers.data.data);
            setDrivers(responseForDrivers.data.data);
        })
        
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isloading) {
        return <div>Loading...</div>;
    } else {



        return (
            <div className="container">
         
                <div className="row">
                
                 
                  {/* news.map((item,id)=>{ */}
                  
                        <div className="col-md-3 m-5" onClick={handleChange } >
                        <div className="card gradient" style={{ width: "250px", height: "200px" }}>
                            <div className="card-body ">
                            <h3>Vehicles Added:  </h3>  
                             
                             <h3 className="mt-3 h2" >{news}</h3>
                           <div className='carmar'>
                           <img src={carpng} alt="Car" style={{height:"170px",width:"170px", marginLeft:"60px",marginTop:"-70px"}}   /> 
                           </div>
                            </div>
                        </div>
                    </div>
  
                    
                  {/* }) */}
                 


                    <div className="col-md-3 m-5">
                        <div>
                            <div className="card gradient1" style={{ width: "250px", height: "200px" }}>

                                <div className="card-body ">
                                    <h3> Drivers Added:</h3>
                                    <h3 className="mt-3 h2" >{drivers}</h3>
                                    <div className='carmar'>
                           <img src={driver} alt="Car" style={{height:"100px",width:"100px", marginLeft:"100px",marginTop:"-50px"}}   /> 
                           </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 m-5 mt-3">
                        <div>
                            <div className="card gradient2" style={{ width: "250px", height: "200px" }}>

                                <div className="card-body">
                                    <h3> Bookings</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 m-5 mt-3">
                        <div>
                            <div className="card gradient3" style={{ width: "250px", height: "200px" }}>

                                <div className="card-body">
                                    <h3> My Earnings</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    }

    export default DashBoard;