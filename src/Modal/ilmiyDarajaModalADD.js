import React from "react";

import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

import { useDispatch, useSelector } from "react-redux";

import { ADD, ToggleModalADD } from "../features/card/cartSlice_ilmiyDaraja";

function IlmiyDarajaModalADD() {
  const dispatch = useDispatch();
  const { ilmiyDaraja, modalVisibleADD } = useSelector((store) => store.cart3);
  const onClickSave = (event) => {
    event.preventDefault();
    dispatch(
      ADD({
        id: ilmiyDaraja.length + 1,
        Nomi: event.target[0].value,
        Bonus: event.target[1].value,
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
              placeholder={"Level"}
            />
            <input
              type="text"
              className={" form-control  my-3"}
              placeholder={"Bonus"}
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

export default IlmiyDarajaModalADD;
