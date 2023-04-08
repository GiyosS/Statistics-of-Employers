import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import XodimlarModalADD from "../Modal/XodimlarModalADD";
import XodimlarModalEdit from "../Modal/XodimlarModalEdit";
import {
  Delete,
  ToggleModalADD,
  ToggleModalEdit,
  EDIT_USER,
} from "../features/card/cartSlice";

function Xodimlar(props) {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const { xodimlar } = useSelector((store) => store.cart);
  const [id, setID] = useState("");
  function Edit(id) {
    dispatch(ToggleModalEdit());
    dispatch(EDIT_USER(id));
    const speficItem = xodimlar.find((item) => item.id === id);
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
        <h1 className={"text-center"}>Employees</h1>
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
              <th scope="col">Name</th>
              <th scope="col">Surname</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Position</th>
              <th scope="col">Academic Degree</th>
            </tr>
          </thead>
          <tbody>
            {xodimlar
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
                  <td>{item.Name}</td>
                  <td>{item.SurName}</td>
                  <td>{item.phone}</td>
                  <td>{item.lavozim_id.lavozim}</td>
                  <td>{item.ilmiy_Daraja_id.ilmiyDaraja}</td>
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
        <XodimlarModalADD />
      </div>
      <div>
        <XodimlarModalEdit id={id} />
      </div>
    </div>
  );
}

export default Xodimlar;
