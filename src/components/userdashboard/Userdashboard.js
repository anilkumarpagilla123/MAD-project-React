import React from "react";
import './Userdashboard.css';
import { Nav,Container} from "react-bootstrap";
import { Outlet, NavLink } from "react-router-dom";
import charImg from "../images/charity.png";

function Userdashboard() {
  return (
    <div>
        <Container>
          <Nav className="nav-line" defaultActiveKey="/profile">
            <Nav.Item>
              <Nav.Link to="profile" as={NavLink} className="nav-heading">
                User Profile
              </Nav.Link>
            </Nav.Item>
           <img src={charImg} alt="" className="char-Img"/>
            <Nav.Item>
              <Nav.Link to="donate" as={NavLink} className="nav1-heading">
                Donate
              </Nav.Link>
            </Nav.Item>
          </Nav>
         
          <div className="mt-3">
            <Outlet />
          </div>
        </Container>
    </div>
  );
}

export default Userdashboard;
