import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
// import { logout } from "../actions/Actions";

const Header = () => {
  /*const dispatch = useDispatch();
  const handleClick = () => {
    window.location.reload(false);
    dispatch(logout);
  };*/
  const authenticated = useSelector((state) => state.LoginReducer.isAuthed);
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
            {authenticated ? (
              <span className="navbar-brand nav-link">Logout</span>
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
