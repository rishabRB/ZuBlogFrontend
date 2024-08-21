import { BookOpenIcon } from '@heroicons/react/24/solid'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../Components/NavBar'


function HomeLoading() {
  const navigate = useNavigate()  
  useEffect(()=>{
    setTimeout(()=>{
        navigate("/home")
    },1000)
  },[])  
  return (
    <>
    <NavBar />
    <div className='h-[680px] xl:h-screen  w-screen bg-white items-center font-mono justify-center flex'>
        <div className='flex items-center justify-center flex-col'>
          <BookOpenIcon  className='h-40 w-40 animate-bounce text-orange-400 m-3'/>
          <h1 className='uppercase text-3xl font-bold'>Welcome to <spna className="text-orange-400">ZuBlog</spna></h1>
        </div>
    </div>
    </>
  )
}

export default HomeLoading