import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import imgs from "../../assets";
import { searchAction } from "../redux/actions";
import {Link, useNavigate} from "react-router-dom"
import "./Navbar.scss";
function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [searchText,setSearchText] = useState('')
  const handleSearch = (value) => {
    value != '' ? navigate("/search") : navigate("/")
    setSearchText(value)
  }
  
  useEffect(() => {
    dispatch(searchAction(searchText))
  },[searchText])
 
  useEffect(() => {
    navigate("/");
  }, []);
  return (
    <nav className="navbar">
      <Link to= "/" onClick={() => setSearchText('')} className="navbar__img">
        <img src={imgs.logo} alt="" />
      </Link>
      <div className="navbar__wrap">
        <AiOutlineSearch className="navbar__icon"/>
        <input value = {searchText} onChange={(e) => {
          handleSearch(e.target.value)
        }} type="text" className="navbar__inp" />
      </div>
    </nav>
  );
}

export default Navbar;
