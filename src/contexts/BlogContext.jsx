import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'


export const BlogContext=createContext()



const BlogContextProvider = ({children}) => {

const initialValues={title:"",url:"",content:""}
const [blog,setBlog]=useState(initialValues)
console.log(blog);
  return (
    <BlogContext.Provider value={{blog,setBlog,initialValues}}>
        {children}
    </BlogContext.Provider>
  )
}

export default BlogContextProvider