import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store =configureStore({
    reducer:{
     cart: cartSlice,
    }
})
// no need to configer devtool it is alrady inBuild configered .
export default store;