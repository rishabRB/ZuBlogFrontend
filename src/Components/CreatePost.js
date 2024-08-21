import React, { useState } from 'react';
import { createPost } from '../features/apiCall';
import { enqueueSnackbar } from 'notistack';
import { useSelector } from 'react-redux';

const CreatePost = () => {
  const [image, setImage] = useState(null);
  const [heading, setHeading] = useState('');
  const [content, setContent] = useState('');
  const userId = localStorage.getItem('user_id')
  const authorName = localStorage.getItem('user')

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };


  const handleSubmit = async (e) => {    
    e.preventDefault();

    // handling error
    if(!heading){
        enqueueSnackbar("Enter Heading",{variant : "error"}) 
        return;
    }
    
    if(!content){
        enqueueSnackbar("Enter content",{variant : "error"})  
        return;
    }

    const reset=()=>{
      setImage(null)
      setHeading('')
      setContent('')
    }


    const post = {
        userId : userId,
        authorName : authorName,
        image : image,
        title : heading,
        content : content,
    }

    createPost(post).then((res)=>{
      if(res.status === 201) {
        enqueueSnackbar("Successfull",{variant : "success"})
        reset()
      }
      else if(res.response.status === 400) {
        enqueueSnackbar(res.response.data.message,{variant : "error"})  
      }
    }).catch((err)=>{
       console.log(err)
    })

  };

  return (
    <div className="max-w-4xl mx-auto p-6 font-bold font-BebasNeue bg-white border-2 rounded-lg">
      <form onSubmit={handleSubmit}>
      <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">POST IMAGE</label>
          <div className="flex items-center">
            <label className="bg-orange-400 text-white py-2 px-2 text-sm cursor-pointer">
              CHOOSE IMAGE
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
            {image && (
              <img 
                src={image} 
                alt="Post" 
                className="ml-4 h-24 w-24 object-cover rounded-lg border border-gray-300"
              />
            )}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2">HEADING</label>
          <input
            type="text"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            placeholder="Enter the post heading"
            className="border-2 w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm  mb-2">CONTENT</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your post content here..."
            rows="8"
            className="border-2 w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-orange-400 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
          >
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;