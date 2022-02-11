import React from "react";
import Button from "@material-ui/core/Button";
import "./navbar.css";

const Navbar = ({ onButtonSubmit }) => {
  return (
    <nav className="navbar">
      <h3 className="logo">Lets Grow More</h3>
      <div className="nav-links">
        <Button variant="contained" onClick={onButtonSubmit}>
          Get Users
        </Button>
      </div>
    </nav>
  );
};
export default Navbar;
