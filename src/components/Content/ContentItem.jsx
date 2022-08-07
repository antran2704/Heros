import { useContext } from "react";
import { Context } from "../../App";
import "./Content.scss";

function ContentItem({data}) {
  const {handleShowModal, handleGetDataHero} = useContext(Context)
  return (
    <div onClick={() => {
      handleShowModal()
      handleGetDataHero(data)
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
