import { Component } from "react";
import "./home.css";
import { FaCentos } from "react-icons/fa";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
export class Nav extends Component {
  render() {
    return (
      <div id="D1">
        <ul className="nav p-3 fixed-top">
          <li className="nav-item">
            <Link to="/" className="nav-link text-warning">
              {" "}
              <FaCentos className="f1"></FaCentos> <b>Ashwini</b>{" "}
            </Link>
          </li>
          <li className="nav-item ms-auto">
            <Link to="/about" className="nav-link text-light">
              {" "}
              About
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-light" to="/resume">
              {" "}
              Resume
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-light" to="/blog">
              Project
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-light" to="/contact">
              {" "}
              Contact
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
