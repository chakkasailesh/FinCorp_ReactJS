import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { context } from "./UserContext";

const Header = () => {
  const { state, setState } = useContext(context);
  const handleClick = () => {
    setState({ ...state, isAuthenticated: false });
  };
  return (
    <>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/aboutus" className="navbar-brand nav-link">
              AboutUS
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link to="services" className="navbar-brand nav-link">
              Services
            </Link>
            {/* <button
              class="nav-link dropdown-toggle"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </button>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="services" className="navbar-brand nav-link">
                Services
              </Link>
            </div> */}
          </li>
          <li>
            <Link to="emi" className="navbar-brand nav-link">
              EMI Calculator
            </Link>
          </li>
          <li>
            <Link to="signup" className="navbar-brand nav-link">
              Join as a member
            </Link>
          </li>
          <li>
            <Link to="updateProfile" className="navbar-brand nav-link">
              Update Profile
            </Link>
          </li>
          <li>
            {state.isAuthenticated ? (
              <a
                role="button"
                href="#"
                className="navbar-brand nav-link"
                onClick={handleClick}
              >
                Logout
              </a>
            ) : (
              <Link to="/" className="navbar-brand nav-link">
                Login
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Header;
