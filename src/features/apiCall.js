import { publicRequest } from './requestMethod'
import {loginFailure,loginStart,loginSuccess, logout } from '../features/currUserSlice'




export const LoginUser = async (dispatch,user)=>{
        try{
        dispatch(loginStart())
        const res = await publicRequest.get(`user/login?username=${user.username}&password=${user.password}`)
        dispatch(loginSuccess(res.data))
        localStorage.setItem("user",res.data.username)
        localStorage.setItem("user_id",res.data._id)
        }
        catch(err){
            dispatch(loginFailure())
        }
}


export const RegisterUser = async (dispatch,user)=>{
    try{
    const res = await publicRequest.post(`user/register`,user)
    if(res.status === 201){
        return true
    }
    }
    catch(err){
        return false
    }
}


export const LogoutUser = async (dispatch)=>{
    dispatch(logout)
    localStorage.clear()
}


export const createPost = async (post)=>{
    try{
        return await publicRequest.post("/posts",post)
    }
    catch(err){
        return err
    }
}

export const getPost = async (dispatch)=>{
    
}