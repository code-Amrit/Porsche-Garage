import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import logo from "./logo.png";

import Badge from "react-bootstrap/Badge";
import Modal from "../Modal";
import Cart from "../screens/Cart";
import { useCart } from "./ContextReducer";

export default function Navbar() {
  let data=useCart();
  
const [cartView,setCartView]=useState(false);

  const navigate = useNavigate();
  const handleLogout = ()=>{
   localStorage.removeItem("authToken");
   navigate("/login")
  }



  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            style={{ width: 100, height: 100 }}
            src={logo}
            alt="Porsche logo"
          />
          <div className="big">Porsche</div>
          <div className='small'>Garage</div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarSupportedContent"
          aria-expanded={!collapsed ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div
          className={`collapse navbar-collapse ${collapsed ? "" : "show"}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 ms-auto ">
            <li className="nav-item">
              <Link className="nav-link active fs-5" aria-current ="page" to="/" onClick={toggleNavbar}>
                Home
              </Link>
            </li>
           
           {(localStorage.getItem("authToken"))?
           <li className="nav-item">
           <Link className="nav-link active fs-5" to="/myOrder" onClick={toggleNavbar}>
             My Orders
           </Link>
            </li>
            : ""  }
          

          </ul>
         
          {(!localStorage.getItem("authToken"))?
          <div className="d-flex">
            <Link className="btn  btn-outline-dark  mx-1" to="/login" onClick={toggleNavbar}>
              Login
            </Link>

            <Link className="btn btn-dark btn-outline-danger text-white mx-1" to="/createuser" onClick={toggleNavbar}>
              Sign Up
            </Link>
          </div>
          : 
          <div>
          <div className="btn btn-dark btn-outline-success text-white mx-2" onClick={()=>{setCartView(true)}}>
            My Cart {"   "}
           <Badge pill bg="white" className="text-dark"> {data.length} </Badge> 
            </div>
          
          {cartView?<Modal onClose={()=>setCartView(false)}> <Cart /></Modal>:null}          
          <div className="btn  btn-outline-danger mx-2" onClick={handleLogout}>Logout</div> 
          </div> }
        </div>
      </div>
    </nav>
  );
}
