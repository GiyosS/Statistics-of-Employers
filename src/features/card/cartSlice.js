import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    xodimlar: [
        {
            id: 1, Name: 'Mark', SurName: 'Otto', phone: 12312323232,

            lavozim_id:
                {
                    id: 1,
                    lavozim: 'Teamleader'

                },
            ilmiy_Daraja_id: {
                id: 2,
                ilmiyDaraja: 'Senior'
            }
        },
        {
            id: 2, Name: 'Jakob', SurName: 'Throton', phone: 12312489843,
            lavozim_id:
                {
                    id: 2,
                    lavozim: 'Manager'

                },
            ilmiy_Daraja_id: {
                id: 2,
                ilmiyDaraja: 'Middle'
            }
        },
        {
            id: 3, Name: 'Larry', SurName: 'TheBird', phone: 12323932,
            lavozim_id:
                {
                    id: 3,
                    lavozim: 'Developer'

                },
            ilmiy_Daraja_id: {
                id: 3,
                ilmiyDaraja: 'Junior'
            }
        },
    ],
    modalVisibleADD: false,
    modalVisibleEDIT: false,
    EditID: null,
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        Delete: (state, action) => {
            const DeleteID = action.payload
            state.xodimlar = state.xodimlar.filter((item) => item.id !== DeleteID)
        },
        ToggleModalADD: (state, action) => {
            state.modalVisibleADD = !state.modalVisibleADD
        },
        ToggleModalEdit: (state, action) => {
            state.modalVisibleEDIT = !state.modalVisibleEDIT
        },
        ADD_XODIMLAR: (state, action) => {
            state.xodimlar.push(action.payload)
            // state.xodimlar.lavozim_id.push(action.payload)
        },
        EDIT_USER: (state, action) => {
            state.EditID = action.payload
        },
        OnClick_SaveEdit: (state, action) => {
            const todo = action.payload
            state.xodimlar = state.xodimlar.map((item) => {
                if (item.id === state.EditID) {
                    return {
                        ...item,
                        Name: todo.Name,
                        SurName: todo.SurName,
                        phone: todo.phone,
                        lavozim_id:{
                            lavozim: todo.lavozim_id.lavozim
                        },
                        ilmiy_Daraja_id:{
                            ilmiyDaraja: todo.ilmiy_Daraja_id.ilmiyDaraja
                        }
                    }
                }
                return item
            })
        }
    }
})


export const {Delete, ToggleModalADD, ADD_XODIMLAR, ToggleModalEdit, EDIT_USER, OnClick_SaveEdit} = cartSlice.actions;
export default cartSlice.reducer