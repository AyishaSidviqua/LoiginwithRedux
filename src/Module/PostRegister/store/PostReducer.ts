import { createSlice } from "@reduxjs/toolkit"
import {PostMiddleWareData} from "../store/PostMiddleWare"

const postinitialState:any={
   loading:false,
   postData:[],
   error:""
}
export const mySlices=createSlice({
name:"user_data",
initialState:postinitialState,
reducers:{
    setLoading:(state)=>{
      state.loading=true
    },
    setPostData:(state,action:any)=>{
        state.loading=false
    },
    setError:(state,action:any)=>{
        state.loading=false
    }
},
extraReducers:(builder)=>{
    builder.addCase(PostMiddleWareData.pending,(state)=>{
      state.loading=true;
    })
    builder.addCase(PostMiddleWareData.fulfilled,(state,action)=>{
        state.loading=false;
        state.postData=action.payload
    })
    builder.addCase(PostMiddleWareData.rejected,(state,action)=>{
        state.loading=false;
        // state.error=action.payload
    })
}

})
export const {setLoading,setPostData,setError}=mySlices.actions;

export const postReducer=mySlices.reducer