import { UserCircleIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';

import { enqueueSnackbar } from 'notistack';
import NavBar from '../Components/NavBar';
import { LoginUser } from '../features/apiCall';


function Login() {

  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()
  const {error} = useSelector((state)=>state.currUser)
  console.log(error)
  const onSubmit = data => {
    if(!data.username){
      enqueueSnackbar("Enter Username",{variant : "error"})
    }
    else if(!data.password){
      enqueueSnackbar("Enter Password",{variant : "error"})
    }
    else{
      userLogin(data)
    }
  }

  const userLogin=(data) =>{
    LoginUser(dispatch,data) 
    navigate('/loginLoading')
  }
  
  return (
    <>
    <NavBar home={true}/>
    <div className='h-[80vh]  relative bg-no-repeat bg-fixed bg-cover items-center bg-[url("https://ucarecdn.com/84aa8c86-f3cc-44e7-97f8-c011b720ae73/pexelsphoto2041540.jpeg")] bg-image'>
        <div className='w-[400px] absolute right-12 top-32 h-[430px] py-5 px-10 bg-white rounded-xl'>
            {/* error section */}
            {error &&  <div className='text-[10px] flex items-center justify-center text-red-600'>
                <span>Incorrect password/username</span>
            </div> }

            {/* default section */}
            <div className='flex items-center justify-center my-5'>
                <UserCircleIcon className='h-[60px] w-[60px]'/>
            </div>

            <div className='flex flex-col items-center justify-center m-5'>
                <h1 className='text-2xl font-extrabold'>Log in</h1>
                <span className='text-[12px] text-gray-500'>Enter your credentials</span>
            </div>

            {/* form section */}
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-items-center space-y-5'>
                <input 
                 {...register('username')}
                 className='px-5 py-3 border-2 rounded outline-0'
                 placeholder='Username'
                />
                <input 
                {...register('password')}
                className='px-5 py-3 border-2 rounded outline-0'
                placeholder='Password'
                type="password"
                 />
                 <input
                 type="submit"
                 className='bg-black text-white px-5 py-3 w-[100px] uppercase font-bold rounded-full'
                 />
            </form>


            <div className='flex flex-col items-center justify-center p-2'>
                <span className='text-[12px] text-gray-500'>Don't have account? <a className='text-orange-400' href="/register">Register here</a></span>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login