import { createSlice } from "@reduxjs/toolkit"

const initialValue = {
    list: JSON.parse(localStorage.getItem("cart")) || []
}

const newItemSlice = createSlice({
    name:"newitem",
    initialState,
    reducers:{

    }
})
export default cartSlice.reducer;
export const {} = cartSlice.actions;