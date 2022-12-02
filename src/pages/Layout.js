import React from "react";
import { NavLink } from "react-router-dom";

function Layout() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/SubmitFormWithoutAPI">Submit Form Without API</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Layout;
