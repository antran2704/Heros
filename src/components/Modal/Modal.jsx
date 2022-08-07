import { AiOutlineClose } from "react-icons/ai";
import "./Modal.scss";

function Modal({ show, onClick, data }) {
  return (
    <div className={`modal_container ${show ? "show-bg" : "hide-bg"}`}>
      <div className="modal_out" onClick={onClick}></div>
      <div
        className={`modal_wrap ${show ? "show-modal" : "hide-modal"}`}
        style={{ backgroundImage: `url(${data.imgUrl})` }}
      >
        <div className="modal">
          <div className="modal_content">
            <AiOutlineClose onClick={onClick} className="modal_close" />
            <h3 className="modal_tilte">{data.name}</h3>
            <div className="modal_number">
              <span className="modal_rating">{`Thể loại: ${data.comic}`}</span>
            </div>
            <p className="modal_desc">{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
