import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import { useParams } from "react-router-dom";
import { publicRequest } from "../features/requestMethod";
import { enqueueSnackbar } from "notistack";
import { BookOpenIcon } from "@heroicons/react/16/solid";

const BlogPage = () => {


    const {id} = useParams()

    const [post,setPost]=useState(null)

    const getBlog=async()=>{
        try{
            const res = await publicRequest(`/getpost/${id}`)
            if(res.status === 200){
                setPost(res.data)
            }
        }
        catch(err){
            enqueueSnackbar("Somthing went wrong",{variant : "error"})
        }
    }

    useEffect(()=>{
        getBlog()
    },[])
  

  return (
    <>
      <NavBar />
     { post ? 
      <div>
        <div className="w-full max-w-4xl mx-auto p-4">
          <div className="w-full">
            <img
              className="w-full h-auto object-cover rounded-lg"
              src={post.image}
              alt="Blog post"
            />
          </div>
          <div className="mt-6">
            <h1 className="text-4xl font-bold">{post.title}</h1>
            <p>By {post.authorName} on {new Date(post.createdAt).toLocaleDateString()}</p>
          </div>
          <div className="mt-6">
            <p className="text-lg leading-relaxed text-gray-800">{post.content}</p>
          </div>
        </div>
      </div>
      :
      <div className='h-[680px] xl:h-screen bg-white flex flex-col justify-center items-center'>
      <BookOpenIcon className='h-24 w-24 animate-bounce  text-orange-400' />
      </div>

    }
    </>
  );
};

export default BlogPage;
