import {configureStore} from "@reduxjs/toolkit";
import cartSlice from './features/card/cartSlice'
import cartSlice_Lavozimlar from './features/card/cartSlice_Lavozimlar'
import cartSlice_ilmiyDaraja from './features/card/cartSlice_ilmiyDaraja'

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        cart2: cartSlice_Lavozimlar,
        cart3 :cartSlice_ilmiyDaraja
    },
})