import { createSlice } from "@reduxjs/toolkit";
import { LoginMiddleWare } from "./loginMiddleWare";

interface login_State{
    loading:boolean
    userLogin:{}
    error:string
}

const logininitialstate:login_State={
    loading:false,
    userLogin:{},
    error:""
}

const myLogin=createSlice({
    name:"userLogin",
    initialState:logininitialstate,
    reducers:{
       setLoading:(state)=>{
          state.loading=true
       },
       setLogin:(state,action:any)=>{
           state.loading=false
       },
       setError:(state,action:any)=>{
        state.loading=false
       }
    },
    extraReducers: (builder) => {
        builder
          .addCase(LoginMiddleWare.pending, (state) => {
            state.loading = true;
            state.error = "";
          })
          .addCase(LoginMiddleWare.fulfilled, (state, action) => {
            state.loading = false;
            state.userLogin = action.payload;
            state.error = "";
          })
          .addCase(LoginMiddleWare.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "An error occurred during login.";
          });
      },
    // extraReducers:(builder)=>{
    //     builder.addCase(LoginMiddleWare.pending, (state)=>{
    //         state.loading=true
    //     }),
    //     builder.addCase(LoginMiddleWare.fulfilled, (state,action)=>{
    //          state.loading=false,
    //          state.userLogin=action.payload
    //     }),
    //     builder.addCase(LoginMiddleWare.rejected,(state,action)=>{
    //           state.loading=false
    //     })

    // }
})

export const {setLoading,setLogin,setError}=myLogin.actions;
export const  loginReducer=myLogin.reducer