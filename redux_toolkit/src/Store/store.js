import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";

const store =configureStore({
    reducer:{
     cart: cartSlice,
     product:productSlice
    }
})
// no need to configer devtool it is alrady inBuild configered .
export default store;