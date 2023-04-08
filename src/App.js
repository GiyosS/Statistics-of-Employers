import React from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import IlmiyDaraja from "./Components/IlmiyDaraja";
import Lavozimlar from "./Components/Lavozimlar";
import Xodimlar from "./Components/Xodimlar";
function App(props) {
  return (
    <div>
      <BrowserRouter>
        <div className={"container mt-5"}>
          <Link to={"/Xodimlar"}>
            <button className={"btn btn-dark float-left m-1"}>Employees</button>
          </Link>
          <Link to={"/Lavozimlar"}>
            <button className={"btn btn-dark float-left m-1"}>Positions</button>
          </Link>
          <Link to={"/IlmiyDaraja"}>
            <button className={"btn btn-dark float-left m-1"}>
              Academic Degree
            </button>
          </Link>
          <br />
          <hr />
          <br />
          <Routes>
            <Route path={"/Xodimlar"} element={<Xodimlar />} />
            <Route path={"/Lavozimlar"} element={<Lavozimlar />} />
            <Route path={"/IlmiyDaraja"} element={<IlmiyDaraja />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
