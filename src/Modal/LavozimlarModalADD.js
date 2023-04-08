import React from "react";

import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

import { useDispatch, useSelector } from "react-redux";

import {
  ADD_LAVOZIMLAR,
  ToggleModalADD,
} from "../features/card/cartSlice_Lavozimlar";

function LavozimlarModalADD() {
  const dispatch = useDispatch();
  const { lavozimlar, modalVisibleADD } = useSelector((store) => store.cart2);
  const onClickSave = (event) => {
    event.preventDefault();
    dispatch(
      ADD_LAVOZIMLAR({
        id: lavozimlar.length + 1,
        Nomi: event.target[0].value,
        Maosh: event.target[1].value,
      })
    );
  };

  return (
    <div>
      <Modal isOpen={modalVisibleADD} toggle={ToggleModalADD}>
        <ModalHeader>Add Post</ModalHeader>
        <ModalBody>
          <form id={"post-formadd"} onSubmit={onClickSave}>
            <input
              type="text"
              className={" form-control  my-3"}
              placeholder={"Position"}
            />
            <input
              type="text"
              className={" form-control  my-3"}
              placeholder={"Salary"}
            />
          </form>
        </ModalBody>
        <ModalFooter>
          <button
            form={"post-formadd"}
            type={"submit"}
            onClick={() => dispatch(ToggleModalADD())}
          >
            {" "}
            save
          </button>
          <button type={"button"} onClick={() => dispatch(ToggleModalADD())}>
            {" "}
            cancel
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default LavozimlarModalADD;
