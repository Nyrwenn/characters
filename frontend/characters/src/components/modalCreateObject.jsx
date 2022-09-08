import "../style/modalCreate.scss";

function CreateObject(props) {
  const { show, close } = props;

  if (!show) {
    return null;
  }

  return (
    <div className="modal_container">
      <div className="overlay">
        <div className="modal_header">{props.modalTitle}</div>
        <div className="modal_body">{props.children}</div>
        <div className="modal_footer">
          <button id="cancel" onClick={() => close()}>
            {" "}
            Cancel{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateObject;
