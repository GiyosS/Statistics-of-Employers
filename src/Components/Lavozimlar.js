import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import LavozimlarModalADD from "../Modal/LavozimlarModalADD";
import LavozimlarModalEdit from "../Modal/LavozimlarModalEdit";
import {
  Delete,
  EDIT_USER,
  ToggleModalADD,
  ToggleModalEdit,
} from "../features/card/cartSlice_Lavozimlar";

function Lavozimlar(props) {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const { lavozimlar } = useSelector((store) => store.cart2);
  const [id, setID] = useState("");

  function Edit(id) {
    dispatch(ToggleModalEdit());
    dispatch(EDIT_USER(id));
    const speficItem = lavozimlar.find((item) => item.id === id);
    setID(speficItem);
  }

  return (
    <div className={"row"}>
      <div className=" col-md-2 d-grid gap-2">
        <input
          type="text"
          className="rounded-pill"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="col-md-8">
        <h1 className={"text-center"}>Positions</h1>
      </div>
      <div className=" col-md-2 d-grid gap-2">
        <button
          className={"btn btn-success "}
          onClick={() => dispatch(ToggleModalADD())}
        >
          +ADD
        </button>
      </div>
      <div className="col-md-12">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Position</th>
              <th scope="col">Salary</th>
            </tr>
          </thead>
          <tbody>
            {lavozimlar
              .filter((item) => {
                return Object.keys(item).some((key) =>
                  item[key]
                    .toString()
                    .toLowerCase()
                    .includes(search.toLowerCase())
                );
              })
              .map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.Nomi}</td>
                  <td>{item.Maosh}</td>
                  <td>
                    <button
                      className={"btn btn-warning"}
                      onClick={() => Edit(item.id)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className={"btn btn-danger"}
                      onClick={() => dispatch(Delete(item.id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div>
        <LavozimlarModalADD />
      </div>
      <div>
        <LavozimlarModalEdit id={id} />
      </div>
    </div>
  );
}

export default Lavozimlar;
