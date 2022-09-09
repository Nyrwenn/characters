import "../style/header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function HeaderPages() {
  const logout = () => {
    localStorage.removeItem("JWT");
    window.location.reload();
  };

  return (
    <div className="headerPages_wrapper">
      <div className="logo">
        <h1>Characters</h1>
      </div>
      <div className="logout_wrapper">
        <FontAwesomeIcon
          icon={faRightFromBracket}
          className="logout"
          onClick={() => logout()}
        />
      </div>
    </div>
  );
}

export default HeaderPages;
