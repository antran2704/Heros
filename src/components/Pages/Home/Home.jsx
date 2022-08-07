import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Content from "../../Content/Content";
import axios from "axios";
import "./Home.scss";
import { getListHeros } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const getApi = async () => {
      const res = await axios.get(
        "https://my-json-server.typicode.com/Isaacmeedinaa/dc-superheroes/superheroes"
      );
      dispatch(getListHeros(res.data));
      setData(res.data);
    };
    getApi();
  }, []);

 
  return (
    <div className="home">
      <Content data={data} />
    </div>
  );
}

export default Home;
