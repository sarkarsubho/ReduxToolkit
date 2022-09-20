import { createSlice } from "@reduxjs/toolkit";

const Statues= Object.freeze({
    IDEL:"idel",
    ERROR:"error",
    LOADING:"loading"
})

const productSlice=createSlice({
    name:"product",
    initialState:{
        data:[],
        status: Statues.IDEL
    },
    reducers:{
        setProduct(state,action){

            state.data=action.payload
        },
       setStatus(state,action){
        state.status=action.payload
       }
    }
});

export const {setProduct,setStatus}=productSlice.actions;
export default productSlice.reducer;

export function fetchProduct(){
    return async function fetchProductThunk(dispatch,getState){
        dispatch(setStatus(Statues.LOADING))
        try{
            const res=await fetch(`https://fakestoreapi.com/products`);
            let data= await res.json();
            dispatch(setProduct(data));
            dispatch(setStatus(Statues.IDEL))
        }catch(er){
             console.log(er);
            dispatch(setStatus(Statues.ERROR))
        
        }
    }
}