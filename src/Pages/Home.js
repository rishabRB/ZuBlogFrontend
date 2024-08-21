import React, { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar'
import Blog from '../Components/Blog'
import { publicRequest } from '../features/requestMethod'
import { BookOpenIcon } from '@heroicons/react/16/solid'

const Home = () => {

 const [posts,setPosts] = useState(null)


 const getPosts = async () => {
    try{
        const res = await publicRequest("/posts")
        if(res.status === 200){
            setPosts(res.data)
        }
    }
    catch(err){
         console.log(err)
    }
 }

 useEffect(()=>{
    getPosts()
 },[])

 console.log(posts)

  return (
    <>
    <NavBar />
    <div className='p-3'>
        {posts ? posts.map((post)=>(
            <div className='space-y-1'>
                <Blog post={post} />
            </div>
        ))
        :
        <div className='h-[680px] xl:h-screen bg-white flex flex-col justify-center items-center'>
        <BookOpenIcon className='h-24 w-24 animate-bounce  text-orange-400' />
        </div>
        }
    </div>
    </>
  )
}

export default Home