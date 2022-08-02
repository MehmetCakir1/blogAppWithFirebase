import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'




export const BlogContext=createContext()



const BlogContextProvider = ({children}) => {
  

const initialValues={title:"",url:"",content:"",userName:""}
const [blog,setBlog]=useState(initialValues)

const editBlog=(title,content,url)=>{
  // setIsAdd(true)
  setBlog({title,content,url})
  
}

// console.log(blog);
// console.log(currentUser.displayName);
  return (
    <BlogContext.Provider value={{blog,setBlog,initialValues,editBlog}}>
        {children}
    </BlogContext.Provider>
  )
}

export default BlogContextProvider