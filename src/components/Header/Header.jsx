import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <ul>
        <li>
          <NavLink to="/">Connexion</NavLink>
        </li>
        <li>
          <NavLink to="storage">Stock</NavLink>
        </li>
        <li>
          <NavLink to="addphone">Ajout</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
