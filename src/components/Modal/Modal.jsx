import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import "./Modal.scss";

function Modal({ show, onClick }) {
  const {selectItem} = useSelector((state) => state)
  return (
    <div className={`modal_container ${show ? "show-bg" : "hide-bg"}`}>
      <div className="modal_out" onClick={onClick}></div>
      <div
        className={`modal_wrap ${show ? "show-modal" : "hide-modal"}`}
        style={{ backgroundImage: `url(${selectItem.imgUrl})` }}
      >
        <div className="modal">
          <div className="modal_content">
            <AiOutlineClose onClick={onClick} className="modal_close" />
            <h3 className="modal_tilte">{selectItem.name}</h3>
            <div className="modal_number">
              <span className="modal_rating">{`Thể loại: ${selectItem.comic}`}</span>
            </div>
            <p className="modal_desc">{selectItem.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
