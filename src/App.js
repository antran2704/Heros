import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import Search from "./components/Pages/Search/Search";
import Modal from "./components/Modal/Modal";
import { createContext, useState } from "react";

export const Context = createContext();
function App() {
  const [show, setShow] = useState(false);
  function handleShowModal() {
    setShow(!show);
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Context.Provider value={{ handleShowModal}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Context.Provider>
        <Modal show={show} onClick={handleShowModal}/>
      </Router>
    </div>
  );
}

export default App;
