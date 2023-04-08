import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    lavozimlar: [
        {id: 1, Nomi: 'Teamleader', Maosh: 2000},
        {id: 2, Nomi: 'Manager', Maosh: 1500},
        {id: 3, Nomi: 'Developer', Maosh: 1000}
    ],
    modalVisibleADD: false,
    modalVisibleEDIT: false,
    EditID: null,
}
const cartSlice_Lavozimlar = createSlice({
    name: 'cart2',
    initialState,
    reducers: {
        Delete: (state, action) => {
            const DeleteID = action.payload
            state.lavozimlar = state.lavozimlar.filter((item) => item.id !== DeleteID)
        },
        ToggleModalADD:(state, action)=> {
            state.modalVisibleADD = !state.modalVisibleADD
        },
        ToggleModalEdit:(state, action)=> {
            state.modalVisibleEDIT = !state.modalVisibleEDIT
        },
        ADD_LAVOZIMLAR:(state, action)=>{
            state.lavozimlar.push(action.payload)
        },
        EDIT_USER: (state, action)=>{
            state.EditID = action.payload
        },
        OnClick_SaveEdit: (state,action) =>{
            const todo  = action.payload
            state.lavozimlar=   state.lavozimlar.map((item) => {
                if (item.id === state.EditID) {
                    return {
                        ...item,
                        Nomi: todo.Nomi,
                        Maosh: todo.Maosh,
                    }
                }
                return item
            })
        }
    }
})


export const {Delete, ToggleModalADD, ADD_LAVOZIMLAR,  ToggleModalEdit, EDIT_USER, OnClick_SaveEdit} = cartSlice_Lavozimlar.actions;
export default cartSlice_Lavozimlar.reducer