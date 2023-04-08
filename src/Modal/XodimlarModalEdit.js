import React from 'react';
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {OnClick_SaveEdit, ToggleModalEdit} from "../features/card/cartSlice";

function XodimlarModalEdit({id}) {
    const dispatch = useDispatch()
    const {modalVisibleEDIT} = useSelector((store) => store.cart)

    const onClickSave = (event) => {
        event.preventDefault();
        dispatch(
            OnClick_SaveEdit({
                Name: event.target[0].value,
                SurName: event.target[1].value,
                phone: event.target[2].value,
                lavozim_id:{
                    lavozim: event.target[3].value,
                },
                ilmiy_Daraja_id: {
                    ilmiyDaraja: event.target[4].value,
                }
            })
        )
    }

    return (
        <div>
            <Modal isOpen={modalVisibleEDIT} toggle={ToggleModalEdit}>
                <ModalHeader>
                    Edit
                </ModalHeader>
                <ModalBody>
                    <form id={'post-formadd'} onSubmit={onClickSave}>
                        <input
                            type='text'
                            className={' form-control  my-3'}
                            defaultValue={id.Name}
                        />
                        <input
                            type='text'
                            className={' form-control  my-3'}
                            defaultValue={id.SurName}
                        />
                        <input
                            type='text'
                            className={' form-control  my-3'}
                            defaultValue={id.phone}
                        />

                        <select className="form-select" aria-label="Default select example">
                            <option value="Teamledader">Teamleader</option>
                            <option value="Manager">Manager</option>
                            <option value="Developer">Developer</option>

                        </select>
                        <select className="form-select" aria-label="Default select example">
                            <option value="Senior">Senior</option>
                            <option value="Middle">Middle</option>
                            <option value="Junior">Junior</option>
                        </select>

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

export default XodimlarModalEdit;