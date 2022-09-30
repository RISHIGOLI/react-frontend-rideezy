import React from "react";
import { useState } from "react";
import { myAxios } from "../services/helpler";
import Pagination from "react-bootstrap/Pagination";
import { useNavigate } from "react-router-dom";
import error from "../assets/images/error.png";
import {FaStar} from 'react-icons/fa'
import petrol from "../assets/images/petrol.png"



const Paginate = ({city}) => {
  const [itemsVeh, setItems] = useState([]);
  const [pageNo, setpageNo] = useState(0);
  // const { data } = JSON.parse(localStorage.getItem("data"));
  const [ usercity,setCity]= useState(JSON.parse(localStorage.getItem("data")));
  const [loading, setLoading] = useState(false);
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
  const handleGetMore = (id) => {
    navigate({ pathname: `/show/${id}` });
  };
  React.useEffect(() => {
    myAxios({
      url: `/api/vehicles/getAllVehiclesByCityAndCategoryWithPagination/city/${city.length==1 ? usercity.data.city : city}/category/4?pageNumber=${pageNo}&pageSize=6&sortBy=id&sortDir=asc`,
    }).then((res) => {
      console.log(res.data);
      setItems(res.data);
      setLoading(true);
    });
  }, [pageNo,city]);
  return (
    <>
    {loading ? (
      <div>
        <div className="container">
          <div className="row m-2">
          {itemsVeh.content.length > 1 ? (
            // {itemsVeh.content &&
            //   itemsVeh.content.length > 1 &&
              itemsVeh.content.map((item) => {
                return (
                  <div key={item.id} className="col-sm-6 col-md-4  v my-2">
                  <div
                  className="card text-center Hover"
                  style={{ width: "13rem", height: "22rem" }}
                >
                    {/* <h5 className="card-title">Id:{item.id}</h5> */}
                    <img
                    src={`http://192.168.29.130:5000/api/vehicles/vehicle/image/${item.vehicleImage}`}
                    style={{ width: "190px", height: "8rem" }}
                    className="card-img-top ms-2 mt-2"
                    alt="..."
                    showArrows={true}
                    />
                    <div className="card-body">
                        {/* <h6 className='card-subtitle mb-2 text-muted text-center'>{item.}</h6> */}
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
            <h1 className="textblink text-danger ">SORRY ! No Four Wheelers Are Available In {city} </h1>
            </div>
          )}
          </div>
        </div>
        <Pagination>{items}</Pagination>
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

export default Paginate;

