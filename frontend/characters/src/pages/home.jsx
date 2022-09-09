import Modal from "../components/modalCreateObject";
import { useState, useEffect } from "react";
import InsideModal from "../components/insideModalObject";
import Object from "../components/object";
import { getAll } from "../utils/path.js";
import axios from "axios";
import "../style/home.scss";

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
    <div className="home_wrapper">
      <button onClick={handleToggleModal}>+++</button>
      <Modal show={showModal} close={handleToggleModal}>
        <InsideModal
          close={handleToggleModal}
          auth={auth}
          setIsLoad={setIsLoad}
        />
      </Modal>
      <div className="test">
        {list.map((object, i) => (
          <div className="project_wrapper" key={i}>
            <Object object={object} setIsLoad={setIsLoad} auth={auth} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
