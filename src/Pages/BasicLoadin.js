import { BookOpenIcon } from '@heroicons/react/24/outline'
import React, { useEffect } from 'react'
import NavBar from '../Components/NavBar'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function BasicLoading() {
  const navigate = useNavigate()
  const {currUser,error} = useSelector((state) => state.currUser)
  useEffect(()=>{
    if(currUser){
        navigate("/dashboard")
    }
    else if(error){
        navigate("/login")
    }
  })

  return (
    <>
    <NavBar />
    <div className='h-[680px] xl:h-screen bg-white flex flex-col justify-center items-center'>
        <BookOpenIcon className='h-24 w-24 animate-bounce  text-orange-400' />
    </div>
    </>
  )
}

export default BasicLoading