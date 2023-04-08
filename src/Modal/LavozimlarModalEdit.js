import React from 'react';
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {OnClick_SaveEdit, ToggleModalEdit} from "../features/card/cartSlice_Lavozimlar";

function LavozimlarModalEdit({id}) {

    const dispatch = useDispatch()
    const {modalVisibleEDIT} = useSelector((store) => store.cart2)

    const onClickSave = (event) => {
        event.preventDefault();
        dispatch(
            OnClick_SaveEdit({
                Nomi: event.target[0].value,
                Maosh: event.target[1].value,
            })
        )
    }

    return (
        <div>
            <Modal isOpen={ modalVisibleEDIT} toggle={ToggleModalEdit}>
                <ModalHeader>
                    Edit
                </ModalHeader>
                <ModalBody>
                    <form id={'post-formadd'} onSubmit={onClickSave}>
                        <input
                            type='text'
                            className={' form-control  my-3'}
                            defaultValue={id.Nomi}
                        />
                        <input
                            type='text'
                            className={' form-control  my-3'}
                            defaultValue={id.Maosh}
                        />
                    </form>
                </ModalBody>
                <ModalFooter>
                    <button form={'post-formadd'} type={'submit'} onClick={()=>dispatch(ToggleModalEdit())}> save</button>
                    <button type={'button'}  onClick={()=>dispatch(ToggleModalEdit())}> cancel</button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default LavozimlarModalEdit;