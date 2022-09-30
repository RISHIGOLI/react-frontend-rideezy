import React, { useState, useEffect } from "react";
import "./Show.css";
import { useParams } from "react-router-dom";
// import car from "../assets/images/car.png";
import Base from "../components/Base";
import Rating from "./Rating";
import { myAxios } from "../services/helpler";
import { FaStar } from "react-icons/fa";
import DriverRating from "./DriverRating";

const DriverShowPage = () => {
  const { d_id } = useParams();
  const [vehicleInfo, setVehicleInfo] = useState({});
  const [userRating, setUserRating] = useState(0);
  const [load, setLoad] = useState(false);
  const [ratingno,setRatingNo]=useState(undefined)
  useEffect(() => {
    myAxios({
      url: `/api/drivers/drivers/${d_id}`,
      method: "GET",
    }).then((res) => {
      setVehicleInfo(res.data.data);
      setLoad(true);
    });
    myAxios({
      url: `http://192.168.29.130:5000/api/d_rating/getAvgRatingByDriver/${d_id}`,
      method: "GET",
    }).then((res) => {
      setUserRating(res.data.data);
    });
    myAxios({
      url: `http://192.168.29.130:5000/api/d_rating/getTotalNoOfRatingsByDriver/${d_id}`,
      method: "GET",
    }).then((responseForNoOfRatings)=>{
      setRatingNo(responseForNoOfRatings.data.data);
      console.log(responseForNoOfRatings.data.data);
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
                <div className="col-sm-8 border border-2">
                  <p className="subtitle fancy">
                    <span>{`${vehicleInfo.d_firstName} ${vehicleInfo.d_lastName}`}</span>
                  </p>
                  <div className="card-body">
                    <div className="img">
                      <img
                        src={`http://192.168.29.130:5000/api/vehicles/vehicle/image/${vehicleInfo.driverImage}`}
                        alt=""
                        style={{ width: "590px", height: "380px",marginLeft:"20px" }}
                        className="imgcss"
                      />
                    </div>
                    <div className="textmargin">
                    <h4>
                      Added By :<span className="font"></span>
                    </h4>
                    <h4>
                      Name:
                      <span className="font">{`${vehicleInfo.user.firstName} ${vehicleInfo.user.lastName}`}</span>
                    </h4>
                    <h4>
                      Contact:
                      <span className="font">{vehicleInfo.user.mobile}</span>
                    </h4>
                    <h4>
                      City:<span className="font">{vehicleInfo.user.city}</span>
                    </h4>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 border border-2 ">
                  <p className="subtitle fancy">
                    <span>Driver Details</span>
                  </p>
                  <h5 className="card-title text-center mt-3">
                    {vehicleInfo.d_firstName} {vehicleInfo.d_lastName}
                    <span>
                      <h6 className="text-warning">{vehicleInfo.driverCategory.d_categoryTitle} </h6>
                    </span>
                  </h5>
                  <ul>
                    <li className="card-text marg">
                      Driver Name : {vehicleInfo.d_firstName} {vehicleInfo.d_lastName}
                    </li>
                    <li className="card-text marg ">Driver City   : {vehicleInfo.d_city}</li>
                    <li className="card-text marg">Driver Mob No : {vehicleInfo.d_altMobNo}</li>
                    <li className="card-text marg">Driver Riding Experience : {vehicleInfo.d_ridingExperience}</li>
                    <li className="card-text marg">Driver Education : {vehicleInfo.d_education} </li>
                    <li className="card-text marg">Known Languages : {vehicleInfo.d_knownLanguages}</li>
                    <li className="card-text marg">Driver Address : {vehicleInfo.d_address}</li>
                    <li className="card-text marg">Driver Age : {vehicleInfo.d_dob}</li>
                    <li className="card-text marg">Driver Gender : {vehicleInfo.d_gender}</li>
                    <li className="card-text marg">About Driver : {vehicleInfo.about}</li>
                  </ul>
                  <div style={{display: "flex",marginLeft:"-5px", padding:"0px", justifyContent: "space-between"}}>
                  <h6 className="ms-4 me-1"><b>Rating:</b></h6>
                    {[1, 2, 3, 4, 5].map((i) => {
                      return (
                        <FaStar color={i > userRating ? "#d6cab7"  : "orange"} /> 
                      );
                    })}
                    <h5 className="ratingmargin">({ratingno})</h5>
                  </div>
                  <div>
                    <p className="textblink1 ">
                      Give Rating
                    </p>
                    <p className="mb-3"><DriverRating dId={vehicleInfo.d_id} /> </p>
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
                    <li>The driver shown here are verified according to the data received by the rideezy team. We will not gurantee about the data.</li>
                    <li>For every journey, the passenger’s safety is of prime importance.Therefore, ensure that the driver assigned to you has a valid license and driving experience.</li>
                    <li>It is essential to select reliable car drivers based on ratings so that they do not ditch you by not coming to pick you up at the last moment.</li>
                    <li>Before choosing the driver for service in any city, ensure that the driver knows the area. The drivers that are well-acquainted with the local area know all the short routes. In case of traffic, they would take another route and make you reach your destination on time.</li>
                    <li>Driver’s background check is necessary. Confirm from the customer support before hiring, that driver has not been involved with any criminal activity or that there are no ongoing or previous law suits or police records on him. Also, check the reviews of the driver online to take the right hiring decision.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 border border-2 mb-3">
              <h1>Booking facility will be coming soon...</h1>
            </div>
          </div>
        </div>
      )}
    </Base>
  );
  // }
};

export default DriverShowPage;