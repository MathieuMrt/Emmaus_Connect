import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header_container">
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeNavlinks" : "navlink"
              }
              to="storage"
            >
              Stock
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeNavlinks" : "navlink"
              }
              to="addphone"
            >
              Ajout
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeNavlinks" : "navlink"
              }
              to="recherche"
            >
              Recherche note
            </NavLink>
          </li>
        </ul>

        <NavLink className="navbutton" to="/">
          <button>Déconnexion</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
