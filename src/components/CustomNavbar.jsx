import { Navbar,NavbarBrand,NavbarToggler,Collapse,Nav,NavItem,NavLink,DropdownMenu,NavbarText,UncontrolledDropdown,DropdownToggle,DropdownItem  } from "reactstrap";
import { NavLink as ReactLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {doLogOut, getCurrentUserDetail, isLoggedIn} from "../auth";
import './CustomNavbar.css'
import{FaUserCircle} from 'react-icons/fa'
import RideEzy from "../assets/images/RideEzy.png"

// import { loginUser,user } from "../services/user-service";

const CustomNavbar=()=>{

    let navigate=useNavigate()

     const [isOpen,setIsOpen]=useState(false)

     const [login,setLogin] = useState(false)
      const [user,setUser] = useState(undefined)
     //const [rushi,setRushi] = useState(undefined)
     

     useEffect(()=>{
      
        setLogin(isLoggedIn())
        setUser(getCurrentUserDetail())
     },[login])

     const logout=()=>{
      doLogOut(()=>{
        //loggedout
        setLogin(false);
        navigate("/")
      });
      
     };

    return(
        <div>
        <Navbar 
            // color="primary"
            dark
            expand="md"
            
            className="px-4 demo"
        
            >
          <NavbarBrand tag={ReactLink} to="/" className="hover"><img src={RideEzy} alt="" style={{width:"40px"}}/> RideEzy</NavbarBrand>
          <NavbarToggler  onClick={()=>setIsOpen(!isOpen)}/>
          <Collapse  isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>

            <NavItem>
                {/* <NavLink tag={ReactLink} to="/home">NewFeed</NavLink> */}
              </NavItem>
            <NavItem>
                <NavLink tag={ReactLink} to="/user/dashboard" className="hover">Home</NavLink>
              </NavItem>

              <NavItem>
                {/* <NavLink tag={ReactLink} to="/about">About</NavLink> */}
              </NavItem>

              <NavItem>
              {/* <NavLink tag={ReactLink} to="/vfrom">Form</NavLink> */}
            </NavItem>

              <NavItem>
                {/* <NavLink tag={ReactLink} to="/services">Services</NavLink> */}
              </NavItem>
{/*               
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  More
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem tag={ReactLink} to="/services">ContactUs</DropdownItem>
                  <DropdownItem>FaceBook</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Youtube</DropdownItem>
                  <DropdownItem>Instagram</DropdownItem>
                  <DropdownItem>LinkedIn</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
            <Nav navbar>
              {
                login && (
                  <>
                    <NavItem>
                      <NavLink tag={ReactLink} to="/user/dashboard" className="hover">
                      {user.email}
                      </NavLink>
                    </NavItem>
                    
                    <NavItem>
                      <NavLink tag={ReactLink} to="/user/profile-info" className="user">
                      <FaUserCircle/>
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink tag={ReactLink} to="/" onClick={logout} className="hover">
                      Logout
                      </NavLink>
                    </NavItem>

                  </>
              
                )
                
              }

              {
                !login && (
                 <>
                   <NavItem>
                    <NavLink tag={ReactLink} to="/login">
                      Login
                    </NavLink>
                  </NavItem>
                  <NavItem>
                <   NavLink tag={ReactLink} to="/signup">
                      Signup
                    </NavLink>
                  </NavItem>
                 </>
                )
              }
            </Nav>
            {/* <NavbarText>Youtube</NavbarText> */}
          </Collapse>
        </Navbar>
      </div>
    );
}

export default CustomNavbar;