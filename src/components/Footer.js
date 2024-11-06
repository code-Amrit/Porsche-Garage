import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='text-white bg-dark'>
      <footer className="py-5 m-5 ">
    <div className="row">
      

      

      <div className="col-2">
        <h5>Porsche India</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Home</Link></li>
          <li className="nav-item mb-2"><Link to="/login" className="nav-link p-0 text-muted">Login</Link></li>
          <li className="nav-item mb-2"><Link to="/createuser" className="nav-link p-0 text-muted">Signup</Link></li>
          <li className="nav-item mb-2"><Link to="/myOrder" className="nav-link p-0 text-muted">My Order</Link></li>
          <li className="nav-item mb-2"><Link to="https://www.porsche.com/international/aboutporsche/christophorusmagazine/archive/379/articleoverview/article14/#:~:text=The%20history%20of%20the%20Porsche,a%20legend%20in%20the%20making." className="nav-link p-0 text-muted">About</Link></li>
        </ul>
      </div>

      <div className="col-4 offset-1">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of whats new and exciting from us.</p>
          <div className="d-flex w-100 gap-2">
            <label for="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex justify-content-between py-4 my-4 border-top">
      <p >© 2024 Porsche South-East-Asia, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        
      </ul>
    </div>
  </footer>
    </div>
  )
}
