import Modal from "../components/modalCreateObject";
import { useState } from "react";
import InsideModal from "../components/insideModalObject";

function Home(props) {
  const [showModal, setShowModal] = useState(false);
  const { auth } = props;

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <button onClick={handleToggleModal}>+++</button>
      <Modal show={showModal} close={handleToggleModal}>
        <InsideModal auth={auth} />
      </Modal>
    </div>
  );
}

export default Home;
