import React from "react";
import { NavLink } from "react-router-dom";
import "./css/Layout.css";

function Layout() {
  return (
    <div className="layout">
      <ul>
        <li>
          <NavLink to="/SubmitFormWithoutAPI">Submit Form Without API</NavLink>
        </li>
        <li>
          <NavLink to="/formValidation">Form Validation</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Layout;
