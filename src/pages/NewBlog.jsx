import { updateCurrentUser } from "firebase/auth";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { BlogContext } from "../contexts/BlogContext";
import { addBlog, updateBlog } from "../helpers/firebase";

const NewBlog = () => {
  const { blog,setBlog,initialValues} = useContext(BlogContext);
  const {currentUser}=useContext(AuthContext)

  const handleChange = (e)=> {
    e.preventDefault()
    const {name,value}=e.target
    setBlog({ ...blog, [name]: value });
  }
  console.log(blog);

  const handleSubmitBlog=(e)=>{
    e.preventDefault()
    if(blog.id){
      updateBlog(blog,currentUser)
    }else{
      addBlog(blog,currentUser)
    }
    setBlog(initialValues)
  }


  return (
    <div>
      <form className="newForm row d-flex align-items-center justify-content-center flex-column gap-3  m-auto mt-4 p-3 rounded-5" onSubmit={handleSubmitBlog}>
        <input
          type="text"
          className="p-2 rounded-3 border-0"
          name="title"
          required
          placeholder="TITLE"
          value={blog.title}
          onChange={handleChange}
        />
        <input
          type="text"
          className="p-2 rounded-3 border-0"
          name="url"
          required
          placeholder="IMAGE URL"
          value={blog.url}
          onChange={handleChange}
        />
        <textarea
          name="content"
          cols="30"
          rows="10"
          className="rounded-3 p-2 border-0"
          required
          placeholder="CONTENT"
          value={blog.content}
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className="py-2 rounded-3 border-0 btn btn-primary"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default NewBlog;
