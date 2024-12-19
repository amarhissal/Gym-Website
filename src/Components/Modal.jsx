import "./Modal.css";
function Modal(props) {
  return (
    <>
      <div className="backdrop"></div>
      <dialog open={true} className="modal">
        {props.children}
      </dialog>
    </>
  );
}

export default Modal;
