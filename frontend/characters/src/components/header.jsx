import "../style/header.scss";
import { Link } from "react-router-dom";
import Metamask from "../Metamask";

function Header() {
  return (
    <div className="header_wrapper">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="logo">
          <h1>Characters</h1>
        </div>
      </Link>
      <Metamask />
    </div>
  );
}

export default Header;
