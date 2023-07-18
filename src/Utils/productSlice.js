import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { URL } from './Constants';
import StatusCode from './StatusCode';

const initialState={
    data:[],
    status:StatusCode.IDLE
};

const productSlice=createSlice({
    name:'products',
    initialState,
      reducers: {
        
    },
    extraReducers:(builder)=>{
builder
.addCase(getProduct.pending, (state, action)=>{
    state.status=StatusCode.LOADING
})
.addCase(getProduct.fulfilled, (state, action)=>{
    state.data=action.payload;
    state.status=StatusCode.IDLE
})
.addCase(getProduct.rejected, (state, action)=>{
    state.status=StatusCode.ERROR
})
    }
});

export const {fetchProducts}=productSlice.actions;
export default productSlice.reducer;

export const getProduct=createAsyncThunk('product/get', async()=>{
    const data=await fetch(URL)
    const result=await data.json();
    return result;
})

// export function getProduct(){
//     return async function getProductThunk(dispatch, getState){
//         const data=await fetch(URL)
//         const result=await data.json();
//         dispatch(fetchProducts(result))
//     }
// }