import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    isFetching:false,
    currUser:null,
    error:false
}

const currUserSlice = createSlice({
    name:'userLogin',
    initialState,
    reducers:{
        loginStart:(state)=>{
            state.isFetching=true
        },
        loginSuccess:(state,action)=>{
            state.isFetching=false;
            state.currUser=action.payload
        },
        loginFailure:(state)=>{
            state.isFetching=false;
            state.error=true
        },
        logout:(state)=>{
          state.isFetching=false;
          state.currUser=null
        }
    }
})

export const {loginStart,loginSuccess,loginFailure,logout} = currUserSlice.actions
export default currUserSlice.reducer