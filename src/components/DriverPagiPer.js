import React from "react";
import { useState } from "react";
// import ReactPaginate from "react-paginate";
// import cars from "../assets/images/cars.jpg";
import { myAxios } from "../services/helpler";
import Pagination from "react-bootstrap/Pagination";
import { useNavigate } from "react-router-dom";
import error from "../assets/images/error.png";
import {FaStar} from 'react-icons/fa'


const DriverPagiPer = ({city}) => {
  const [itemsVeh, setItems] = useState([]);
  const [pageNo, setpageNo] = useState(0);
  const { data } = JSON.parse(localStorage.getItem("data"));
  const numberofpage = (n) => {
    setpageNo(n);
  };

  let items = [];
  for (let number = 0; number < itemsVeh.totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === pageNo}
        onClick={() => {
          numberofpage(number);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }
  const navigate = useNavigate();
  const handleGetMore = (d_id) => {
    navigate({ pathname: `/drivershowpage/${d_id}` });
  };
  React.useEffect(() => {
    myAxios({
    //   url: `/api/vehicles/getAllVehiclesByCityAndCategoryWithPagination/city/${data.city}/category/7?pageNumber=${pageNo}&pageSize=9&sortBy=id&sortDir=asc`,
      url: `/api/drivers/getAllDriversByCityAndCategoryWithPagination/city/${city.length==1?data.city:city}/category/5?pageNumber=${pageNo}&pageSize=5&sortBy=id&sortDir=asc`,
    }).then((res) => {
      console.log(res.data);
      setItems(res.data);
    });
  }, [pageNo,city]);
  return (
    <>
      <div>
        <div className="container">
          <div className="row m-2">
          {(itemsVeh.content && itemsVeh.content.length!=0)  ? (
              itemsVeh.content.map((item) => {
                return (
                  <div key={item.id} className="col-sm-6 col-md-4  v my-2">
                  <div
                  className="card text-center Hover"
                  style={{ width: "13rem", height: "22rem" }}
                >
                {/* <h5 className="card-title">Id:{item.id}</h5> */}
                <img
                src={`http://192.168.29.130:5000/api/vehicles/vehicle/image/${item.driverImage}`}
                style={{ width: "190px", height: "8rem" }}
                className="card-img-top ms-2 mt-2"
                alt="..."
                showArrows={true}
                />
                <div className="card-body">
                        {/* <h6 className='card-subtitle mb-2 text-muted text-center'>{item.}</h6> */}
                        <h5 className="card-title h6">
                        <b>{item.d_firstName} {item.d_lastName}</b> {" "}
                        <span>
                      <p className="card-text text-danger"><b>{item.d_city}</b></p>
                        </span>
                      </h5>
                          <p className="text"><b>Mob.:</b>{item.d_altMobNo}</p>
                      <p className="card-text"><b>Exp.:</b>{item.d_ridingExperience} (Yrs.)</p>
                      <div style={{display: "flex",marginLeft:"-5px", padding:"0px", justifyContent: "space-between",marginTop:"50px"}}>
                      <p className="card-text text-success "><b><FaStar className="me-2 mb-2" style={{color:"orange"}}/>{item.d_ratings}</b> ({item.d_noOfRatings})</p>
                        <button
                            onClick={() => {
                              handleGetMore(item.d_id);
                            }}
                            className="btn btn-primary mb-2  "
                          >
                            View
                          </button></div>
                      </div>
                    </div>
                  </div>
                );
              })
              ):(
                <div className="text-center error" >
                <img src={error} alt="Error" />
                <h1 className="textblink text-danger ">SORRY ! No Permanent Drivers Are Available In {city} </h1>
                </div>
              )}
          </div>
        </div>
        <Pagination>{items}</Pagination>
      </div>
    </>
  );
};

export default DriverPagiPer;