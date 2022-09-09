import Modal from "../components/modalCreateObject";
import { useState, useEffect } from "react";
import InsideModal from "../components/insideModalObject";
import Object from "../components/object";
import { getAll } from "../utils/path.js";
import axios from "axios";
import "../style/home.scss";
import Header from "../components/headerPages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

function Home(props) {
  const [showModal, setShowModal] = useState(false);
  const [isLoad, setIsLoad] = useState(true);
  const [list, setList] = useState([]);
  const { auth } = props;

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (isLoad) {
      axios
        .get(getAll, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        })
        .then(function (res) {
          setList(res.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    setIsLoad(false);
  }, [auth, isLoad]);

  return (
    <div className="big_home_wrapper">
      <Header />
      <div className="home_wrapper">
        <FontAwesomeIcon
          icon={faSquarePlus}
          onClick={handleToggleModal}
          className="icon_plus"
        />
        <div className="inside_wrapper">
          <Modal show={showModal} close={handleToggleModal}>
            <InsideModal
              close={handleToggleModal}
              auth={auth}
              setIsLoad={setIsLoad}
            />
          </Modal>
          <div className="test">
            {list.map((object, i) => (
              <Object
                key={i}
                object={object}
                setIsLoad={setIsLoad}
                auth={auth}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
