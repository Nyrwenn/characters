import "../style/object.scss";
import "../style/insideModalObject.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import InsideModal from "../components/insideModalObject";
import Modal from "../components/modalCreateObject";

function Object(props) {
  const { object, auth, setIsLoad } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card_wrapper">
      <div className="img_container">
        <img className="img" src={object.imageUrl} alt="Your personnage" />
      </div>
      <div className="info_container">
        <h2>{object.title}</h2>
        <p className="description_content">{object.description}</p>
      </div>
      <FontAwesomeIcon
        className="icon"
        icon={faPencil}
        style={{ cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <Modal show={isOpen} close={() => setIsOpen(false)}>
          <InsideModal
            object={object}
            auth={auth}
            setIsLoad={setIsLoad}
            close={() => setIsOpen(false)}
          />{" "}
        </Modal>
      )}
    </div>
  );
}

export default Object;
