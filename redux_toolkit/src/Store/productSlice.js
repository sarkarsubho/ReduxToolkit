import { createSlice } from "@reduxjs/toolkit";

const Statues= Object.freeze({
    IDEL:"idel",
    ERROR:"error",
    LOADING:"loading"
})

const cartSlice=createSlice({
    name:"product",
    initialState:{
        data:[],
        status: Statues.IDEL
    },
    reducers:{
        setProduct(state,action){

            state.data=action.payload
        },
        remove(state,action){
            return state.filter(item=>item.id !== action.payload)
        }
    }
});

export const {add,remove}=cartSlice.actions;
export default cartSlice.reducer;