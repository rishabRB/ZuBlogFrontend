import React from 'react'
import { useNavigate } from 'react-router-dom';





const Blog = ({post}) => {

  const navigate = useNavigate()
  const handleClick=()=>{
      navigate(`/blog/${post._id}`)
  }

  const content = post.content.length > 200 ? post.content.slice(0,200) : post.content

  return (
    <div onClick={handleClick} className="flex flex-col md:flex-row w-full p-4 border-b-2">
      <div className="md:w-1/3 w-full flex justify-center">
        <img 
          className="max-w-[500px] w-full h-auto object-contain rounded-lg"
          src={post.image} 
          alt="Blog post"
        />
      </div>
      <div className="md:w-2/3 w-full mt-4 md:mt-0 md:ml-6">
        <div>
          <h2 className="text-2xl font-bold">{post.title}</h2>
        </div>
        <div className="text-gray-500 mt-2">
          <p>By {post.authorName} on {new Date(post.createdAt).toLocaleDateString()}</p>
        </div>
        <div className="mt-2">
          <p className="text-gray-700">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default Blog