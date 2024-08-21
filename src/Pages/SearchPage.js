import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import { BookOpenIcon } from '@heroicons/react/16/solid'
import Blog from '../Components/Blog'
import { publicRequest } from '../features/requestMethod'
import { enqueueSnackbar } from 'notistack'

const SearchPage = () => {

  const [posts,setPost] = useState(null)
  const [searchParams] = useSearchParams()
  const query = searchParams.get('searchParameter')
  const navigate = useNavigate()


  const getPostWithSearchParatmeter =async ()=>{
     try{  
            const res = await publicRequest(`/posts/search?searchParameter=${query}`)
            if(res.status === 200){
                setPost(res.data)
            }
     }
     catch(err){
          enqueueSnackbar("Not found",{variant : "error"})
          navigate("/")

     }
  }

  useEffect(()=>{
    getPostWithSearchParatmeter()
  },[])

  return (
    <>
    <NavBar />
    <div className='p-3'>
        {posts ? 

            posts.length > 0 ? posts.map((post)=>(
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
    </>
  )
}

export default SearchPage