import React from 'react';
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {ADD_XODIMLAR, ToggleModalADD} from "../features/card/cartSlice";

function XodimlarModalADD() {
    const dispatch = useDispatch()
    const {xodimlar, modalVisibleADD,} = useSelector((store) => store.cart)
    const onClickSave = (event) => {
        event.preventDefault();
        dispatch(
            ADD_XODIMLAR({
                id: xodimlar.length + 1,
                Name: event.target[0].value,
                SurName: event.target[1].value,
                phone: event.target[2].value,
                lavozim_id:{
                    id: xodimlar.length + 1,
                    lavozim: event.target[3].value,
                },
                ilmiy_Daraja_id: {
                    id: xodimlar.length + 1,
                    ilmiyDaraja: event.target[4].value,
                }
            })
        )
    }
    return (
        <div>
            <Modal isOpen={modalVisibleADD} toggle={ToggleModalADD}>
                <ModalHeader>
                    Add Post
                </ModalHeader>
                <ModalBody>
                    <form id={'post-formadd'} onSubmit={onClickSave}>
                        <input
                            type='text'
                            className={' form-control  my-3'}
                            placeholder={'Name'}
                        />
                        <input
                            type='text'
                            className={' form-control  my-3'}
                            placeholder={'SureName'}
                        />
                        <input
                            type='text'
                            className={' form-control  my-3'}
                            placeholder={'Phone'}
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
                    <button form={'post-formadd'} type={'submit'} onClick={() => dispatch(ToggleModalADD())}> save
                    </button>
                    <button type={'button'} onClick={() => dispatch(ToggleModalADD())}> cancel</button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default XodimlarModalADD;