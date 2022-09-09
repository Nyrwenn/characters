import "../style/object.scss";
import "../style/insideModalObject.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import InsideModal from "../components/insideModalObject";
import Modal from "../components/modalCreateObject";
import { delObject } from "../utils/path.js";
import axios from "axios";
import { Confirm } from "notiflix/build/notiflix-confirm-aio";

function Object(props) {
  const { object, auth, setIsLoad } = props;
  const [isOpen, setIsOpen] = useState(false);

  const deleteObject = () => {
    Confirm.show(
      "Delete confirmation",
      "Are you sure to delete ?",
      "Yes",
      "No",
      () => {
        axios
          .delete(delObject + object._id, {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          })
          .then(function (res) {
            setIsLoad(true);
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      () => {}
    );
  };
  console.log(object);
  return (
    <div className="card_wrapper">
      <div className="img_container">
        <img className="img" src={object.imageUrl} alt="Your personnage" />
      </div>
      <div className="info_container">
        <h2>{object.title}</h2>
        <p className="description_content">{object.description}</p>
      </div>
      {auth.userId === object.userId && (
        <div className="icons_container">
          <FontAwesomeIcon
            icon={faTrashCan}
            className="icon_trash"
            onClick={() => deleteObject()}
          />

          <FontAwesomeIcon
            className="icon"
            icon={faPencil}
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
      )}
    </div>
  );
}

export default Object;
