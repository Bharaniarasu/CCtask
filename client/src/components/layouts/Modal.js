import reactDom from "react-dom";
import { useDispatch } from "react-redux";
import { hidePanel } from "../redux/slices/ScriptSlice";

const BackDrop = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="modal_backdrop" onClick={() => dispatch(hidePanel())}></div>
  );
};
const ModalOverlay = (props) => {
  return (
    <div className="modal_modal">
      <div className="modal_content">{props.children}</div>
    </div>
  );
};
const Modal = (props) => {
  const overlay = document.getElementById("overlays");

  return (
    <>
      {reactDom.createPortal(<BackDrop />, overlay)}
      {reactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlay
      )}
    </>
  );
};
export default Modal;
