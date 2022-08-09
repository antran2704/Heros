import { useContext } from "react";
import { useDispatch } from "react-redux";
import { Context } from "../../App";
import { selectItem } from "../redux/actions";
import "./Content.scss";

function ContentItem({data}) {
  const dispatch = useDispatch();

  const {handleShowModal} = useContext(Context)
  function getItem(item) {
    dispatch(selectItem(item));
  }
  return (
    <div onClick={() => {
      handleShowModal()
      getItem(data)
    }} className="content__item">
      <img
        className="content__item-img"
        src={data.imgUrl}
        alt=""
      />
      <p className="content__item-name">{data.name}</p>
    </div>
  );
}

export default ContentItem;
