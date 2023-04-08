import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    ilmiyDaraja: [
        {id: 1, Nomi: 'junior', Bonus: 10},
        {id: 2, Nomi: 'Middle', Bonus: 15},
        {id: 3, Nomi: 'Senior', Bonus: 30}
    ],
    modalVisibleADD: false,
    modalVisibleEDIT: false,
    EditID: null,
}
const cartSlice_ilmiyDaraja = createSlice({
    name: 'card',
    initialState,
    reducers: {
        Delete: (state, action) => {
            const DeleteID = action.payload
            state. ilmiyDaraja = state. ilmiyDaraja.filter((item) => item.id !== DeleteID)
        },
        ToggleModalADD:(state, action)=> {
            state.modalVisibleADD = !state.modalVisibleADD
        },
        ToggleModalEdit:(state, action)=> {
            state.modalVisibleEDIT = !state.modalVisibleEDIT
        },
        ADD:(state, action)=>{
            state.ilmiyDaraja.push(action.payload)
        },
        EDIT_USER: (state, action)=>{
            state.EditID = action.payload
        },
        OnClick_SaveEdit: (state,action) =>{
            const todo  = action.payload
            state.ilmiyDaraja =   state.ilmiyDaraja.map((item) => {
                if (item.id === state.EditID) {
                    return {
                        ...item,
                        Nomi: todo.Nomi,
                        Bonus: todo.Bonus,
                    }
                }
                return item
            })
        }
    }
})


export const {Delete, ToggleModalADD,  ADD,  ToggleModalEdit, EDIT_USER, OnClick_SaveEdit} = cartSlice_ilmiyDaraja.actions;
export default cartSlice_ilmiyDaraja.reducer