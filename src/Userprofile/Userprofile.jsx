import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faBoxOpen,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

function Userprofile() {
  const username = 'John Doe';
  const navigate = useNavigate();
  const [showOrders, setShowOrders] = useState(false); // Toggle for orders

  const toggleOrders = () => {
    setShowOrders(!showOrders);
  };

  return (
    <div className="container-fluid bg-light min-vh-100 p-4">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 bg-white p-3 shadow-sm rounded">
          <h5 className="mb-4">Hello, {username}</h5>
          <ul className="list-group list-group-flush">
            {/* <li
              className="list-group-item d-flex align-items-center"
              onClick={() => navigate('/profile')}
              style={{ cursor: 'pointer' }}
            >
              <FontAwesomeIcon icon={faUser} className="me-2" />
              Profile
            </li> */}
            <li
              className="list-group-item d-flex align-items-center"
              onClick={toggleOrders}
              style={{ cursor: 'pointer' }}
            >
              <FontAwesomeIcon icon={faBoxOpen} className="me-2" />
              My Orders
            </li>
            <li
              className="list-group-item d-flex align-items-center text-danger"
              onClick={() => navigate('/logout')}
              style={{ cursor: 'pointer' }}
            >
              <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
              Logout
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-md-9 mt-3 mt-md-0">
          <div className="bg-white p-4 shadow-sm rounded">
            <h4>Your Profile</h4>
            <hr />
            <div className="row">
              <div className="col-md-6">
                <p><strong>Name:</strong> {username}</p>
                <p><strong>Email:</strong> john@example.com</p>
                <p><strong>Phone:</strong> +91-9876543210</p>
              </div>
              <div className="col-md-6">
               
              </div>
            </div>
          </div>

          {showOrders && (
            <div className="bg-white p-4 mt-4 shadow-sm rounded">
              <h5>Your Recent Orders</h5>
              <p>No recent orders</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Userprofile;
