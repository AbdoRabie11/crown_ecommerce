import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../assets/crown .svg";
import "./navigation.style.scss";
const Navigation = () => {
  return (
    <div>
      <Fragment>
        <div className="navigation">
          <Link className="logo-container" to="home">
            <CrwnLogo  className='logo'/>
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
              shop
            </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    </div>
  );
};
export default Navigation;
