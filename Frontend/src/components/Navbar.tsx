import logo from "../assets/logo.svg";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white navbar border-bottom"
      style={{ paddingTop: "10px" }}
    >
      <a className="navbar-brand" href="/" style={{ marginLeft: "300px" }}>
        <img src={logo} alt="logo" width="25%" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse nav-link"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Signup
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Support
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Menu />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
