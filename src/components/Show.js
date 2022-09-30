import React, { useState, useEffect } from "react";

import "./Show.css";
import { useParams } from "react-router-dom";
// import car from "../assets/images/car.png";
import Base from "../components/Base";
import Rating from "./Rating";
import { myAxios } from "../services/helpler";
import { FaStar } from "react-icons/fa";
const Show = () => {
  const { id } = useParams();
  const [vehicleInfo, setVehicleInfo] = useState({});
  const [userRating, setUserRating] = useState(0);
  const [load, setLoad] = useState(false);
  const [ratingno, setRatingNo] = useState(undefined);
  useEffect(() => {
    myAxios({
      url: `/api/vehicles/vehicles/${id}`,
      method: "GET",
    }).then((res) => {
      setVehicleInfo(res.data.data);
      setLoad(true);
    });
    myAxios({
      url: `http://192.168.29.130:5000/api/rating/getAvgRating/${id}`,
      method: "GET",
    }).then((res) => {
      setUserRating(res.data.data);
    });

    myAxios({
      url: `http://192.168.29.130:5000/api/rating/getTotalNoOfRatings/${id}`,
      method: "GET",
    }).then((responseForNoOfRatings)=>{
      setRatingNo(responseForNoOfRatings.data.data);
    })
  }, []);

  return (
    <Base>
      {load && (
        <div className="container-fluid imgbgc">
          {console.log(vehicleInfo)}
          <div className="row mt-2 m-1">
            <div className="col-md-9">
              <div className="row">
                <div className="col-sm-8 border border-2 imgbg">
                  <p className="subtitle fancy">
                    <span>{vehicleInfo.model}</span>
                  </p>
                  <div className="card-body">
                    <div className="img">
                      <img
                        src={`http://192.168.29.130:5000/api/vehicles/vehicle/image/${vehicleInfo.vehicleImage}`}
                        alt=""
                        style={{ width: "590px", height: "380px",marginLeft:"20px" }} className="imgcss"
                      />
                    </div>
                    <div className="textmargin">
                    <h4>
                      Added By :<span className="font"></span>
                    </h4>
                    <h6>
                      <b>Name:</b>
                      <span className="font">{`${vehicleInfo.user.firstName} ${vehicleInfo.user.lastName}`}</span>
                    </h6>
                    <h6>
                      <b>Contact:</b>
                      <span className="font">{vehicleInfo.user.mobile}</span>
                    </h6>
                    <h6>
                     <b> City:</b><span className="font">{vehicleInfo.city}</span>
                    </h6>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 border border-2 imgbgc">
                  <p className="subtitle fancy">
                    <span>Vehicle Details</span>
                  </p>
                  <h5 className="card-title text-center mt-3">
                  {vehicleInfo.model}
                    <span>
                      <h6 className="text-warning">{vehicleInfo.category.categoryTitle}</h6>
                    </span>
                  </h5>
                  <ul>
                    <li className="card-text marg">
                      <b>Vehicle Model : </b> {vehicleInfo.model}
                    </li>
                    <li className="card-text marg"><b>Vehicle Number: </b> {vehicleInfo.number}</li>
                    <li className="card-text marg"><b> Available City : </b> {vehicleInfo.city}</li>
                    <li className="card-text marg"><b> Seating Capacity: </b> {vehicleInfo.seatingCapacity} </li>
                    <li className="card-text marg"><b>Luggage Capacity : </b> {vehicleInfo.luggageCapacity}</li>
                    <li className="card-text marg"><b>Transmission: </b> {vehicleInfo.transmission}</li>
                    <li className="card-text marg"><b>Air Condition : </b> {vehicleInfo.airCondition}</li>
                    <li className="card-text marg"><b>Mileage: </b> {vehicleInfo.mileage} km</li>
                    <li className="card-text marg"><b>Fuel Type: </b> {vehicleInfo.fuelType} </li>
                  </ul>
                  <div style={{display: "flex",marginLeft:"-5px", padding:"0px", justifyContent: "space-between"}}>
                    <h6 className="ms-4 me-1"><b>Rating:</b></h6>
                    {[1, 2, 3, 4, 5].map((i) => {
                      return (
                        <FaStar color={i > userRating ? "#d6cab7" : "orange"} />
                      );
                      
                    })}
                    
                   <h5 className="ratingmargin">({ratingno})</h5>
                    
                  </div>
                  <div>
                    <p className="textblink1">
                      Give Rating
                      </p>
                     <p className="mb-3"> <Rating vId={vehicleInfo.id} /></p>
                  </div>
                </div>
              </div>

              <div className="row bottom-right  ">
                <div className="col-sm-12 pe-0 ps-0">
                <p className="subtitle fancy m-4">
                <span>Important Points To Remember</span>
              </p>
                {/* <table className="table table-bordered text-white ">
                <tbody>
                <tr>
                <td className="col-md-5">Change in Princing Plan:</td>
                <td>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Repellendus itaque ipsam, commodi temporibus
                          dignissimos magni?
                        </td>
                      </tr>
                      <tr>
                        <td className="col-md-5">FUEL:</td>
                        <td>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Lorem ipsum dolor sit amet. Repellendus itaque
                          ipsam, commodi temporibus dignissimos magni?{" "}
                        </td>
                      </tr>
                      <tr>
                        <td className="col-md-5">
                          Tolls Parking Inter-State-Taxes:
                        </td>
                        <td>Lorem ipsum dolor,</td>
                      </tr>
                      <tr>
                        <td className="col-md-5">ID Verification:</td>
                        <td>
                          Lorem ipsum dolor, sit amet Lorem ipsum dolor sit
                          amet, consectetur adipisicing elit. Nihil omnis cumque
                          architecto quod reprehenderit molestias! consectetur
                          adipisicing elit. Repellendus itaque ipsam, commodi
                          temporibus dignissimos magni?
                        </td>
                      </tr>
                      <tr>
                        <td className="col-md-5">Pre-Handover Inspection:</td>
                        <td>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit.
                        </td>
                      </tr>
                    </tbody>
                  </table> */}
                  <ul>
                    <li>The information shown in this page is as per our data received from respected vehicle owners.</li>
                    <li>The deal about the vehicle that is shown in this page will be between user and vehicle owner(who adds the vehicle).</li>
                    <li>Traffic Violation: Customer is liable to pay for any traffic violation tickets received during there journey.</li>
                    <li>In case of any tyre damages resulting from driving in bad terrain and continue driving in case of tyre puncture, Customers will be charged for the cost of the tyre on actuals plus and other service charges, as towing etc.</li>
                    <li>Customers are advised not to drive the car if it gets damaged in an accident. Customers are required to inform the company immediately for advice. In the event, the Customer continues to drive the car in a damaged condition, repair for any consequential damages that may result, will be borne by the customer.</li>
                    <li>At the end of the journey, customers are expected to return the car only to the rideezy representative or an authorized third party; failing which a fee of Rs. 5000 will be payable apart from recovery costs if any.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 border border-2 mb-3">
              <h1>Booking facility will be coming soon.</h1>
            </div>
          </div>
        </div>
      )}
    </Base>
  );
  // }
};

export default Show;
