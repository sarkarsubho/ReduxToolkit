import { createAsyncThunk, createSlice,PayloadAction} from "@reduxjs/toolkit";
import { type } from "@testing-library/user-event/dist/type";

export const Statues = Object.freeze({
  IDEL: "idel",
  ERROR: "error",
  LOADING: "loading",
});


// For TS useDispatch and useSelector not work you have to made it type of TS type and the use ... 
const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: Statues.IDEL,
  },
  reducers: {
    // setProduct(state, action) {
    //   state.data = action.payload;
    // },
    // setStatus(state, action) {
    //   state.status = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
    
      .addCase(fetchProduct.pending, (state, action) => {
        state.status = Statues.LOADING;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.data=action.payload;
        state.status = Statues.IDEL;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = Statues.ERROR;
      });
  },
});

// export const { setProduct, setStatus } = productSlice.actions;
export default productSlice.reducer;

//thunk
// toolkit also gives us the thunk inbuild function  "createAsyncThunk" which take's two Paramiter 1. identifier 2.an async Function

export const fetchProduct = createAsyncThunk("product/fetch", async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  let data = await res.json();
  return data;
});

// the Basic actual process

// export function fetchProduct(){
//     return async function fetchProductThunk(dispatch,getState){
//         dispatch(setStatus(Statues.LOADING))
//         try{
//             const res=await fetch(`https://fakestoreapi.com/products`);
//             let data= await res.json();
//             dispatch(setProduct(data));
//             dispatch(setStatus(Statues.IDEL))
//         }catch(er){
//              console.log(er);
//             dispatch(setStatus(Statues.ERROR))

//         }
//     }
// }
