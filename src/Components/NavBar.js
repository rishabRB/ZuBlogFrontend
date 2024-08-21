import { ArrowRightStartOnRectangleIcon, BookOpenIcon, HomeIcon, MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/16/solid';
import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { LogoutUser } from '../features/apiCall';
import { useDispatch } from 'react-redux';

const NavBar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const currUser = localStorage.getItem("user")

  const [searchText,setSearchText] = useState('')


 

  const handleClick = ()=>{
    navigate(`/search?searchParameter=${searchText}`)
  }




  const handleClickLogin = ()=>{
     navigate("/login")
  } 

  const handleLogOut = () =>{
     LogoutUser(dispatch)
     navigate("/home")
     window.location.reload()
  }

    return (
        <nav className="sticky flex items-center justify-between p-4 bg-[#fff] shadow-lg">
          <div
            onClick={() => navigate("/home")}
            className="flex items-center justify-between space-x-2 px-2"
          >
            <BookOpenIcon className="h-8 w-8  text-[black]" />
              <div className="text-black font-medium text-xl">
                Zu<span className="text-orange-500">Blog</span>
              </div>
            </div>
            <div className="w-full flex justify-center items-center ">
              <div></div>
              <div className="border border-orange-500 w-[250px] sm:w-[300px]  flex items-center justify-start">
                <MagnifyingGlassIcon className="h-6 w-6 m-[9px] text-orange-500" />
                <input
                  className="bg-white-500 w-full outline-0 p-2"
                  type=""
                  name=""
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder="Search"
                />
              </div>
              <button
                onClick={handleClick}
               className="p-3 text-sm bg-orange-400 font-bold font-BebasNeue tracking-[2px] hover:scale-105 hover:transition hover:duration-150 ease-out  text-white uppercase "
              >
                Search
              </button>
            </div>
            
            <div className="">
            {currUser ? (
              currUser && window.location.pathname == "/" ?
              <button
                onClick={()=> navigate("/dashboard")}
              >
                <HomeIcon className='h-8 w-8 text-orange-400'/>
              </button>
              :
              <button
              onClick={handleLogOut}
              >
              <ArrowRightStartOnRectangleIcon className='h-8 w-8 text-orange-400'/>
            </button>
            ) : (
              <div className="font-bold text-orange-400 flex items-start">
                <button onClick={handleClickLogin}>
                  <UserCircleIcon className="h-8 w-8 text-orange-500" />
                </button>
              </div>
            )}
          </div>
        </nav>
      );
    }
    

export default NavBar