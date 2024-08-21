import React, { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar'
import CreatePost from '../Components/CreatePost'
import Blog from '../Components/Blog'
import { publicRequest } from '../features/requestMethod'
import { BookOpenIcon } from '@heroicons/react/16/solid'

const UserDashborad = () => {
  const [show,setShow] = useState({
    type:"post",
  })

  const userId = localStorage.getItem("user_id")
  const username = localStorage.getItem("user")

  const [userPost,setUserPost] = useState([])

  const getUserPost=async()=>{
    try{
        const res = await publicRequest.get(`/posts/userPost?user_id=${userId}`)
        if(res.status === 201){
            setUserPost(res.data)
        }
    }
    catch(err){
        console.log(err)
    }
  }



  useEffect(()=>{
    getUserPost()
  },[show])

  const handleClick=(type)=>{
        setShow(()=>{
            return {
            type:type,
            }
        }) 
  }


  return (
        <>
        <NavBar />
        <div className=''>
            <div className='px-5 py-4 '>
                <h2 className='text-lg'> <span className='text-orange-400 font-semibold tracking-[1px]'>WELCOME</span>  {username}</h2>
            </div>
            
            <div className='flex p-4 space-x-2'>
            <button
                onClick={() => handleClick("post")}
               className="p-3 text-sm bg-orange-400 font-bold font-BebasNeue tracking-[2px] hover:scale-105 hover:transition hover:duration-150 ease-out  text-white uppercase "
              >
                    Your Blog
              </button>
              <button
                onClick={() => handleClick("createPost")}
               className="p-3 text-sm bg-orange-400 font-bold font-BebasNeue tracking-[2px] hover:scale-105 hover:transition hover:duration-150 ease-out  text-white uppercase "
              >
                Create a Post
              </button>
            </div>

            <div className='p-1'>
                   { 
                    show.type === "createPost" ?
                    // create post section
                    <div>
                         <CreatePost />
                    </div>    
                    :

                    // user post section                   
                    <div>
                        {  userPost ?
                            userPost.length > 0 ? userPost.map((post)=>(
                                <div className='space-y-1'>
                                    <Blog post={post} />
                                </div>
                                ))
                                :
                                <div className='h-[680px] xl:h-screen bg-white flex flex-col justify-center items-center'>
                                    <p className='text-red-700'>NO POST FOUND</p>
                                </div>

                            :

                            <div className='h-[680px] xl:h-screen bg-white flex flex-col justify-center items-center'>
                            <BookOpenIcon className='h-24 w-24 animate-bounce  text-orange-400' />
                            </div>
                        }
                    </div>
                   }   
            </div>
        </div>
        </>
  )
}

export default UserDashborad