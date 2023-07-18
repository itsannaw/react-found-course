import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faDoorClosed,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const { setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };
  return (
    <div className={classes.navbar}>
      <div className={classes.navbar__left}>
      <Link to="/about">
        <FontAwesomeIcon
          icon={faCircleInfo}
          size="xl"
          style={{ color: "#000000" }}
        />
      </Link>
      <Link to="/posts">
        <FontAwesomeIcon
          icon={faHouse}
          size="xl"
          style={{ color: "#000000" }}
        />
      </Link>
      </div>
      <div>
        <Link onClick={logout}>
          <FontAwesomeIcon
            icon={faDoorClosed}
            size="xl"
            style={{ color: "#000000" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
