import "../style/header.scss";
import img from "/Users/mr-gateau/characters/frontend/characters/src/MetaMask_Fox.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header_wrapper">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="logo">
          <h1>Characters</h1>
        </div>
      </Link>
      <div className="metaWrapper">
        <img src={img} alt="logo metamask" className="metamask" />
      </div>
    </div>
  );
}

export default Header;
