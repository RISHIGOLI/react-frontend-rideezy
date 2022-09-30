import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Button } from 'reactstrap';
// import Base from './components/Base';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import About from "./pages/About";
import Services from "./pages/Services";
import AllPlaces from "./pages/AllPlaces/AllPlaces.jsx";
import Homepage from "./pages/Homepage.js";

// import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Privateroute from "./components/Privateroute";
import Userdashboard from "./pages/UserRoutes/Userdashboard";
import ProfileInfo from "./pages/UserRoutes/ProfileInfo";
import Vfrom from "./pages/Vfrom";
// import Login1 from './components/Login1';
import Paginate from "./components/Paginate";
import Paginate2wheel from "./components/Paginate2wheel";
import Paginate3wheel from "./components/Paginate3wheel";
import PaginateAv from "./components/paginateAv";
import Show from "./components/Show";
import Driver from "./pages/Driver";
import DriverShowPage from "./components/DriverShowPage";
import Post from "./components/Post";
import VehicleAdded from "./components/VehicleAdded";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/AllPlaces" element={<AllPlaces />} />
        <Route path="/post" element={<Post/>}/>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/show/:id" element={<Show />} />
        <Route path="/service" element={<Services />} />
        <Route path="/drivershowpage/:d_id" element={<DriverShowPage/>}/>
        <Route path="/driver" element={<Driver />} />
        <Route path="/vehicleadded" element={<VehicleAdded/>}/>
        {/* <Route path='/showpage' elelment={<Showpage/>}/> */}
        <Route path="/user" element={<Privateroute />}>
          <Route path="dashboard" element={<Userdashboard />} />
          <Route path="profile-info" element={<ProfileInfo />} />
          {/* <Route path='login1' element={<Login1/>}/> */}
          <Route path="vfrom" element={<Vfrom />} />
          <Route path="paginate" element={<Paginate />} />
          <Route path="paginate2" element={<Paginate2wheel />} />
          <Route path="paginate3" element={<Paginate3wheel />} />
          <Route path="paginateav" element={<PaginateAv />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
