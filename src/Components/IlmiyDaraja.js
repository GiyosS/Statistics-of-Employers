import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import IlmiyDarajaModalADD from "../Modal/ilmiyDarajaModalADD";
import IlmiyDarajaModalEdit from "../Modal/ilmiyDarajaModalEdit";
import {
  Delete,
  EDIT_USER,
  ToggleModalADD,
  ToggleModalEdit,
} from "../features/card/cartSlice_ilmiyDaraja";

function IlmiyDaraja(props) {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const { ilmiyDaraja } = useSelector((store) => store.cart3);
  const [id, setID] = useState("");

  function Edit(id) {
    dispatch(ToggleModalEdit());
    dispatch(EDIT_USER(id));
    const speficItem = ilmiyDaraja.find((item) => item.id === id);
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
        <h1 className={"text-center"}>Academic Degree</h1>
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
              <th scope="col">Level</th>
              <th scope="col">Bonus</th>
            </tr>
          </thead>
          <tbody>
            {ilmiyDaraja
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
                  <td>{item.Bonus}</td>
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
        <IlmiyDarajaModalADD />
      </div>
      <div>
        <IlmiyDarajaModalEdit id={id} />
      </div>
    </div>
  );
}

export default IlmiyDaraja;
